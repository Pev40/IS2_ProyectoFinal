import { useTheme } from "@mui/material/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";
import TablePagosEdit from "./TablePagosEdit";
import { useState } from "react";
import { GridActionsCellItem } from "@mui/x-data-grid-pro";
import { Edit } from "@mui/icons-material";
import apiMykonos from "services/apiMykonos";
import { useEditCuotas } from "contexts/EditCuotasContext";
import { useContratos } from "contexts/ContratosContext";

const PagosEditDialog = ({ pago }) => {
  const [open, setOpen] = useState(false);

  const { setIsCreated } = useContratos();
  const { setCuotas } = useEditCuotas();

  const handleOpenDialog = async () => {
    const _cuotas = await apiMykonos.contracts.getCuotas({
      id: pago.id,
      custom: true,
    });
    setCuotas(_cuotas);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setCuotas([]);
    setIsCreated(true);
    setOpen(false);
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <GridActionsCellItem
        icon={<Edit />}
        label="Edit"
        onClick={handleOpenDialog}
      />
      {open && (
        <Dialog
          className="PagosDialog"
          open={open}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth={true}
          fullScreen={fullScreen}
        >
          <DialogTitle>Modificar Cuotas</DialogTitle>
          <DialogContent>
            <TablePagosEdit />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancelar</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default PagosEditDialog;
