import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import { cuotasFields, pagosFields } from "models/Pagos.model";
import { roundJS } from "utils/cuotas";

const Resume = ({ pagos, clients, lots, projects, divisas }) => {
  return (
    <>
      <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
        Resumen
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="body1">
          <b>Cliente: </b>
          {clients.find(({ id }) => pagos[pagosFields.cliente] === id)?.label ||
            ""}
        </Typography>
        <Typography variant="body1">
          <b>Proyecto: </b>
          {projects.find(({ id }) => pagos[pagosFields.proyecto] === id)
            ?.label || projects[0].label}
        </Typography>
        <Typography variant="body1">
          <b>Lote: </b>
          {lots.find(({ id }) => pagos[pagosFields.lote] === id)?.label || ""}
        </Typography>
        <Typography variant="body1">
          <b>Moneda: </b>
          {divisas.find(({ id }) => pagos[pagosFields.moneda] === id)?.label ||
            ""}
        </Typography>
        <Typography variant="body1">
          <b>Precio: </b>
          {pagos[pagosFields.precio] || ""}
        </Typography>
        <Typography variant="body1">
          <b>Cuotas Iniciales</b>
        </Typography>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Fecha</TableCell>
                <TableCell>Monto Cuota</TableCell>
                <TableCell>Saldo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pagos[pagosFields.cuotasInicial] &&
                pagos[pagosFields.cuotasInicial].map((cuota) => (
                  <TableRow key={cuota[cuotasFields.numero]}>
                    <TableCell>{cuota[cuotasFields.numero] || ""}</TableCell>
                    <TableCell>
                      {cuota[cuotasFields.fecha]
                        ? format(cuota[cuotasFields.fecha], "dd/MM/yyyy")
                        : ""}
                    </TableCell>
                    <TableCell>{cuota[cuotasFields.monto] || ""}</TableCell>
                    <TableCell>
                      {cuota[cuotasFields.saldo].toString() || ""}
                    </TableCell>
                  </TableRow>
                ))}
              <TableRow>
                <TableCell colSpan={2} align="right">
                  Total
                </TableCell>
                <TableCell>
                  {pagos[pagosFields.cuotasInicial] &&
                    (function () {
                      let montoTotal = 0;
                      pagos[pagosFields.cuotasInicial].forEach(({ monto }) => {
                        montoTotal += parseFloat(monto);
                      });
                      return <>{roundJS(montoTotal)}</>;
                    })()}
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="body1">
          <b>Cuotas a Financiar</b>
        </Typography>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Fecha</TableCell>
                <TableCell>Monto Cuota</TableCell>
                <TableCell>Saldo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pagos[pagosFields.cuotasFinanciar] &&
                pagos[pagosFields.cuotasFinanciar].map((cuota) => (
                  <TableRow key={cuota[cuotasFields.numero]}>
                    <TableCell>{cuota[cuotasFields.numero] || ""}</TableCell>
                    <TableCell>
                      {cuota[cuotasFields.fecha]
                        ? format(cuota[cuotasFields.fecha], "dd/MM/yyyy")
                        : ""}
                    </TableCell>
                    <TableCell>{cuota[cuotasFields.monto] || ""}</TableCell>
                    <TableCell>
                      {cuota[cuotasFields.saldo].toString() || ""}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Resume;
