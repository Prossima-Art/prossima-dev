import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import HomeView from "./views/pages/home/HomeView";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import HowWorksView from "./views/pages/howWorks/HowWorksView";

// import TagManager from 'react-gtm-module';

// const tagManagerArgs = {
//     gtmId: 'GTM-WKTRFMJX'
// };

// TagManager.initialize(tagManagerArgs);

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "/HowWorksView",
    element: <HowWorksView />,
  },

  {
    path: "/*",
    element: <div>page not found, go to home:</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
