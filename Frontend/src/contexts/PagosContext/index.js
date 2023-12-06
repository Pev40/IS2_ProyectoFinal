import { useState, createContext, useContext } from "react";

const PagosContext = createContext({
  pagos: {},
  setPagos: () => {},
  saldoFinanciar: 0,
  setSaldoFinanciar: () => {},
  endFechaInicial: "",
  setEndFechaInicial: () => {},
  isCreated: false,
  setIsCreated: () => {},
  activeStep: 0,
  setActiveStep: () => {},
  steps: [],
  setSteps: () => {},
  isDisabledNext: true,
  setIsDisabledNext: () => {},

  clients: [],
  setClients: () => {},
  lots: [],
  setLots: () => {},
  dolar: 0,
  setDolar: () => {},
  projects: [],
  divisas: [],
});

export const PagosProvider = ({ children }) => {
  const [pagos, setPagos] = useState({});
  const [saldoFinanciar, setSaldoFinanciar] = useState(0);
  const [endFechaInicial, setEndFechaInicial] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isDisabledNext, setIsDisabledNext] = useState(true);
  const [steps, setSteps] = useState([]);

  const [clients, setClients] = useState([]);
  const [lots, setLots] = useState([]);
  const [dolar, setDolar] = useState(0);

  const [projects] = useState([{ id: 1, label: "Mykonos" }]);
  const [divisas] = useState([
    { id: 1, label: "Dolar" },
    { id: 2, label: "Sol" },
  ]);

  const value = {
    pagos,
    setPagos,
    isCreated,
    setIsCreated,
    saldoFinanciar,
    setSaldoFinanciar,
    endFechaInicial,
    setEndFechaInicial,
    activeStep,
    setActiveStep,
    steps,
    setSteps,
    isDisabledNext,
    setIsDisabledNext,

    clients,
    setClients,
    lots,
    setLots,
    dolar,
    setDolar,
    projects,
    divisas,
  };
  return (
    <PagosContext.Provider value={value}>{children}</PagosContext.Provider>
  );
};

export const usePagos = () => useContext(PagosContext);

export default PagosContext;
