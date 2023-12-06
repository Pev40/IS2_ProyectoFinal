import { Button } from "@mui/material";
import { useSnackbar } from "contexts/SnackbarContext";
import { contratosFields } from "models/Pagos.model";
import * as XLSX from "xlsx/xlsx.mjs";

function CuotasExportPagos({ contracts = [] }) {
  const { openSnackbar } = useSnackbar();
  const DownloadExcelAll = () => {
    try {
      const table = document.getElementById("ContratosExportXLSX");
      const ws = XLSX.utils.table_to_sheet(table);
      // const ws = XLSX.utils.json_to_sheet(contracts);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Gestor de pagos");
      XLSX.writeFile(wb, "Contratos.xlsx");
      openSnackbar({ text: "Contratos exportado correctamente" });
    } catch (error) {
      openSnackbar({ severity: "error", text: "Error al exportar Pagos" });
    }
  };

  return (
    <>
      <Button
        id="exportar"
        variant="contained"
        color="success"
        onClick={DownloadExcelAll}
      >
        Exportar a Excel
      </Button>
      <div>
        <table id="ContratosExportXLSX" style={{ display: "none" }}>
          <tbody>
            {/* <tr>
              <td>Recaudado</td>
              <td>188529l.2</td>
            </tr>
            <tr>
              <td>Pendiente total por cobrar</td>
              <td>48529l.2</td>
            </tr> */}
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>#</th>
              <th>Codigo</th>
              <th>Cliente</th>
              <th>Manzana</th>
              <th>Numero Terreno</th>
              <th>Moneda</th>
              <th>FechaInicio</th>
              <th>Siguiente Pago</th>
              <th>Estado Pago</th>
              <th>Deuda Pendiente</th>
            </tr>
            {contracts.length
              ? contracts.map((contract, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{contract.id}</td>
                    <td>{contract[contratosFields.cliente]}</td>
                    <td>{contract[contratosFields.mz]}</td>
                    <td>{contract[contratosFields.lote]}</td>
                    <td>{contract[contratosFields.moneda]}</td>
                    <td>{contract[contratosFields.fechaInicio]}</td>
                    <td>{contract[contratosFields.fechaPago]}</td>
                    <td>{contract[contratosFields.estadoPago]}</td>
                    <td>{contract[contratosFields.deudaPendiente]}</td>
                  </tr>
                ))
              : []}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default CuotasExportPagos;
