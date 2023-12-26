import { Container, Typography } from "@mui/material";

const Home = () => {
  return (
          <Container maxWidth="xl" sx={{ paddingTop: "2em" }}>
        <Typography
          variant="h2"
          align="center"
          component="div"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Bienvenidos al Gestor de Pagos - Mykonos
        </Typography>
      </Container>
  );
};

export default Home;
