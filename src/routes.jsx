import App from "./App";
import Checkout from "./components/Checkout";
import React from "react";


const routers=[
    {
      path: "/",
      element: 
        <App/>
      ,
    },
    {
      path: "checkout",
      element: <Checkout/>,
    },
  ];

  export default routers