import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Home } from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Collections from "./pages/Collections";
import Collection from "./pages/Collection";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Payment from "./pages/Payment";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/collections",
        element: <Collections />,
      },
      {
        path: "/collection/:id",
        element: <Collection />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
