import React, { Children } from "react";
import Layout from "./componant/layout/index.js";
import SingUp from "./componant/sing up/index.js";
import Error from "./componant/eroor/index.js";
import Books from "./componant/books/index.js";
import Shalve from "./componant/shalve/index.js";
import Author from "./componant/author/index.js";
import Store from "./componant/store/index.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import Home from "./componant/home/index.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/singup",
          element: <SingUp />,
        },
        {
          path: "/books",
          element: <Books />,
        },
        {
          path: "/shalve",
          element: <Shalve />,
        },
        {
          path: "/author",
          element: <Author />,
        },
      ],
    },
  ]);
  return (
    <ConfigProvider>
      <Provider store={Store}>
        <RouterProvider router={router} />
      </Provider>
    </ConfigProvider>
  );
}

export default App;
