import "./styles.css";
import { Button } from "reactstrap";
import apiMykonos from "services/apiMykonos";
import { useEffect, React, useState } from "react";
import { useSnackbar } from "contexts/SnackbarContext";
import { Container, Typography } from "@mui/material";

const pageStyles = {
  paddingTop: "1em",
  display: "flex",
  flexDirection: "column",
};

function Ajustes() {
  const [tipoCambio, setTipoCambio] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const _cambio = await apiMykonos.divisas.getDolar();
    setTipoCambio(_cambio || 0);
  }, []);

  const handleInputChange = ({ target: { value } }) => {
    setTipoCambio(value);
  };

  const enviarDatos = async (event) => {
    try {
      event.preventDefault();
      await apiMykonos.divisas.updateTipoCambio({
        cambio: +tipoCambio,
      });
      openSnackbar({
        text: "Se realizo correctamente el tipo de cambio",
      });
    } catch (error) {
      openSnackbar({
        severity: "error",
        text: "Error al modificar el tipo de cambio",
      });
    }
  };

  const { openSnackbar } = useSnackbar();

  return (
    <Container className="Ajustes" maxWidth="xl" style={pageStyles}>
      <Typography variant="h4" align="center">
        Ajustes
      </Typography>
      <label>Tipo de cambio 1 USD a Sol</label>
      <form className="row" onSubmit={enviarDatos}>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Tipo de cambio"
            className="form-control"
            onChange={handleInputChange}
            name="cambio"
            value={tipoCambio}
          ></input>
        </div>
        <Button
          type="submit"
          color="success"
          className="btn btn-primary  col-auto"
        >
          Enviar
        </Button>
      </form>
    </Container>
  );
}

export default Ajustes;
