//dependencies
import React from "react";

//imports
const Questions = React.lazy(() => import("pages/Questions"));
const Family = React.lazy(() => import("pages/Family"));

export const routes = [
  {
    path: "/ask",
    component: <Questions />,
  },
  {
    path: "/family",
    component: <Family />,
  },
];
