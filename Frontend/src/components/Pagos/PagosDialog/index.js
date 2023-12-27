import "./styles.css";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  useMediaQuery,
  DialogActions,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import PagosStepper from "../PagosStepper";
import { usePagos } from "contexts/PagosContext";
import FormStepOne from "../PagosStepper/FormStepOne";
import { CuotasInicialProvider } from "contexts/PagosContext/CuotasInicialContext";
import FormStepTwo from "../PagosStepper/FormStepTwo";
import apiMykonos from "services/apiMykonos";
import FormStepThree from "../PagosStepper/FormStepThree";
import { CuotasFinanciarProvider } from "contexts/PagosContext/CuotasFinanciarContext";
import { cuotasFields, pagosFields } from "models/Pagos.model";
import { format } from "date-fns";
import { useSnackbar } from "contexts/SnackbarContext";
import { useCookies } from "react-cookie";
import { useContratos } from "contexts/ContratosContext";

const PagosDialog = () => {
  const [open, setOpen] = useState(false);

  const { setIsCreated } = useContratos();

  const theme = useTheme();
  const {
    pagos,
    setPagos,
    steps,
    setSteps,
    activeStep,
    setActiveStep,
    isDisabledNext,
    setIsDisabledNext,
    setClients,
    setLots,
    setDolar,
  } = usePagos();

  const divisas = [
    { id: 1, label: "Dolar" },
    { id: 2, label: "Sol" },
  ]

  const proyectos = [
    { id: 1, label: "UNSA" },
    { id: 2, label: "UCSM" },
    { id: 3, label: "UCSP" },
  ]
  const [cookies] = useCookies(["pagos_mykonos_token"]);

  const { openSnackbar } = useSnackbar();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setIsDisabledNext(true);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpenDialog = async () => {
    const _clients = await apiMykonos.clients.getClients(true);
    console.log(_clients);
    const _lots = await apiMykonos.lots.getLotsLN(true);
    console.log(_lots);
    const _dolar = await apiMykonos.divisas.getDolar();
    console.log(_dolar);
    setClients(_clients);
    setLots(_lots);
    setDolar(_dolar);

    const STEPS = [
      {
        label: "Datos del pago",
        component: (
          <FormStepOne projects={proyectos} lots={_lots} clients={_clients} dolar={_dolar} divisas={divisas} />
        ),
      },
      {
        label: "Cuotas iniciales",
        component: (
          <CuotasInicialProvider>
            <FormStepTwo />
          </CuotasInicialProvider>
        ),
      },
      {
        label: "Cuotas a financiar",
        component: (
          <CuotasFinanciarProvider>
            <FormStepThree />
          </CuotasFinanciarProvider>
        ),
      },
    ];

    setSteps(STEPS);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setPagos({});
    setOpen(false);
    setActiveStep(0);
  };

  const handleSubmit = async () => {
    try {
      const user = await apiMykonos.users.getUser({
        dni: cookies["pagos_mykonos_token"],
      });

      const _pagos = JSON.parse(JSON.stringify(pagos));

      _pagos[pagosFields.fechaInicial] = format(
        new Date(_pagos[pagosFields.fechaInicial]),
        "yyyy-MM-dd"
      );
      for (let i = 0; i < _pagos[pagosFields.cuotasInicial].length; i++) {
        _pagos[pagosFields.cuotasInicial][i][cuotasFields.fecha] = format(
          new Date(_pagos[pagosFields.cuotasInicial][i][cuotasFields.fecha]),
          "yyyy-MM-dd"
        );
      }
      for (let i = 0; i < _pagos[pagosFields.cuotasFinanciar].length; i++) {
        _pagos[pagosFields.cuotasFinanciar][i][cuotasFields.fecha] = format(
          new Date(_pagos[pagosFields.cuotasFinanciar][i][cuotasFields.fecha]),
          "yyyy-MM-dd"
        );
      }

      _pagos[pagosFields.usuario] = user.id;

      await apiMykonos.contracts.createContract({ data: _pagos });
      openSnackbar({ text: "Contrato creado correctamente" });
      setIsCreated(true);
      setOpen(false);
    } catch (error) {
      openSnackbar({ severity: "error", text: "Error al crear contrato" });
    }
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpenDialog}>
        Crear
      </Button>

      {open && (
        <Dialog
          className="PagosDialog"
          open={open}
          maxWidth="sm"
          fullWidth={true}
          fullScreen={fullScreen}
        >
          <DialogTitle>Agregar Nuevo Pago</DialogTitle>
          <DialogContent>
            <PagosStepper />
          </DialogContent>
          <DialogActions>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button onClick={handleCloseDialog}>Cancelar</Button>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  Atras
                </Button>
                {activeStep === steps.length ? (
                  <Button variant="contained" onClick={handleSubmit}>
                    Enviar
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    disabled={isDisabledNext}
                    variant="contained"
                  >
                    {activeStep === steps.length - 1
                      ? "Finalizar"
                      : "Siguiente"}
                  </Button>
                )}
              </Box>
            </Box>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default PagosDialog;
