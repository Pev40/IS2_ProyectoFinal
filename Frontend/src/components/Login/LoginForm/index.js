import { TextField, Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { textFieldStyles } from "components/General/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Login, { loginFields } from "models/Login.model";
import { useContext, useState } from "react";
import AuthContext from "contexts/AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();

  const { signIn } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Login) });

  const handleSubmitLoginForm = async (values) => {
    try {
      setIsLoading(true);
      await signIn({ data: values });
      navigate("/clientes");
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitLoginForm)}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <TextField
          {...textFieldStyles}
          {...register(loginFields.username)}
          label="Usuario"
          type="text"
          error={errors[loginFields.username]?.message && true}
          helperText={errors[loginFields.username]?.message}
        />
        <TextField
          {...textFieldStyles}
          {...register(loginFields.password)}
          label="Contraseña"
          type="password"
          
          error={errors[loginFields.password]?.message && true}
          helperText={errors[loginFields.password]?.message}
        />
        <LoadingButton variant="contained" loading={isLoading} type="submit">
          Iniciar Sesión
        </LoadingButton>
      </Box>
    </form>
  );
};

export default LoginForm;
