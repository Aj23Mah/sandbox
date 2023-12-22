import React from "react";

import Landing from "../pages/Landing";
import About from "../components/modules/Details/About";
import Service from "../components/modules/Details/Service";
import Contact from "../pages/Contact";

export const PRIMARY_ROUTES = [
  { path: "/", element: <Landing /> },
  { path: "/about", element: <About /> },
  { path: "/service", element: <Service /> },
  { path: "/contact", element: <Contact /> },
];
