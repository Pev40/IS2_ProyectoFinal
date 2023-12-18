import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { usePagos } from "contexts/PagosContext";
import {
  useCuotasFinanciar,
  useListCuotasFinanciar,
} from "contexts/PagosContext/CuotasFinanciarContext";
import { cuotasFields, pagosFields } from "models/Pagos.model";
import { generarArrayCuotas, roundJS } from "utils/cuotas";
import { getDateSameDayNextMonth } from "utils/date";
import CuotaFinanciar from "./CuotaFinanciar";

const CuotasFinanciar = () => {
  const { cuotas, setCuotas } = useListCuotasFinanciar();
  const { nCuotas, fechaInicioCuotas, setTotalMonto } = useCuotasFinanciar();
  const { pagos, setPagos, setIsDisabledNext, saldoFinanciar } = usePagos();

  const handleNextStepThreeForm = () => {
    const resStepThree = {
      [pagosFields.cantidadCuotasFinanciar]: nCuotas,
      [pagosFields.fechaInicioCuotasFinanciar]: fechaInicioCuotas,
      [pagosFields.cuotasFinanciar]: cuotas,
    };
    setPagos({ ...pagos, ...resStepThree });
  };

  useEffect(() => {
    if (nCuotas && fechaInicioCuotas) {
      const _nCuotasFinanciar = parseInt(nCuotas);
      const _cuotasFinanciar = new Array(_nCuotasFinanciar);

      let date = new Date(fechaInicioCuotas);
      let saldo = saldoFinanciar;
      const initialEndDay = date.getDate();

      const coutasFinanciar = generarArrayCuotas(nCuotas, saldo);
      saldo -= coutasFinanciar[0];
      _cuotasFinanciar[0] = {};
      _cuotasFinanciar[0].n = 1;
      _cuotasFinanciar[0].fecha = date;
      _cuotasFinanciar[0].monto = coutasFinanciar[0];
      _cuotasFinanciar[0].saldo = saldo;

      for (let i = 1; i < _nCuotasFinanciar; i++) {
        _cuotasFinanciar[i] = {};
        const currentDate = date;

        date = getDateSameDayNextMonth(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate(),
          initialEndDay
        );
        saldo -= coutasFinanciar[i];

        _cuotasFinanciar[i].n = i + 1;
        _cuotasFinanciar[i].fecha = date;
        _cuotasFinanciar[i].monto = coutasFinanciar[i];
        _cuotasFinanciar[i].saldo = roundJS(
          _cuotasFinanciar[i - 1].saldo - coutasFinanciar[i]
        );
      }
      setCuotas(_cuotasFinanciar);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nCuotas, fechaInicioCuotas]);

  useEffect(() => {
    setCuotas(pagos[pagosFields.cuotasFinanciar] || []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (nCuotas && fechaInicioCuotas && cuotas.length === +nCuotas) {
      for (let i = 0; i < +nCuotas; i++) {
        if (!cuotas[i][cuotasFields.monto]) {
          setIsDisabledNext(true);
          return;
        }
      }
      handleNextStepThreeForm();
      setIsDisabledNext(false);
      return;
    }
    setIsDisabledNext(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nCuotas, fechaInicioCuotas, cuotas]);

  useEffect(() => {
    if (!cuotas.length) return;
    let montoTotal = 0;
    cuotas.forEach(({ monto }) => {
      montoTotal += parseFloat(monto);
    });
    setTotalMonto(roundJS(montoTotal));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cuotas]);

  return (
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
          {cuotas.map(({ ...props }, i) => (
            <CuotaFinanciar key={props.n} {...props} index={i} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CuotasFinanciar;

