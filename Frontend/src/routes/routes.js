import Clientes from "pages/clientes";
import Login from "pages/login";
import Pagos from "pages/pagos";
import Mantenimiento from "pages/mantenimiento";
import Ajustes from "pages/ajustes";
import Usuarios from "pages/usuarios";
import Proyecciones from "pages/proyecciones";

export const publicRoutes = [
  {
    path: "/login",
    title: "Iniciar Sesión",
    element: <Login />,
  },
];

export const privateRoutes = [
  {
    path: "/clientes",
    title: "Clientes",
    element: <Clientes />,
  },
  {
    path: "/pagos",
    title: "Pagos",
    element: <Pagos />,
  },
  {
    path: "/usuarios",
    title: "Usuarios",
    element: <Usuarios />,
  },
  {
    path: "/ajustes",
    title: "Ajustes",
    element: <Ajustes />,
  },
  {
    path: "/proyecciones",
    title: "Proyecciones",
    element: <Proyecciones />,
  },
  {
    path: "/mantenimiento",
    title: "Mantenimiento",
    element: <Mantenimiento />,
  },
];
