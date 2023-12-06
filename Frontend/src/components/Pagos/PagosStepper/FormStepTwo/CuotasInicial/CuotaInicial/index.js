import { TableCell, TableRow, TextField } from "@mui/material";
import { textFieldStyles } from "components/General/TextField";
import { usePagos } from "contexts/PagosContext";
import { useListCuotasInicial } from "contexts/PagosContext/CuotasInicialContext";
import format from "date-fns/format";
import { pagosFields } from "models/Pagos.model";
import { calcCuotas } from "utils/cuotas";
import { periodRegex } from "utils/regex";

const CuotaInicial = ({ n, fecha, monto = 0, saldo, tipo, estado, index }) => {
  const { pagos } = usePagos();
  const { cuotas, setCuotas } = useListCuotasInicial();

  const handleChangeMount = ({ target: { value } }) => {
    if (!value) {
      const _cuotasInicial = cuotas;
      setCuotas([
        ...calcCuotas(_cuotasInicial, index, pagos[pagosFields.precio]),
      ]);
      return;
    }
    if (periodRegex.test(value)) {
      const _cuotasInicial = cuotas;
      setCuotas([
        ...calcCuotas(_cuotasInicial, index, pagos[pagosFields.precio], value),
      ]);
    }
  };

  return (
    <TableRow>
      <TableCell>{n}</TableCell>
      <TableCell>
        <TextField
          {...textFieldStyles}
          inputProps={{ style: { height: "1em" } }}
          type="date"
          onChange={({ target: { value } }) => {
            const _date = new Date(value);
            if (!Number.isNaN(_date.getTime())) {
              _date.setDate(_date.getDate() + 1);
              // setDate(format(_date, "yyyy-MM-dd"));
              const _cuotasInicial = cuotas;
              _cuotasInicial[index].fecha = _date;
              setCuotas([..._cuotasInicial]);
            } else {
              setCuotas((prevCuotas) => [...prevCuotas]);
            }
          }}
          value={format(fecha, "yyyy-MM-dd")}
        />
      </TableCell>
      <TableCell>
        <TextField
          {...textFieldStyles}
          inputProps={{ style: { height: "1em" } }}
          value={monto || ""}
          type="number"
          onChange={handleChangeMount}
        />
      </TableCell>
      <TableCell>{saldo.toString()}</TableCell>
    </TableRow>
  );
};

export default CuotaInicial;
