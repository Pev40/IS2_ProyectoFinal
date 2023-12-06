import DialogEditUsuarios from "../DialogEditUsuarios";
import { useUsuarios } from "contexts/UsuariosContext";
import { usuariosFields } from "models/Usuarios.model";
import { useEffect } from "react";
import apiMykonos from "services/apiMykonos";
import DialogDeleteUsuarios from "../DialogDeleteUsuarios";
import { DataGridPro } from "@mui/x-data-grid-pro";

const styles = {
  height: "100%",
  width: "100%",
};

const TableUsuarios = () => {
  const { users, setUsers, isCreated, setIsCreated } = useUsuarios();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const _users = await apiMykonos.users.getUsers();

    setUsers(_users);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (isCreated) {
      const _users = await apiMykonos.users.getUsers();
      setUsers(_users);
      setIsCreated(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCreated]);

  return (
    <div className="Usuarios-table" style={styles}>
      <DataGridPro
        rows={users}
        columns={[
          {
            field: usuariosFields.name,
            headerName: "Nombres",
            type: "string",
            minWidth: 250,
          },
          {
            field: usuariosFields.lastName,
            headerName: "Apellidos",
            type: "string",
            minWidth: 250,
          },
          {
            field: usuariosFields.dni,
            headerName: "DNI",
            type: "string",
            minWidth: 150,
          },
          {
            field: usuariosFields.username,
            headerName: "Correo electrónico",
            type: "string",
            minWidth: 300,
          },
          {
            field: "actions",
            headerName: "Acciones",
            type: "actions",
            minWidth: 100,
            getActions: (params) => [
              <DialogEditUsuarios user={params.row} />,
              <DialogDeleteUsuarios user={params.row} />,
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

export default TableUsuarios;
