// App.js
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu.js";

const About = lazy(()=> import("./components/About"));

const AppLayout = () => (
  <div className="app">
    <Header/>
    <Outlet/>
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element:  <Suspense fallback={<h1>Loading Loading...</h1>}>
            <About/>
          </Suspense>
      },
      {
        path: "/contact",
        element: <ContactUs/>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);