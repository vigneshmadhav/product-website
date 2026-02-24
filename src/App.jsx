import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "productlist", element: <ProductList /> },
        { path: "product/:id", element: <ProductDetail /> }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}