import { Container, Typography } from "@mui/material";
import LoginForm from "components/Login/LoginForm";

const Login = () => {
  return (
  
      <Container maxWidth="xs" sx={{ paddingTop: "2em" }}>
        <Typography
          variant="h4"
          align="center"
          component="div"
          noWrap
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Iniciar Sesión
        </Typography>
        <LoginForm />
      </Container>
    
  );
};

export default Login;
