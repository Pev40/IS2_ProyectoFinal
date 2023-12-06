import { Box, Container, Typography } from "@mui/material";
import ClientesDialogCreate from "components/Clientes/ClientesDialogCreate";
import ClientesTable from "components/Clientes/ClientesTable";
import { ClientesProvider } from "contexts/ClientesContext";

const pageStyles = {
  paddingTop: "1em",
  display: "flex",
  flexDirection: "column",
};

const Clientes = () => {
  return (
    <ClientesProvider>
      <Container className="Pagos" maxWidth="xl" style={pageStyles}>
        <Typography variant="h4" align="center">
          Clientes
        </Typography>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <ClientesDialogCreate />
        </Box>
        <ClientesTable />
      </Container>
    </ClientesProvider>
  );
};

export default Clientes;
