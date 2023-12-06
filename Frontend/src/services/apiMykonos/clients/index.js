import { del, get, post, put } from "../api.service";

export const getClients = async (data = false) => {
  try {
    const res = await get({
      url: "clientes",
    });
    if (res?.status === "ERROR") throw res;
    if (data) {
      const customRes = new Array(res.length);
      res.forEach((client, i) => {
        customRes[i] = {
          id: client.DNI,
          label: client.Nombres,
        };
      });

      return customRes;
    }
    res.forEach((client, i) => (client.id = i));
    return res;
  } catch (error) {
    throw error;
  }
};

export const getClient = async ({ dni }) => {
  try {
    const res = await get({
      url: `clientes/buscar?DNI=${dni}`,
    });
    if (res?.status === "ERROR") throw res;
    res.forEach((client, i) => (client.id = i));
    return res[0];
  } catch (error) {
    throw error;
  }
};

export const createClient = async ({ data }) => {
  try {
    const res = await post({
      url: "clientes/register",
      data,
    });

    if (res?.status === "ERROR") throw res;
    return res;
  } catch (error) {
    throw error;
  }
};

export const updateClient = async ({ data }) => {
  try {
    const res = await put({
      url: "clientes/actualizar",
      data,
    });

    if (res?.status === "ERROR") throw res;
    return res;
  } catch (error) {
    throw error;
  }
};

export const deleteClient = async ({ dni }) => {
  try {
    const res = await del({
      url: `clientes/eliminar?DNI=${dni}`,
    });

    if (res?.status === "ERROR") throw res;
    return res;
  } catch (error) {
    throw error;
  }
};

export const getLocalities = async () => {
  try {
    const res = await get({
      url: "localidades",
    });
    if (res?.status === "ERROR") throw res;
    const customRes = new Array(res.length);
    res.forEach(
      (locality, i) =>
        (customRes[i] = {
          id: locality.idLocalidad,
          label: locality.DISTRITOS_PERU,
        })
    );
    return customRes;
  } catch (error) {
    throw error;
  }
};
