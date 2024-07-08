import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Acceso from "./vistas/acceso/acceso.jsx"
import Gastos from "./vistas/gastos/gastos.jsx"
import Balance from "./vistas/balance/balance.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
      <>
          <Route path="/" element={<Acceso />} />
          <Route path="/gastos" element={<Gastos />}/>
          <Route path="/balance" element={<Balance />} />
      </>

  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
