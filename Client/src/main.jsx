import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Componets/Layout/RootLayout.jsx";
import Shop from "./Pages/Shop.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Order from "./Pages/Order.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/Shop",
        element: <Shop />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Order",
        element: <Order />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
