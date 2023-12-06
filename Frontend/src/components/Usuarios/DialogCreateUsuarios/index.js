import { yupResolver } from "@hookform/resolvers/yup";
import { textFieldStyles } from "components/General/TextField";
import { useSnackbar } from "contexts/SnackbarContext";
import { useUsuarios } from "contexts/UsuariosContext";
import Usuario, { usuariosFields } from "models/Usuarios.model";
import { useState } from "react";
import { useForm } from "react-hook-form";
import apiMykonos from "services/apiMykonos";

const {
  Button,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  TextField,
} = require("@mui/material");

const DialogCreateUsuarios = () => {
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
    reset(null);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Usuario),
  });

  const handleSubmitCreate = async (values) => {
    try {
      const res = await apiMykonos.users.createUser({ data: values });

      setIsCreated(true);
      openSnackbar({ text: "Usuario creado correctamente" });
      setOpen(false);
    } catch (error) {
      console.error(error);
      openSnackbar({ severity: "error", text: "Error al crear usuario" });
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
            <DialogTitle>Agregar Nuevo Usuario</DialogTitle>
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
                {...register(usuariosFields.name)}
                label="Nombre"
                error={errors[usuariosFields.name]?.message && true}
                helperText={errors[usuariosFields.name]?.message}
              />
              <TextField
                {...textFieldStyles}
                {...register(usuariosFields.lastName)}
                label="Apellido"
                error={errors[usuariosFields.lastName]?.message && true}
                helperText={errors[usuariosFields.lastName]?.message}
              />
              <TextField
                {...textFieldStyles}
                {...register(usuariosFields.dni)}
                label="DNI"
                error={errors[usuariosFields.dni]?.message && true}
                helperText={errors[usuariosFields.dni]?.message}
              />
              <TextField
                {...textFieldStyles}
                {...register(usuariosFields.username)}
                label="Correo electronico"
                error={errors[usuariosFields.username]?.message && true}
                helperText={errors[usuariosFields.username]?.message}
              />

              <TextField
                {...textFieldStyles}
                {...register(usuariosFields.password)}
                label="Contraseña"
                type="password"
                error={errors[usuariosFields.password]?.message && true}
                helperText={errors[usuariosFields.password]?.message}
              />
              <TextField
                {...textFieldStyles}
                {...register(usuariosFields.confirmPassword)}
                label="Confirmar contraseña"
                type="password"
                error={errors[usuariosFields.confirmPassword]?.message && true}
                helperText={errors[usuariosFields.confirmPassword]?.message}
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

export default DialogCreateUsuarios;
