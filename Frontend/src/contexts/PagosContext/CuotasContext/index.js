import { createContext, useState } from "react";

const CuotasContext = createContext({
  nCuotas: "",
  fechaInicioCuotas: "",
  setNCuotas: () => {},
  setFechaInicioCuotas: () => {},
  totalMonto: 0,
  setTotalMonto: () => {},
});

export const CuotasProvider = ({ children }) => {
  const [nCuotas, setNCuotas] = useState("");
  const [fechaInicioCuotas, setFechaInicioCuotas] = useState("");
  const [totalMonto, setTotalMonto] = useState(0);

  const value = {
    nCuotas,
    setNCuotas,
    fechaInicioCuotas,
    setFechaInicioCuotas,
    totalMonto,
    setTotalMonto,
  };
  return (
    <CuotasContext.Provider value={value}>{children}</CuotasContext.Provider>
  );
};

export const ListCuotasContext = createContext({
  cuotas: [],
  setCuotas: () => {},
});

export const ListCuotasProvider = ({ children }) => {
  const [cuotas, setCuotas] = useState([]);

  const value = { cuotas, setCuotas };

  return (
    <ListCuotasContext.Provider value={value}>
      {children}
    </ListCuotasContext.Provider>
  );
};

export default CuotasContext;