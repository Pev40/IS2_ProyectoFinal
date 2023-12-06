import { createContext, useState, useContext } from "react";

const CuotasInicialContext = createContext({
  nCuotas: "",
  fechaInicioCuotas: "",
  setNCuotas: () => {},
  setFechaInicioCuotas: () => {},
  totalMonto: 0,
  setTotalMonto: () => {},
});

export const CuotasInicialProvider = ({ children }) => {
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
    <CuotasInicialContext.Provider value={value}>
      {children}
    </CuotasInicialContext.Provider>
  );
};

export const useCuotasInicial = () => useContext(CuotasInicialContext);

export const ListCuotasInicialContext = createContext({
  cuotas: [],
  setCuotas: () => {},
});

export const ListCuotasInicialProvider = ({ children }) => {
  const [cuotas, setCuotas] = useState([]);

  const value = { cuotas, setCuotas };

  return (
    <ListCuotasInicialContext.Provider value={value}>
      {children}
    </ListCuotasInicialContext.Provider>
  );
};

export const useListCuotasInicial = () => useContext(ListCuotasInicialContext);

export default CuotasInicialContext;
