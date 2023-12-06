import "./styles.css";
import PagosTable from "components/Pagos/PagosTable";
import PagosDialog from "components/Pagos/PagosDialog";

import { Container, Typography, Box } from "@mui/material";
import { PagosProvider } from "contexts/PagosContext";
import { ContratosProvider } from "contexts/ContratosContext";

const pageStyles = {
  paddingTop: "1em",
  display: "flex",
  flexDirection: "column",
};

const Pagos = () => {
  return (
    <ContratosProvider>
      <Container className="Pagos" maxWidth="xl" style={pageStyles}>
        <Typography variant="h4" align="center">
          Pagos
        </Typography>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <PagosProvider>
            <PagosDialog />
          </PagosProvider>
        </Box>
        <PagosTable />
      </Container>
    </ContratosProvider>
  );
};

export default Pagos;
