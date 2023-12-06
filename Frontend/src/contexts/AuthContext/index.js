import { usuariosFields } from "models/Usuarios.model";
import { createContext, useState } from "react";
import { useCookies } from "react-cookie";
import apiMykonos from "services/apiMykonos";

const AuthContext = createContext({
  user: null,
  token: null,
  signIn: () => {},
  logOut: () => {},
});

export const AuthProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "pagos_mykonos_user",
    "pagos_mykonos_token",
  ]);

  const [user, setUser] = useState(cookies["pagos_mykonos_user"] || null);
  const [token, setToken] = useState(cookies["pagos_mykonos_token"] || null);

  const signIn = async ({ data }) => {
    try {
      const res = await apiMykonos.auth.signIn({ data });
      if (res?.status === "Error") {
        console.error("Error", res);
        throw res;
      }

      setCookie(
        "pagos_mykonos_user",
        `${res[usuariosFields.name]} ${res[usuariosFields.lastName]}`
      );
      setCookie("pagos_mykonos_token", res[usuariosFields.dni]);

      setUser(`${res[usuariosFields.name]} ${res[usuariosFields.lastName]}`);
      setToken(res[usuariosFields.dni]);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const logOut = () => {
    removeCookie("pagos_mykonos_user");
    removeCookie("pagos_mykonos_token");

    setUser(null);
    setToken(null);
  };

  const value = { user, token, signIn, logOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
