import { Edit as EditIcon } from "@mui/icons-material";
import { Dialog, useMediaQuery, useTheme } from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid-pro";
import { clientesFields } from "models/Clientes.model";
import { useState } from "react";

import apiMykonos from "services/apiMykonos";
import FormClientesEdit from "./FormClientesEdit";

const ClientesDialogEdit = ({ dni }) => {
  const [open, setOpen] = useState(false);
  const [client, setClient] = useState({});
  const [localities, setLocalities] = useState([]);
  const [locality, setLocality] = useState(null);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpenDialog = async () => {
    const _client = await apiMykonos.clients.getClient({ dni });
    const _localities = await apiMykonos.clients.getLocalities();
    const _locality = _localities.find(
      ({ id }) => id === _client[clientesFields.distrito]
    );

    setClient(_client);
    setLocalities(_localities);
    setLocality(_locality);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <GridActionsCellItem
        icon={<EditIcon />}
        label="Edit"
        onClick={handleOpenDialog}
      />
      {open && (
        <Dialog
          className="ClientesDialog"
          open={open}
          onClose={handleCloseDialog}
          maxWidth="sm"
          fullWidth={true}
          fullScreen={fullScreen}
        >
          <FormClientesEdit
            setOpen={setOpen}
            localities={localities}
            client={client}
            locality={locality}
            handleCloseDialog={handleCloseDialog}
          />
        </Dialog>
      )}
    </>
  );
};

export default ClientesDialogEdit;
