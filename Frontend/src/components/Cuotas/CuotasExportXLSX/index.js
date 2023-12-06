import { LibraryBooks } from "@mui/icons-material";
import { GridActionsCellItem } from "@mui/x-data-grid-pro";
import { useSnackbar } from "contexts/SnackbarContext";
import { contratosFields, cuotasFields } from "models/Pagos.model";
import { useEffect, useRef, useState } from "react";
import apiMykonos from "services/apiMykonos";
import * as XLSX from "xlsx/xlsx.mjs";

function CuotasExportXLSX({ contract }) {

  const [cuotas, setCuotas] = useState([]);
  const tableRef = useRef();

  const { openSnackbar } = useSnackbar();

  const DownloadExcel = async () => {
    
    try {
      const _cuotas = await apiMykonos.contracts.getCuotas({
        id: contract.id,
        custom: true,
        nombreEstado: true,
      });
      setCuotas(_cuotas)
      const table = document.getElementById(`CuotasExportXLSX-${contract.id}`);     
      const ws = XLSX.utils.table_to_sheet(table);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Gestor de pagos");
      XLSX.writeFile(wb, `Cuotas ${contract[contratosFields.cliente]}.xlsx`);
      openSnackbar({ text: "Cuotas exportado en excel correctamente" });
      
    } catch (error) {
      console.error(error);
      openSnackbar({ severity: "error", text: "Error al exportar en excel" });
    }

  } ;
  
  return (
    
    <>
      <GridActionsCellItem
        icon={<LibraryBooks />}
        label="Excel"
        onClick={DownloadExcel}
        
      />
      
      <table id={`CuotasExportXLSX-${contract.id}`} name ="CuotasExportXLSX" style={{ display: "none" }} ref={tableRef}>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }} colSpan="6">
              Estado de pagos
            </th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cliente:</td>
            <td>{contract[contratosFields.cliente]}  </td>
          </tr>
          <tr>
            <td>Codigo de pago:</td>
            <td>{contract.id}</td>
          </tr>
          <tr>
            <td>Fecha de inicio:</td>
            <td>{contract[contratosFields.fechaInicio]}</td>
          </tr>
          <tr>
            <td>Lote:</td>
            <td>
              {contract[contratosFields.mz]}-{contract[contratosFields.lote]}
            </td>
          </tr>
          <tr>
            <td>Moneda:</td>
            <td>{contract[contratosFields.moneda]}</td>
          </tr>
          <tr>
            <td>Precio:</td>
            <td>{contract[contratosFields.precio]}</td>
          </tr>
          {contract[contratosFields.tipoCambio] ? (
            <tr>
              <td>Tipo de cambio:</td>
              <td>{contract[contratosFields.tipoCambio]}</td>
            </tr>
          ) : (
            <></>
          )}

          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th>#</th>
            <th>Monto</th>
            <th>Tipo</th>
            <th>Fecha</th>
            <th>Saldo</th>
            <th>Estado</th>
          </tr>
          {cuotas.length
            ? cuotas.map((cuota, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{cuota[cuotasFields.monto]}</td>
                  <td>{cuota[cuotasFields.tipo]}</td>
                  <td>{cuota[cuotasFields.fecha]}</td>
                  <td>{cuota[cuotasFields.saldo]}</td>
                  <td>{cuota[cuotasFields.estado]}</td>
                </tr>
              ))
            : []}
        </tbody>
      </table>
    </>
  );
  
}

export default CuotasExportXLSX;
