import { TextField } from "@mui/material";
import { textFieldStyles } from "components/General/TextField";
import { usePagos } from "contexts/PagosContext";
import {
  ListCuotasFinanciarProvider,
  useCuotasFinanciar,
} from "contexts/PagosContext/CuotasFinanciarContext";
import { format } from "date-fns";
import { pagosFields } from "models/Pagos.model";
import { useEffect } from "react";
import { integerRegex } from "utils/regex";
import CuotasFinanciar from "./CuotasFinanciar";

const FormStepThree = () => {
  const { nCuotas, setNCuotas, fechaInicioCuotas, setFechaInicioCuotas } =
    useCuotasFinanciar();
  const { pagos, endFechaInicial } = usePagos();

  useEffect(() => {
    setNCuotas(pagos[pagosFields.cantidadCuotasFinanciar] || "");
    setFechaInicioCuotas(
      pagos[pagosFields.fechaInicioCuotasFinanciar] || endFechaInicial
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form>
      <TextField
        {...textFieldStyles}
        label="Cantidad Cuotas Monto a Financiar"
        onChange={({ target: { value } }) => {
          if (!value) {
            setNCuotas(value);
            return;
          }
          if (integerRegex.test(value)) setNCuotas(value);
        }}
        value={nCuotas}
        helperText="Debe ingresar un numero menor a 100"
      />
      <TextField
        {...textFieldStyles}
        type="date"
        label="Fecha Cuotas Monto a Financiar"
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

      <ListCuotasFinanciarProvider>
        <CuotasFinanciar />
      </ListCuotasFinanciarProvider>
    </form>
  );
};

export default FormStepThree;