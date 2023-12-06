import { Edit } from "@mui/icons-material";
import { Dialog, useMediaQuery, useTheme } from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid-pro";
import { useState } from "react";
import FormEditUsuarios from "./FormEditUsuarios";

const DialogEditUsuarios = ({ user }) => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpenDialog = async () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <GridActionsCellItem
        icon={<Edit />}
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
          <FormEditUsuarios
            setOpen={setOpen}
            user={user}
            handleCloseDialog={handleCloseDialog}
          />
        </Dialog>
      )}
    </>
  );
};

export default DialogEditUsuarios;
