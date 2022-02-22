//dependencies
import React from "react";

//imports
const Questions = React.lazy(() => import("pages/Questions"));

export const routes = [
  {
    key: 0,
    path: "/ask",
    component: <Questions />,
  },
];
