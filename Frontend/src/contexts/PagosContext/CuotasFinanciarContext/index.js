import { createContext, useState, useContext } from "react";

const CuotasFinanciarContext = createContext({
  nCuotas: "",
  fechaInicioCuotas: "",
  setNCuotas: () => {},
  setFechaInicioCuotas: () => {},
  totalMonto: 0,
  setTotalMonto: () => {},
});

export const CuotasFinanciarProvider = ({ children }) => {
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
    <CuotasFinanciarContext.Provider value={value}>
      {children}
    </CuotasFinanciarContext.Provider>
  );
};

export const useCuotasFinanciar = () => useContext(CuotasFinanciarContext);

export const ListCuotasFinanciarContext = createContext({
  cuotas: [],
  setCuotas: () => {},
});

export const ListCuotasFinanciarProvider = ({ children }) => {
  const [cuotas, setCuotas] = useState([]);

  const value = { cuotas, setCuotas };

  return (
    <ListCuotasFinanciarContext.Provider value={value}>
      {children}
    </ListCuotasFinanciarContext.Provider>
  );
};

export const useListCuotasFinanciar = () =>
  useContext(ListCuotasFinanciarContext);

export default CuotasFinanciarContext;
