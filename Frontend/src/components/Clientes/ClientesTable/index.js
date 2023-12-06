import { useEffect } from "react";
import apiMykonos from "services/apiMykonos";
import ClientesDialogEdit from "../ClientesDialogEdit";
import { useClientes } from "contexts/ClientesContext";
import ClientesDialogDelete from "../ClientesDialogDelete";
import { DataGridPro } from "@mui/x-data-grid-pro";

const styles = {
  height: "100%",
  width: "100%",
};

const ClientesTable = () => {
  const { clients, setClients, isCreated, setIsCreated } = useClientes();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const _clients = await apiMykonos.clients.getClients();
    setClients(_clients);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (isCreated) {
      const _clients = await apiMykonos.clients.getClients();
      setClients(_clients);
      setIsCreated(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCreated]);

  return (
    <div className="Clientes-table" style={styles}>
      <DataGridPro
        rows={clients}
        columns={[
          {
            field: "Nombres",
            headerName: "Nombres",
            type: "string",
            minWidth: 150,
          },
          {
            field: "Direccion",
            headerName: "Dirección",
            type: "string",
            minWidth: 150,
          },
          {
            field: "Distrito",
            headerName: "Distrito",
            type: "string",
            minWidth: 150,
          },
          { field: "DNI", headerName: "DNI", type: "string", minWidth: 100 },
          {
            field: "Telefono",
            headerName: "Telefono",
            type: "string",
            minWidth: 150,
          },
          {
            field: "Email",
            headerName: "Correo",
            type: "string",
            minWidth: 150,
          },
          {
            field: "actions",
            type: "actions",
            width: 100,
            getActions: (params) => [
              <ClientesDialogEdit dni={params.row.DNI} />,
              <ClientesDialogDelete client={params.row} />,
            ],
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

export default ClientesTable;
