import { Alert, Snackbar } from "@mui/material";
import { createContext, useContext, useState } from "react";

const SnackbarContext = createContext({
  openSnackbar: () => {},
});

export const SnackbarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [text, setText] = useState("");

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const openSnackbar = ({ severity = "success", text = "" }) => {
    setSeverity(severity);
    setText(text);
    setOpen(true);
  };

  const value = {
    openSnackbar,
  };

  return (
    <SnackbarContext.Provider value={value}>
      <>{children}</>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={closeSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          variant="filled"
          onClose={closeSnackbar}
          severity={severity}
          sx={{ width: "100%" }}
        >
          {text}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => useContext(SnackbarContext);

export default SnackbarContext;
