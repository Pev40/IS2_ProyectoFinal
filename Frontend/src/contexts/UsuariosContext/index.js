import { createContext, useContext, useState } from "react";

const UsuariosContext = createContext({
  users: [],
  setUsers: () => {},
  isCreated: false,
  setIsCreated: () => {},
});

export const UsuariosProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isCreated, setIsCreated] = useState(false);

  const value = {
    users,
    setUsers,
    isCreated,
    setIsCreated,
  };
  return (
    <UsuariosContext.Provider value={value}>
      {children}
    </UsuariosContext.Provider>
  );
};

export const useUsuarios = () => useContext(UsuariosContext);

export default UsuariosContext;
