import { PictureAsPdf } from "@mui/icons-material";
import { GridActionsCellItem } from "@mui/x-data-grid-pro";
import { useSnackbar } from "contexts/SnackbarContext";
import jsPDF from "jspdf";
import { contratosFields, cuotasFields } from "models/Pagos.model";
import apiMykonos from "services/apiMykonos";

const CuotasExportPDF = ({ contract }) => {
  const { openSnackbar } = useSnackbar();
  const DownloadPdf = async () => {
    try {
      const _cuotas = await apiMykonos.contracts.getCuotas({
        id: contract.id,
        custom: true,
        nombreEstado: true,
      });

      const doc = new jsPDF();
      doc.text("Gestor de pagos", 14, 10);
      doc.text("Codigo de pago: " + contract.id, 14, 40);
      doc.text("Cliente: " + contract[contratosFields.cliente], 14, 30);
      doc.text(
        "Fecha de inicio: " + contract[contratosFields.fechaInicio],
        14,
        50
      );
      doc.text("Lote: " + contract[contratosFields.lote], 14, 60);
      doc.text("Moneda: " + contract[contratosFields.moneda], 14, 70);
      doc.text("Precio: " + contract[contratosFields.precio], 14, 80);
      if (contract[contratosFields.tipoCambio])
        doc.text(
          "Tipo de cambio: " + contract[contratosFields.tipoCambio],
          14,
          90
        );

      doc.autoTable({
        startY: 100,
        head: [
          ["#", "Monto", "Tipo", "Fecha", "Saldo", "Estado"],
          ..._cuotas.map((cuota, index) => [
            index + 1,
            cuota[cuotasFields.monto],
            cuota[cuotasFields.tipo],
            cuota[cuotasFields.fecha],
            cuota[cuotasFields.saldo],
            cuota[cuotasFields.estado],
          ]),
        ],
        bodyStyles: {
          fillColor: [255, 255, 255],
        },
        styles: {
          fontSize: 8,
          overflow: "linebreak",
          cellWidth: "wrap",
          halign: "left",
          valign: "middle",
        },
        columnStyles: {
          0: { cellWidth: 30 },
          1: { cellWidth: 30 },
          2: { cellWidth: 30 },
          3: { cellWidth: 30 },
          4: { cellWidth: 30 },
          5: { cellWidth: 30 },
          6: { cellWidth: 30 },
        },
      });

      doc.save(`Cuotas ${contract[contratosFields.cliente]}.pdf`);
      openSnackbar({ text: "Cuotas exportado en pdf correctamente" });
    } catch (error) {
      openSnackbar({ severity: "error", text: "Error al exportar en pdf" });
    }
  };
  return (
    <>
      <GridActionsCellItem
        icon={<PictureAsPdf />}
        label="Pdf"
        onClick={DownloadPdf}
      />
    </>
  );
};

export default CuotasExportPDF;
