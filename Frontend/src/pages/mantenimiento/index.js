import "./styles.css";
import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import {
  FormGroup,
  ModalFooter,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";

import { useSnackbar } from "contexts/SnackbarContext";
import apiMykonos from "services/apiMykonos";

const pageStyles = {
  paddingTop: "1em",
  display: "flex",
  flexDirection: "column",
};

const estadoLote = [
  { id: 1, label: "Disponible" },
  { id: 2, label: "Separado" },
  { id: 3, label: "Vendido" },
  { id: 4, label: "Bloqueado" },
];



function Mantenimiento() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [loteSeleccionado, setLoteSeleccionado] = useState({
    id: "",
    Lote: "",
    Manzana: "",
    Numero: "",
    Area: "",
    Precio: "",
    Estado: "",
  });

  const { openSnackbar } = useSnackbar();

  useEffect(async () => {
    const _lotes = await apiMykonos.lots.getLots();
    setData(_lotes);
  }, []);

  const seleccionarLote = (elemento, caso) => {
    setLoteSeleccionado(elemento);
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoteSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const editar = async () => {
    try {
      await apiMykonos.lots.updateLot({
        data: {
          idLote: +loteSeleccionado.id,
          idEstado: +loteSeleccionado.idEstadoLote,
          Precio: +loteSeleccionado.Precio,
        },
      });

      setData((prevData) =>
        prevData.map((lote) =>
          lote.id === loteSeleccionado.id
            ? {
                ...lote,
                Lote: loteSeleccionado.Lote,
                Manzana: loteSeleccionado.Manzana,
                Numero: loteSeleccionado.Numero,
                Area: loteSeleccionado.Area,
                Precio: loteSeleccionado.Precio,
                Nombre: estadoLote.find(
                  ({ id }) => id === +loteSeleccionado.idEstadoLote
                )?.label,
                idEstadoLote: +loteSeleccionado.idEstadoLote,
              }
            : lote
        )
      );

      openSnackbar({
        severity: "success",
        text: "Se editó correctamente el lote",
      });

      setModalEditar(false);
    } catch (error) {
      openSnackbar({ severity: "error", text: "Error al editar el lote" });
    }
  };

  const eliminar = () => {
    setData((prevData) =>
      prevData.filter((lote) => lote.id !== loteSeleccionado.id)
    );

    openSnackbar({
      severity: "success",
      text: "Se eliminó correctamente el lote",
    });

    setModalEliminar(false);
  };

  const insertar = () => {
    const valorInsertar = {
      ...loteSeleccionado,
      id: data[data.length - 1]?.id + 1 || 1,
    };

    setData((prevData) => [...prevData, valorInsertar]);

    openSnackbar({
      severity: "success",
      text: "Se insertó correctamente el lote",
    });

    setModalInsertar(false);
  };

  return (
    <Container className="Manenimiento" maxWidth="xl" style={pageStyles}>
      <Typography variant="h4" align="center">
        Terrenos
      </Typography>

      <div className="detallesProductos" style={{ height: "100%", width: "100%" }}>
        <table>
          <thead>
            <tr>
              <th scope="col">Lote</th>
              <th scope="col">Manzana</th>
              <th scope="col">Numero</th>
              <th scope="col">Area</th>
              <th scope="col">Precio</th>
              <th scope="col">Estado</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.length
              ? data.map((elemento) => (
                  <tr key={elemento.id}>
                    <td>{`${elemento.Letra}-${elemento.Numero}`}</td>
                    <td>{elemento.Letra}</td>
                    <td>{elemento.Numero}</td>
                    <td>{elemento.Area}</td>
                    <td>{elemento.Precio}</td>
                    <td>{elemento.Nombre}</td>
                    <td>
                      <Button
                        color="primary"
                        onClick={() => seleccionarLote(elemento, "Editar")}
                      >
                        Editar Lote
                      </Button>
                    </td>
                  </tr>
                ))
              : []}
          </tbody>
        </table>
      </div>

      {/* MODAL INSERTAR */}
      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar Nuevo Terreno</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <label htmlFor="idInput">ID:</label>
            <input
              id="idInput"
              className="form-control"
              readOnly
              type="hidden"
              value={loteSeleccionado?.id || (data[data.length - 1]?.id + 1) || 1}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="loteInput">Lote:</label>
            <input
              id="loteInput"
              className="form-control"
              name="Lote"
              type="text"
              value={loteSeleccionado?.Lote || ""}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="manzanaInput">Manzana:</label>
            <input
              id="manzanaInput"
              className="form-control"
              name="Manzana"
              type="text"
              value={loteSeleccionado ? loteSeleccionado.Manzana : ""}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="numeroInput">Numero:</label>
            <input
              id="numeroInput"
              className="form-control"
              name="Numero"
              type="text"
              value={loteSeleccionado ? loteSeleccionado.Numero : ""}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="areaInput">Area:</label>
            <input
              id="areaInput"
              className="form-control"
              name="Area"
              type="text"
              value={loteSeleccionado ? loteSeleccionado.Area : ""}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="precioInput">Precio:</label>
            <input
              id="precioInput"
              className="form-control"
              name="Precio"
              type="text"
              value={loteSeleccionado ? loteSeleccionado.Precio : ""}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="estadoInput">Estado:</label>
            <select
              id="estadoInput"
              className="form-control"
              name="Estado"
              type="text"
              value={loteSeleccionado ? loteSeleccionado.Estado : ""}
              onChange={handleChange}
            >
              <option value="Disponible" id="1-D">Disponible</option>
              <option value="Vendido" id="2-V">Vendido</option>
              <option value="Reservado" id="3-R">Reservado</option>
              <option value="Bloqueado" id="4-B">Bloqueado</option>
            </select>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={insertar}>
            Insertar
          </Button>
          <Button color="danger" onClick={() => setModalInsertar(false)}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

      {/* MODAL EDITAR */}
      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div className="textModal">
            <h3>Editar Lote</h3>
            <h1>{loteSeleccionado?.Lote}</h1>
          </div>
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <label htmlFor="idEditarInput">ID:</label>
            <input
              id="idEditarInput"
              className="form-control"
              readOnly
              type="hidden"
              value={loteSeleccionado?.id}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="loteEditarInput">Lote:</label>
            <input
              id="loteEditarInput"
              className="form-control"
              name="Lote"
              type="hidden"
              value={loteSeleccionado?.Lote}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="manzanaEditarInput">Manzana:</label>
            <input
              id="manzanaEditarInput"
              className="form-control"
              name="Manzana"
              type="hidden"
              value={loteSeleccionado?.Manzana || ""}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="numeroEditarInput">Numero:</label>
            <input
              id="numeroEditarInput"
              className="form-control"
              name="Numero"
              type="hidden"
              value={loteSeleccionado?.Numero || ""}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="areaEditarInput">Area:</label>
            <input
              id="areaEditarInput"
              className="form-control"
              name="Area"
              type="hidden"
              value={loteSeleccionado?.Area || ""}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="precioEditarInput">Precio:</label>
            <input
              id="precioEditarInput"
              className="form-control"
              name="Precio"
              type="text"
              value={loteSeleccionado?.Precio || ""}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="estadoEditarInput">Estado:</label>
            <select
              id="estadoEditarInput"
              className="form-control"
              name="idEstadoLote"
              type="text"
              value={loteSeleccionado?.idEstadoLote || ""}
              onChange={handleChange}
            >
              {estadoLote.map(({ id, label }) => (
                <option key={id} value={id}>
                  {label}
                </option>
              ))}
            </select>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => setModalEditar(false)}>
            Cancelar
          </Button>
          <Button color="primary" onClick={editar}>
            Grabar
          </Button>
        </ModalFooter>
      </Modal>

      {/* MODAL ELIMINAR */}
      <Modal isOpen={modalEliminar}>
        <ModalBody>
          ¿Estás seguro que deseas eliminar el lote {loteSeleccionado?.Lote}?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={eliminar}>
            Si
          </Button>
          <Button color="secondary" onClick={() => setModalEliminar(false)}>
            No
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default Mantenimiento;
