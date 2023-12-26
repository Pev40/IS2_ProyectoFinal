import { del, get, post, put } from "../api.service";

export const getUsers = async () => {
  try {
    const res = await get({
      url: "administrador",
    });
    if (res?.status === "ERROR") throw res;
    res.forEach((user, i) => (user.id = i));
    return res;
  } catch (error) {
    logError("error", error);
    throw error;
  }
};

export const getUser = async ({ dni }) => {
  try {
    const res = await get({
      url: `administrador/buscarIDPorDNI?DNI=${dni}`,
    });
    if (res?.status === "ERROR") throw res;
    res.id = res.idAdministrador;
    return res;
  } catch (error) {
    logError("error", error);
    throw error;
  }
};

export const createUser = async ({ data }) => {
  try {
    const res = await post({
      url: "administrador/create",
      data,
    });
    if (res?.status === "ERROR") throw res;
    return res;
  } catch (error) {
    logError("error", error);
    throw error;
  }
};

export const updateUser = async ({ data }) => {
  try {
    const res = await put({
      url: "administrador/password",
      data,
    });

    if (res?.status === "ERROR") throw res;
    return res;
  } catch (error) {
    logError("error", error);
    throw error;
  }
};

export const deleteUser = async ({ dni }) => {
  try {
    const res = await del({
      url: `administrador/eliminar?DNI=${dni}`,
    });

    if (res?.status === "ERROR") throw res;
    return res;
  } catch (error) {
    logError("error", error);
    throw error;
  }
};
