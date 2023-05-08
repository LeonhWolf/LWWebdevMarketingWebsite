import { createBrowserRouter } from "react-router-dom";

import { routes } from "./constants";

import Home from "../views/Home/Home";
import Imprint from "../views/Imprint";
import DataPolicy from "../views/DataPolicy";

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Home />,
  },
  {
    path: routes.imprint,
    element: <Imprint />,
  },
  {
    path: routes.dataPolicy,
    element: <DataPolicy />,
  },
]);

export default router;
