import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Login from "../pages/painel/Login";
import Painel from "../pages/painel/Painel";
import PainelVideoaulas from "../pages/painel/PainelVideoaulas";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/painel",
    element: <Painel />,
  },
  {
    path: "/painel-videoaulas",
    element: <PainelVideoaulas />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
