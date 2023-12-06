import { useSnackbar } from "contexts/SnackbarContext";
import apiMykonos from "services/apiMykonos";

import { yupResolver } from "@hookform/resolvers/yup";
import {
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Autocomplete,
} from "@mui/material";
import { textFieldStyles } from "components/General/TextField";
import Cliente, { clientesFields } from "models/Clientes.model";
import { useForm } from "react-hook-form";
import { useClientes } from "contexts/ClientesContext";

const FormClientesEdit = ({
  setOpen,
  client,
  locality,
  localities,
  handleCloseDialog,
}) => {
  const { openSnackbar } = useSnackbar();
  const { setIsCreated } = useClientes();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Cliente),
    defaultValues: {
      [clientesFields.nombre]: client[clientesFields.nombre],
      [clientesFields.direccion]: client[clientesFields.direccion],
      [clientesFields.distrito]: client[clientesFields.distrito],
      [clientesFields.dni]: client[clientesFields.dni],
      [clientesFields.telefono]: client[clientesFields.telefono],
      [clientesFields.correo]: client[clientesFields.correo],
      [clientesFields.coopropietario]: client[clientesFields.coopropietario],
      [clientesFields.telefonoCoopropietario]:
        client[clientesFields.telefonoCoopropietario],
    },
  });

  const handleSubmitUpdate = async (values) => {
    try {
      const res = await apiMykonos.clients.updateClient({ data: values });
      setIsCreated(true);
      setOpen(false);
      openSnackbar({ text: "Cliente modificado correctamente" });
    } catch (error) {
      console.error(error);
      openSnackbar({ severety: "error", text: "Error al modificar cliente" });
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitUpdate)}>
      <DialogTitle>
        Modificar Cliente <b>{client[clientesFields.dni]}</b>
      </DialogTitle>
      <DialogContent
        sx={{
          paddingTop: "1rem !important",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <TextField
          {...textFieldStyles}
          {...register(clientesFields.nombre)}
          label="Nombre"
          error={errors[clientesFields.nombre]?.message && true}
          helperText={errors[clientesFields.nombre]?.message}
        />
        <TextField
          {...textFieldStyles}
          {...register(clientesFields.direccion)}
          label="Direccion"
          error={errors[clientesFields.direccion]?.message && true}
          helperText={errors[clientesFields.direccion]?.message}
        />
        <Autocomplete
          {...textFieldStyles}
          {...register(clientesFields.distrito)}
          defaultValue={locality}
          options={localities}
          onChange={(_, data) => {
            setValue(clientesFields.distrito, data?.id);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              {...textFieldStyles}
              label="Localidad"
              error={errors[clientesFields.distrito]?.message && true}
              helperText={errors[clientesFields.distrito]?.message}
            />
          )}
        />
        <TextField
          {...textFieldStyles}
          {...register(clientesFields.telefono)}
          label="Telefono"
          error={errors[clientesFields.telefono]?.message && true}
          helperText={errors[clientesFields.telefono]?.message}
        />
        <TextField
          {...textFieldStyles}
          {...register(clientesFields.correo)}
          label="Correo"
          error={errors[clientesFields.correo]?.message && true}
          helperText={errors[clientesFields.correo]?.message}
        />
        <TextField
          {...textFieldStyles}
          {...register(clientesFields.coopropietario)}
          label="Coopropietario"
          error={errors[clientesFields.coopropietario]?.message && true}
          helperText={errors[clientesFields.coopropietario]?.message}
        />
        <TextField
          {...textFieldStyles}
          {...register(clientesFields.telefonoCoopropietario)}
          label="Telefono Coopropietario"
          error={errors[clientesFields.telefonoCoopropietario]?.message && true}
          helperText={errors[clientesFields.telefonoCoopropietario]?.message}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog}>Cancelar</Button>
        <Button type="submit" variant="contained" color="success">
          Enviar
        </Button>
      </DialogActions>
    </form>
  );
};

export default FormClientesEdit;
