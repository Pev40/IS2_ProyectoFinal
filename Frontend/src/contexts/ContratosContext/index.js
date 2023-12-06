import { createContext, useContext, useState } from "react";

const ContratosContext = createContext({
  contracts: [],
  setContracts: () => {},
  isCreated: false,
  setIsCreated: () => {},
});

export const ContratosProvider = ({ children }) => {
  const [contracts, setContracts] = useState([]);
  const [isCreated, setIsCreated] = useState(false);

  const value = {
    contracts,
    setContracts,
    isCreated,
    setIsCreated,
  };

  return (
    <ContratosContext.Provider value={value}>
      {children}
    </ContratosContext.Provider>
  );
};

export const useContratos = () => useContext(ContratosContext);

export default ContratosContext;
