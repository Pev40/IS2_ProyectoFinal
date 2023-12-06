import { createContext, useContext, useState } from "react";

const ClientesContext = createContext({
  clients: [],
  setClients: () => {},
  isCreated: false,
  setIsCreated: () => {},
});

export const ClientesProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  const [isCreated, setIsCreated] = useState(false);

  const value = {
    clients,
    setClients,
    isCreated,
    setIsCreated,
  };

  return (
    <ClientesContext.Provider value={value}>
      {children}
    </ClientesContext.Provider>
  );
};

export const useClientes = () => useContext(ClientesContext);

export default ClientesContext;
