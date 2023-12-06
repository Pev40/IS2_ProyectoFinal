import { MenuItem, Select, TableCell, TableRow } from "@mui/material";
import { useEditCuotas } from "contexts/EditCuotasContext";
import { useSnackbar } from "contexts/SnackbarContext";
import { cuotasFields } from "models/Pagos.model";
import apiMykonos from "services/apiMykonos";

const CuotaEdit = ({
  n,
  id,
  tipo,
  fecha,
  monto = 0,
  saldo,
  estado = 1,
  index,
}) => {
  const { cuotas, setCuotas } = useEditCuotas();

  const { openSnackbar } = useSnackbar();

  const handleChangeEstado = async ({ target: { value } }) => {
    try {
      const _cuotas = cuotas;
      await apiMykonos.contracts.updateCuota({
        data: { idPago: id, idEstado: value },
      });

      _cuotas[index][cuotasFields.estado] = value;
      setCuotas([..._cuotas]);
      openSnackbar({ text: "Cuota modificada correctamente" });
    } catch (error) {
      openSnackbar({ severity: "error", text: "Error al modificar cuota" });
    }
  };

  return (
    <TableRow>
      <TableCell>{tipo}</TableCell>
      <TableCell>{fecha}</TableCell>
      <TableCell>{monto}</TableCell>
      <TableCell>
        <Select value={estado} onChange={handleChangeEstado} size="small">
          <MenuItem value={2}>Pendiente</MenuItem>
          <MenuItem value={1}>Pagado</MenuItem>
        </Select>
      </TableCell>
    </TableRow>
  );
};

export default CuotaEdit;
