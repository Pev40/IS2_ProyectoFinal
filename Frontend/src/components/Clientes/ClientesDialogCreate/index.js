import { yupResolver } from "@hookform/resolvers/yup";
import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { textFieldStyles } from "components/General/TextField";
import { useClientes } from "contexts/ClientesContext";
import { useSnackbar } from "contexts/SnackbarContext";
import Cliente, { clientesFields } from "models/Clientes.model";
import { useState } from "react";
import { useForm } from "react-hook-form";
import apiMykonos from "services/apiMykonos";

const ClientesDialogCreate = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const { setIsCreated } = useClientes();
  const { openSnackbar } = useSnackbar();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpenDialog = async () => {
    const _localities = await apiMykonos.clients.getLocalities();
    setOptions(_localities);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    reset(null);
  };

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Cliente),
  });

  const handleSubmitCreate = async (values) => {
    try {
      console.log(values);
      const res = await apiMykonos.clients.createClient({ data: values });
      openSnackbar({ text: "Cliente creado correctamente" });
      setIsCreated(true);
      setOpen(false);
    } catch (error) {
      console.error(error);
      openSnackbar({ severity: "error", text: "Error al crear cliente" });
    }
  };
  return (
    <>
      <Button variant="contained" onClick={handleOpenDialog}>
        Crear
      </Button>
      {open && (
        <Dialog
          className="ClientesDialog"
          open={open}
          onClose={handleCloseDialog}
          maxWidth="sm"
          fullWidth={true}
          fullScreen={fullScreen}
        >
          <form onSubmit={handleSubmit(handleSubmitCreate)}>
            <DialogTitle>Agregar Nuevo Cliente</DialogTitle>
            <DialogContent
              sx={{
                paddingTop: "1rem !important",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <TextField
                {...textFieldStyles}
                {...register(clientesFields.nombre)}
                label="Nombre"
                error={errors[clientesFields.nombre]?.message && true}
                helperText={errors[clientesFields.nombre]?.message}
              />
              <TextField
                {...textFieldStyles}
                {...register(clientesFields.direccion)}
                label="Direccion"
                error={errors[clientesFields.direccion]?.message && true}
                helperText={errors[clientesFields.direccion]?.message}
              />
              <Autocomplete
                {...textFieldStyles}
                {...register(clientesFields.distrito)}
                options={options}
                onChange={(_, data) => {
                  setValue(clientesFields.distrito, data?.id);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    {...textFieldStyles}
                    label="Localidad"
                    error={errors[clientesFields.distrito]?.message && true}
                    helperText={errors[clientesFields.distrito]?.message}
                  />
                )}
              />
              <TextField
                {...textFieldStyles}
                {...register(clientesFields.dni)}
                label="DNI"
                error={errors[clientesFields.dni]?.message && true}
                helperText={errors[clientesFields.dni]?.message}
              />
              <TextField
                {...textFieldStyles}
                {...register(clientesFields.telefono)}
                label="Telefono"
                error={errors[clientesFields.telefono]?.message && true}
                helperText={errors[clientesFields.telefono]?.message}
              />
              <TextField
                {...textFieldStyles}
                {...register(clientesFields.correo)}
                label="Correo"
                error={errors[clientesFields.correo]?.message && true}
                helperText={errors[clientesFields.correo]?.message}
              />
              <TextField
                {...textFieldStyles}
                {...register(clientesFields.coopropietario)}
                label="Coopropietario"
                error={errors[clientesFields.coopropietario]?.message && true}
                helperText={errors[clientesFields.coopropietario]?.message}
              />
              <TextField
                {...textFieldStyles}
                {...register(clientesFields.telefonoCoopropietario)}
                label="Telefono Coopropietario"
                error={
                  errors[clientesFields.telefonoCoopropietario]?.message && true
                }
                helperText={
                  errors[clientesFields.telefonoCoopropietario]?.message
                }
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Cancelar</Button>
              <Button type="submit" variant="contained" color="success">
                Enviar
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      )}
    </>
  );
};

export default ClientesDialogCreate;
