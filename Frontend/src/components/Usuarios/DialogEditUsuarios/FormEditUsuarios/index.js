import { yupResolver } from "@hookform/resolvers/yup";
import { useClientes } from "contexts/ClientesContext";
import { useSnackbar } from "contexts/SnackbarContext";
import { usuariosFields, UsuarioUpdate } from "models/Usuarios.model";
import { useForm } from "react-hook-form";
import apiMykonos from "services/apiMykonos";

import {
  DialogContent,
  DialogActions,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import { textFieldStyles } from "components/General/TextField";

const FormEditUsuarios = ({ setOpen, user, handleCloseDialog }) => {
  const { openSnackbar } = useSnackbar();
  const { setIsCreated } = useClientes();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UsuarioUpdate),
    defaultValues: {
      [usuariosFields.dni]: user[usuariosFields.dni],
    },
  });

  const handleSubmitUpdate = async (values) => {
    try {
      await apiMykonos.users.updateUser({ data: values });

      setIsCreated(true);
      setOpen(false);
      openSnackbar({ text: "Usuario modificado correctamente" });
    } catch (error) {
      console.error(error);
      openSnackbar({ severety: "error", text: "Error al modificar usuario" });
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitUpdate)}>
      <DialogTitle>
        Modificar Usuario{" "}
        <b>
          {user[usuariosFields.name]} {user[usuariosFields.lastName]}
        </b>
      </DialogTitle>
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
          {...register(usuariosFields.password)}
          label="Contraseña actual"
          type="password"
          error={errors[usuariosFields.password]?.message && true}
          helperText={errors[usuariosFields.password]?.message}
        />
        <TextField
          {...textFieldStyles}
          {...register(usuariosFields.newPassword)}
          label="Nueva contraseña"
          type="password"
          error={errors[usuariosFields.newPassword]?.message && true}
          helperText={errors[usuariosFields.newPassword]?.message}
        />
        <TextField
          {...textFieldStyles}
          {...register(usuariosFields.confirmNewPassword)}
          label="Confirmación de nueva contraseña"
          type="password"
          error={errors[usuariosFields.confirmNewPassword]?.message && true}
          helperText={errors[usuariosFields.confirmNewPassword]?.message}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog}>Cancelar</Button>
        <Button type="submit" variant="contained" color="success">
          Enviar
        </Button>
      </DialogActions>
    </form>
  );
};

export default FormEditUsuarios;
