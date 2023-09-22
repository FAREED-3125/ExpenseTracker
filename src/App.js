import React from "react";

// react-router-dom import
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//component Imports 
import HomeLayout, { LoaderMain, LogoutActions } from "./Layout/Home/HomeLayout";
import DashBoard, { LoaderDashboard, LoginUserFunc } from "./Components/Dashboard/DashBoard";
import About from "./Components/About/About";
import Error from "./Components/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    loader: LoaderMain,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <DashBoard />,
        loader: LoaderDashboard,
        action:LoginUserFunc
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: 'logout',
        action: LogoutActions
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
