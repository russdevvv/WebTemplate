import LandingPageLayout from "@/layouts/LandingPageLayout";
import LoginPage from "@/pages/LandingPages/LoginPage";
import type { RouteObject } from "react-router";

export const routers: RouteObject[] = [
  {
    element: <LandingPageLayout />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
    ],
  },
];
