import { Box, Container, Typography } from "@mui/material";
import DialogCreateUsuarios from "components/Usuarios/DialogCreateUsuarios";
import TableUsuarios from "components/Usuarios/TableUsuarios";
import { UsuariosProvider } from "contexts/UsuariosContext";

const pageStyles = {
  paddingTop: "1em",
  display: "flex",
  flexDirection: "column",
};

const Usuarios = () => {
  return (
    <UsuariosProvider>
      <Container className="Pagos" maxWidth="xl" style={pageStyles}>
        <Typography variant="h4" align="center">
          Usuarios
        </Typography>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <DialogCreateUsuarios />
        </Box>
        <TableUsuarios />
      </Container>
    </UsuariosProvider>
  );
};

export default Usuarios;
