import React from "react";

import Landing from "../pages/Landing";
import About from "../components/modules/Landing/About";
import Services from "../components/modules/Landing/Services";
// import Search from "../pages/Search";
// import Details from "../pages/Details";

export const PRIMARY_ROUTES = [
  { path: "/", element: <Landing /> },
  { path: "/about", element: <About /> },
  { path: "/service", element: <Services /> },
//   { path: "/search/:keyword", element: <Search /> },
//   { path: "/movie/:id", element: <Details /> },
];
