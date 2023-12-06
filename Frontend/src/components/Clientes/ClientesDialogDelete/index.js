import { Delete as DeleteIcon } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid-pro";
import { useClientes } from "contexts/ClientesContext";
import { useSnackbar } from "contexts/SnackbarContext";
import { clientesFields } from "models/Clientes.model";
import { useState } from "react";
import apiMykonos from "services/apiMykonos";

const ClientesDialogDelete = ({ client }) => {
  const [open, setOpen] = useState(false);
  const { setIsCreated } = useClientes();
  const { openSnackbar } = useSnackbar();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpenDialog = async () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    try {
      await apiMykonos.clients.deleteClient({
        dni: client[clientesFields.dni],
      });
      setOpen(false);
      setIsCreated(true);
      openSnackbar({ text: "Cliente eliminado correctamente" });
    } catch (error) {
      openSnackbar({ severity: "error", text: "Cliente al eliminar cliente" });
    }
  };

  return (
    <>
      <GridActionsCellItem
        icon={<DeleteIcon />}
        label="Delete"
        onClick={handleOpenDialog}
      />
      {open && (
        <Dialog
          className="ClientesDialog"
          open={open}
          onClose={handleCloseDialog}
          maxWidth="sm"
          fullWidth={true}
          fullScreen={fullScreen}
        >
          <DialogTitle>Eliminar Cliente</DialogTitle>
          <DialogContent>
            Está seguro eliminar el cliente:{" "}
            <b>{client[clientesFields.nombre]}</b>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancelar</Button>
            <Button onClick={handleDelete} variant="contained" color="error">
              Eliminar
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default ClientesDialogDelete;
