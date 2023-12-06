import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useSnackbar } from "contexts/SnackbarContext";
import { useUsuarios } from "contexts/UsuariosContext";
import apiMykonos from "services/apiMykonos";
import { Delete } from "@mui/icons-material";
import { GridActionsCellItem } from "@mui/x-data-grid-pro";
import { useState } from "react";
import { usuariosFields } from "models/Usuarios.model";

const DialogDeleteUsuarios = ({ user }) => {
  const [open, setOpen] = useState(false);
  const { setIsCreated } = useUsuarios();
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
      await apiMykonos.users.deleteUser({
        dni: user[usuariosFields.dni],
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
        icon={<Delete />}
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
          <DialogTitle>Eliminar Usuario</DialogTitle>
          <DialogContent>
            Está seguro eliminar el usuario: <b>{user[usuariosFields.name]}</b>
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
export default DialogDeleteUsuarios;
