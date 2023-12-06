import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEditCuotas } from "contexts/EditCuotasContext";

import CuotaEdit from "./CuotaEdit";

const TablePagosEdit = ({ id }) => {
  const { cuotas } = useEditCuotas();

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Tipo</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>Monto Cuota</TableCell>
            <TableCell>Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cuotas.map(({ ...props }, i) => (
            <CuotaEdit {...props} index={i} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablePagosEdit;
