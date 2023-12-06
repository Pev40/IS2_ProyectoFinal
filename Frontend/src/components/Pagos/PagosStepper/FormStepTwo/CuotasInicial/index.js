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
  useCuotasInicial,
  useListCuotasInicial,
} from "contexts/PagosContext/CuotasInicialContext";
import { cuotasFields, pagosFields } from "models/Pagos.model";
import { useEffect } from "react";
import { roundJS } from "utils/cuotas";

import { getDateSameDayNextMonth } from "utils/date";
import CuotaInicial from "./CuotaInicial";

const CuotasInicial = () => {
  const { cuotas, setCuotas } = useListCuotasInicial();
  const { nCuotas, fechaInicioCuotas, totalMonto, setTotalMonto } =
    useCuotasInicial();
  const {
    pagos,
    setPagos,
    setIsDisabledNext,
    setSaldoFinanciar,
    setEndFechaInicial,
  } = usePagos();

  const handleNextStepTwoForm = () => {
    const resStepTwo = {
      [pagosFields.cantidadCuotasInicial]: +nCuotas,
      [pagosFields.fechaInicioCuotasInicial]: fechaInicioCuotas,
      [pagosFields.fechaInicial]: fechaInicioCuotas,
      [pagosFields.cuotasInicial]: cuotas,
    };
    setPagos({ ...pagos, ...resStepTwo });
    setSaldoFinanciar(cuotas[nCuotas - 1][cuotasFields.saldo]);

    const currentDate = cuotas[nCuotas - 1][cuotasFields.fecha];
    const nextDate = getDateSameDayNextMonth(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      currentDate.getDate()
    );
    setEndFechaInicial(nextDate);
  };

  useEffect(() => {
    if (
      nCuotas &&
      fechaInicioCuotas &&
      (nCuotas !== pagos[pagosFields.cantidadCuotasInicial] ||
        fechaInicioCuotas !== pagos[pagosFields.fechaInicioCuotasInicial])
    ) {
      const _nCuotasInicial = parseInt(nCuotas);
      const _cuotasInicial = new Array(_nCuotasInicial);

      let date = new Date(fechaInicioCuotas);
      const initialEndDay = date.getDate();

      _cuotasInicial[0] = {};
      _cuotasInicial[0].n = 1;
      _cuotasInicial[0][cuotasFields.fecha] = date;
      _cuotasInicial[0][cuotasFields.monto] = 0;
      _cuotasInicial[0][cuotasFields.saldo] = pagos[pagosFields.precio];

      for (let i = 1; i < _nCuotasInicial; i++) {
        _cuotasInicial[i] = {};
        const currentDate = date;

        /* Fecha */
        date = getDateSameDayNextMonth(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate(),
          initialEndDay
        );

        /* Monto */

        _cuotasInicial[i].n = i + 1;
        _cuotasInicial[i][cuotasFields.fecha] = date;
        _cuotasInicial[i][cuotasFields.monto] = 0;
        _cuotasInicial[i][cuotasFields.saldo] = pagos[pagosFields.precio];
      }
      setCuotas([..._cuotasInicial]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nCuotas, fechaInicioCuotas]);

  useEffect(() => {
    setCuotas(pagos[pagosFields.cuotasInicial] || []);
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

      handleNextStepTwoForm();
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
            <CuotaInicial key={props.n} {...props} index={i} />
          ))}
          <TableRow>
            <TableCell colSpan={2} align="right">
              Total
            </TableCell>
            <TableCell>{totalMonto}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CuotasInicial;
