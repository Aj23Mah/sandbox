import React from "react";

import Landing from "../pages/Landing";
import About from "../components/modules/Details/About";
import Service from "../components/modules/Details/Service";
import Contact from "../pages/Contact";
import SignUp from "../pages/Auth/SignUp";
import SignIn from "../pages/Auth/SignIn";
import ForgetPassword from "../pages/Auth/ForgetPassword";

export const PRIMARY_ROUTES = [
  { path: "/", element: <Landing /> },
  { path: "/about", element: <About /> },
  { path: "/service", element: <Service /> },
  { path: "/contact", element: <Contact /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/forget-password", element: <ForgetPassword /> },
];
