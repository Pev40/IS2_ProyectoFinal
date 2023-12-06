import "./styles.css";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { useEffect } from "react";
import PagosEditDialog from "../PagosEditDialog";
import PagosDeleteDialog from "../PagosDeleteDialog";

import "jspdf-autotable";

import apiMykonos from "services/apiMykonos";
import { useContratos } from "contexts/ContratosContext";
import { contratosFields } from "models/Pagos.model";
import { format } from "date-fns";
import { EditCuotasProvider } from "contexts/EditCuotasContext";
import CuotasExportPagos from "components/Cuotas/CuotasExportPagos";
import CuotasExportXLSX from "components/Cuotas/CuotasExportXLSX";
import CuotasExportPDF from "components/Cuotas/CuotasExportPDF";

const PagosTable = () => {
  const { contracts, setContracts, isCreated, setIsCreated } = useContratos();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const _contracts = await apiMykonos.contracts.getContracts();
    setContracts(_contracts);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (isCreated) {
      const _contracts = await apiMykonos.contracts.getContracts();
      for (let i = 0; i < _contracts.length; i++) {
        _contracts[i][contratosFields.fechaInicio] = format(
          new Date(_contracts[i][contratosFields.fechaInicio]),
          "yyyy-MM-dd"
        );
      }

      setContracts(_contracts);
      setIsCreated(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCreated]);

  return (
    <div className="Pagos-table">
      <CuotasExportPagos contracts={contracts} />
      <DataGridPro
        rows={contracts}
        columns={[
          { field: "id", headerName: "Código", width: 70 },
          {
            field: contratosFields.cliente,
            headerName: "Cliente",
            type: "string",
            minWidth: 150,
          },
          {
            field: contratosFields.mz,
            headerName: "Manzana",
            type: "string",
            minWidth: 100,
          },
          {
            field: contratosFields.lote,
            headerName: "Número terreno",
            type: "number",
            minWidth: 100,
          },
          {
            field: contratosFields.moneda,
            headerName: "Moneda",
            type: "string",
            minWidth: 100,
          },
          {
            field: contratosFields.fechaInicio,
            headerName: "Fecha inicio",
            type: "string",
            minWidth: 120,
          },
          {
            field: contratosFields.fechaPago,
            headerName: "Siguiente pago",
            type: "string",
            minWidth: 130,
          },
          {
            field: contratosFields.estadoPago,
            headerName: "Estado pago",
            type: "string",
            minWidth: 130,
          },
          {
            field: contratosFields.cuotasVencidas,
            headerName: "Cuotas vencidas",
            type: "string",
            minWidth: 140,
          },
          {
            field: contratosFields.deudaPendiente,
            headerName: "Deuda pendiente",
            type: "string",
            minWidth: 140,
          },
          {
            field: "actions",
            type: "actions",
            width: 150,
            getActions: (params) => {
              return [
                <CuotasExportXLSX contract={params.row} />,
                <CuotasExportPDF contract={params.row} />,
                <EditCuotasProvider>
                  <PagosEditDialog pago={params.row} />
                </EditCuotasProvider>,
                <PagosDeleteDialog pago={params.row} />,
              ];
            },
          },
        ]}
        initialState={{
          pinnedColumns: {
            right: ["actions"],
          },
        }}
      />
    </div>
  );
};

export default PagosTable;
