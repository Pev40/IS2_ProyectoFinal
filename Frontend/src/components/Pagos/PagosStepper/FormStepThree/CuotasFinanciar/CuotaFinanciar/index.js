import React from "react";
import PropTypes from "prop-types";
import { TableCell, TableRow, TextField } from "@mui/material";
import { textFieldStyles } from "components/General/TextField";
import { usePagos } from "contexts/PagosContext";
import { useListCuotasFinanciar } from "contexts/PagosContext/CuotasFinanciarContext";
import format from "date-fns/format";

import { editarCouta } from "utils/cuotas";
import { periodRegex } from "utils/regex";

const CuotaFinanciar = ({ n, fecha, monto = 0, saldo, tipo, estado, index }) => {
  const { saldoFinanciar } = usePagos();
  const { cuotas, setCuotas } = useListCuotasFinanciar();

  const handleChangeMount = ({ target: { value } }) => {
    if (!value) {
      const _cuotasFinanciar = cuotas;
      setCuotas([
        ...editarCouta(index + 1, 0, saldoFinanciar, _cuotasFinanciar),
      ]);
      return;
    }
    if (periodRegex.test(value)) {
      const _cuotasFinanciar = cuotas;
      setCuotas([
        ...editarCouta(index + 1, value, saldoFinanciar, _cuotasFinanciar),
      ]);
    }
  };

  return (
    <TableRow>
      <TableCell>{n}</TableCell>
      <TableCell>{format(fecha, "yyyy-MM-dd")}</TableCell>
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

CuotaFinanciar.propTypes = {
  n: PropTypes.number.isRequired,
  fecha: PropTypes.instanceOf(Date).isRequired,
  monto: PropTypes.number,
  saldo: PropTypes.number.isRequired,
  tipo: PropTypes.string.isRequired,
  estado: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default CuotaFinanciar;


