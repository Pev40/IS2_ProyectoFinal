import { get, put } from "../api.service";

export const getLots = async () => {
  try {
    const res = await get({
      url: "lotes/extendido",
    });
    if (res?.status === "ERROR") throw res;
    res.forEach((lot) => (lot.id = lot.idLote));
    return res;
  } catch (error) {
    logError("error", error);
    throw error;
  }
};

export const getLotsLN = async (filter = false) => {
  try {
    const res = await get({
      url: "lotes/anidado",
    });
    if (res?.status === "ERROR") throw res;
    const customRes = new Array(res.length);
    res.forEach(
      (lot, i) =>
        (customRes[i] = {
          id: lot.idLote,
          label: lot.Lote,
          area: lot.Area,
          precio: lot.Precio,
          estado: lot.Nombre,
        })
    );

    if (filter) return customRes.filter((lot) => lot.estado === "Disponible");

    return customRes;
  } catch (error) {
    logError("error", error);
    throw error;
  }
};

export const getLot = async ({ id }) => {
  try {
    const res = await get({
      url: `administrador/buscar?DNI=${id}`,
    });
    if (res?.status === "ERROR") throw res;
    res.forEach((lot, i) => (lot.id = lot.idLote));
    return res[0];
  } catch (error) {
    logError("error", error);
    throw error;
  }
};

export const updateLot = async ({ data }) => {
  try {
    const res = await put({
      url: "lotes/actualizar",
      data,
    });

    if (res?.status === "ERROR") throw res;
    return res;
  } catch (error) {
    logError("error", error);
    throw error;
  }
};
