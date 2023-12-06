import { createContext, useContext, useState } from "react";

const EditCuotasContext = createContext({
  cuotas: [],
  setCuotas: () => {},
});

export const EditCuotasProvider = ({ children }) => {
  const [cuotas, setCuotas] = useState([]);

  const value = { cuotas, setCuotas };

  return (
    <EditCuotasContext.Provider value={value}>
      {children}
    </EditCuotasContext.Provider>
  );
};

export const useEditCuotas = () => useContext(EditCuotasContext);

export default EditCuotasContext;
