import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "pages/login";
import Navbar from "components/General/Navbar";
import { AuthProvider } from "contexts/AuthContext";
import RequireAuth from "components/General/RequireAuth";

import { privateRoutes } from "routes/routes";
import Home from "pages/home";
import { SnackbarProvider } from "contexts/SnackbarContext";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/pagos_mykonos">
        <CookiesProvider>
          <AuthProvider>
            <SnackbarProvider>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                {privateRoutes.map(({ path, title, element }) => (
                  <Route
                    key={title}
                    path={path}
                    element={<RequireAuth>{element}</RequireAuth>}
                  />
                ))}
              </Routes>
            </SnackbarProvider>
          </AuthProvider>
        </CookiesProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
