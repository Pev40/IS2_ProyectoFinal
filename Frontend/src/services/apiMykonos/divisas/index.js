import { get, put } from "../api.service";

export const getDolar = async () => {
  try {
    const res = await get({
      url: "dolar/now",
    });
    if (res?.status === "ERROR") throw res;
    return res.TipoDeCambio;
  } catch (error) {
    logError("error", error);
    throw error;
  }
};

export const updateTipoCambio = async ({ cambio }) => {
  try {
    const res = await put({
      url: "dolar/update",
      data: { Dolar: cambio },
    });
    if (res?.status === "ERROR") throw res;
    return res;
  } catch (error) {
    logError("error", error);
    throw error;
  }
};
