import { textFieldStyles } from "components/General/TextField";
import { useEffect } from "react";
import { pagosFields } from "models/Pagos.model";
import { usePagos } from "contexts/PagosContext";

import { TextField } from "@mui/material";
import { integerRegex } from "utils/regex";
import {
  ListCuotasInicialProvider,
  useCuotasInicial,
} from "contexts/PagosContext/CuotasInicialContext";
import CuotasInicial from "./CuotasInicial";
import { format } from "date-fns";

const FormStepTwo = () => {
  const { nCuotas, setNCuotas, fechaInicioCuotas, setFechaInicioCuotas } =
    useCuotasInicial();

  const { pagos } = usePagos();

  useEffect(() => {
    setNCuotas(pagos[pagosFields.cantidadCuotasInicial] || 0);
    setFechaInicioCuotas(pagos[pagosFields.fechaInicioCuotasInicial] || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form>
      <TextField
        {...textFieldStyles}
        label="Cantidad Cuotas Monto Inicial"
        onChange={({ target: { value } }) => {
          if (!value) {
            setNCuotas(value);
            return;
          }
          if (integerRegex.test(value)) setNCuotas(value);
        }}
        value={nCuotas || ""}
        helperText="Debe ingresar un numero menor a 50"
      />
      <TextField
        {...textFieldStyles}
        type="date"
        label="Fecha Cuotas Monto Inicial"
        InputLabelProps={{ shrink: true }}
        onChange={({ target: { value } }) => {
          
          const date = new Date(value);
          if (!Number.isNaN(date.getTime())) {
            date.setDate(date.getDate() + 1);
            setFechaInicioCuotas(date);
          } else {
            setFechaInicioCuotas((prevValue) => prevValue);
          }
        }}
        value={fechaInicioCuotas && format(fechaInicioCuotas, "yyyy-MM-dd")}
      />
      <ListCuotasInicialProvider>
        <CuotasInicial />
      </ListCuotasInicialProvider>
    </form>
  );
};

export default FormStepTwo;
