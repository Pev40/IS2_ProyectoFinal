import { format } from "date-fns";
import { contratosFields, cuotasFields } from "models/Pagos.model";
import { roundJS } from "utils/cuotas";
import { del, get, patch, post } from "../api.service";

// Función para manejar errores y agregar lógica específica si es necesario
const handleApiError = (functionName, error) => {
  console.error(`Error in ${functionName}:`, error);
  throw error;
};

export const getContracts = async () => {
  try {
    const res = await get({
      url: "contratos",
    });
    if (res?.status === "ERROR") throw res;

    res.forEach((contract) => {
      contract.id = contract.idContrato;
      contract[contratosFields.deudaPendiente] = roundJS(
        contract[contratosFields.deudaPendiente]
      );
      contract[contratosFields.fechaInicio] = contract[
        contratosFields.fechaInicio
      ]
        ? format(new Date(contract[contratosFields.fechaInicio]), "yyyy-MM-dd")
        : "";
      contract[contratosFields.fechaPago] = contract[contratosFields.fechaPago]
        ? format(new Date(contract[contratosFields.fechaPago]), "yyyy-MM-dd")
        : "";
    });

    return res;
  } catch (error) {
    handleApiError("getContracts", error);
  }
};

export const getContract = async ({ id }) => {
  try {
    const res = await post({
      url: `contratos/especifico`,
      data: {
        idContrato: id,
      },
      body: true,
    });
    if (res?.status === "ERROR") throw res;

    res.forEach((contract, i) => (contract.id = contract.idContrato));
    return res[0];
  } catch (error) {
    handleApiError("getContract", error);
  }
};

export const createContract = async ({ data }) => {
  try {
    const res = await post({
      url: "contratos/create",
      data,
    });

    if (res?.status === "ERROR" || res?.status === "error") throw res;
    return res;
  } catch (error) {
    handleApiError("createContract", error);
  }
};

export const deleteContract = async ({ id }) => {
  try {
    const res = await del({
      url: `contratos/delete`,
      data: { idContrato: id },
    });

    if (res?.status === "ERROR") throw res;
    return res;
  } catch (error) {
    handleApiError("deleteContract", error);
  }
};

export const getCuotas = async ({
  id,
  custom = false,
  nombreEstado = false,
}) => {
  try {
    const res = await post({
      url: "pagos/cliente",
      data: { idContrato: id },
    });

    if (res?.status === "ERROR") throw res;

    if (custom) {
      const customRes = new Array(res.length);
      res.forEach((cuota, i) => {
        const formattedDate = format(new Date(cuota.FechaDePago), "yyyy-MM-dd");
        let estado;

        if (nombreEstado) {
          estado = cuota.Nombre;
        } else {
          estado = cuota.idEstadoDePago === 3 ? 2 : cuota.idEstadoDePago;
        }

        customRes[i] = {
          id: cuota.idPago,
          [cuotasFields.tipo]: cuota["Tipo de Pago"],
          [cuotasFields.fecha]: formattedDate,
          [cuotasFields.monto]: cuota.Monto,
          [cuotasFields.estado]: estado,
          [cuotasFields.saldo]: cuota.Saldo,
        };
      });
      return customRes;
    }

    return res;
  } catch (error) {
    handleApiError("getCuotas", error);
  }
};

export const updateCuota = async ({ data }) => {
  try {
    const res = await patch({
      url: "pagos/update",
      data,
    });

    if (res?.status === "ERROR") throw res;
    return res;
  } catch (error) {
    handleApiError("updateCuota", error);
  }
};

export const getProyectionSpecific = async ({ data }) => {
  try {
    const res = await post({
      url: "pagos/proyeccion/especifica",
      data,
    });

    if (res?.status === "ERROR") throw res;
    return res;
  } catch (error) {
    handleApiError("getProyectionSpecific", error);
  }
};

export const getProyectionInterval = async ({ data }) => {
  try {
    const res = await post({
      url: "pagos/proyeccion/intervalo",
      data,
    });

    if (res?.status === "ERROR") throw res;
    return res;
  } catch (error) {
    handleApiError("getProyectionInterval", error);
  }
};
