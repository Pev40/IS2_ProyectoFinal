
import { post } from "services/apiMykonos/api.service";

export const signIn = async ({ data }) => {
  try {
    const res = await post({
      url: "login",
      data,
    });

    if (res.status === "ERROR") throw res;
    return res;
  } catch (error) {
    console.error("Error during sign-in:", error);
    throw error; // Opcional, puedes omitir esta línea si solo quieres registrar el error
  }
};

export const logOut = async () => {
  try {
    const res = await post({
      url: "logout",
    });

    if (!res.success) throw res;
    return res;
  } catch (error) {
    console.error("Error during logout:", error);
    throw error; // Opcional, puedes omitir esta línea si solo quieres registrar el error
  }
};
