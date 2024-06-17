// App.js
import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header.js";
import Body from "./components/Body";
import Error from "./components/Error";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

// Chunking
// Code Splitting
// Dynamic bundling
// Lazy loading
// On demand loading
// Dynamic import
const About = lazy(()=> import("./components/About"));
const ContactUs = lazy(()=> import("./components/ContactUs"));
const RestaurantMenu = lazy(()=> import("./components/RestaurantMenu"));


const LazyLoadFallback = () => <h1>Loading Loading....</h1>
const lazyLoadSuspenseWrap = (Component, ...props) => (
  <Suspense fallback={<LazyLoadFallback/>}>
    <Component {...props}/>
  </Suspense>
)

const AppLayout = () => {
  const [userName, setUserName] = useState("Default User");
  useEffect(() => {
    // login user details
    const data = {name: "Venkata Dathatreya K"};
    setUserName(data.name);
  }, []);
console.log("App.js Rendered.....");
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div className="app">
          <Header/>
          <Outlet/>
        </div>
      </UserContext.Provider>
    </Provider>
  )
};

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
        element: lazyLoadSuspenseWrap(About)
      },
      {
        path: "/contact",
        element: lazyLoadSuspenseWrap(ContactUs)
      },
      {
        path: "/restaurants/:resId",
        element: lazyLoadSuspenseWrap(RestaurantMenu)
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);