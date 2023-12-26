import React from "react";
import PropTypes from "prop-types";
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
  const getClientLabel = (clientId) =>
    clients.find(({ id }) => clientId === id)?.label || "";

  const getProjectLabel = (projectId) =>
    projects.find(({ id }) => projectId === id)?.label || projects[0]?.label || "";

  const getLotLabel = (lotId) =>
    lots.find(({ id }) => lotId === id)?.label || "";

  const getCurrencyLabel = (currencyId) =>
    divisas.find(({ id }) => currencyId === id)?.label || "";

  return (
    <>
      <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
        Resumen
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="body1">
          <b>Cliente: </b>
          {getClientLabel(pagos[pagosFields.cliente])}
        </Typography>
        <Typography variant="body1">
          <b>Proyecto: </b>
          {getProjectLabel(pagos[pagosFields.proyecto])}
        </Typography>
        <Typography variant="body1">
          <b>Lote: </b>
          {getLotLabel(pagos[pagosFields.lote])}
        </Typography>
        <Typography variant="body1">
          <b>Moneda: </b>
          {getCurrencyLabel(pagos[pagosFields.moneda])}
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
              {pagos[pagosFields.cuotasInicial]?.map((cuota) => (
                <TableRow key={cuota[cuotasFields.numero]}>
                  <TableCell>{cuota[cuotasFields.numero] || ""}</TableCell>
                  <TableCell>
                    {cuota[cuotasFields.fecha]
                      ? format(cuota[cuotasFields.fecha], "dd/MM/yyyy")
                      : ""}
                  </TableCell>
                  <TableCell>{cuota[cuotasFields.monto] || ""}</TableCell>
                  <TableCell>
                    {cuota[cuotasFields.saldo]?.toString() || ""}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={2} align="right">
                  Total
                </TableCell>
                <TableCell>
                  {pagos[pagosFields.cuotasInicial]?.reduce(
                    (total, { monto }) => total + parseFloat(monto),
                    0
                  )}
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
              {pagos[pagosFields.cuotasFinanciar]?.map((cuota) => (
                <TableRow key={cuota[cuotasFields.numero]}>
                  <TableCell>{cuota[cuotasFields.numero] || ""}</TableCell>
                  <TableCell>
                    {cuota[cuotasFields.fecha]
                      ? format(cuota[cuotasFields.fecha], "dd/MM/yyyy")
                      : ""}
                  </TableCell>
                  <TableCell>{cuota[cuotasFields.monto] || ""}</TableCell>
                  <TableCell>
                    {cuota[cuotasFields.saldo]?.toString() || ""}
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

Resume.propTypes = {
  pagos: PropTypes.object.isRequired,
  clients: PropTypes.array.isRequired,
  lots: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired,
  divisas: PropTypes.array.isRequired,
};

export default Resume;




