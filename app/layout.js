"use client";

import React from "react";
import TopBar from "../components/TopBar";
import SideBar from "../components/Sidebar";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "../components/PrivateRoute";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        {/* <!--
        manifest.json provides metadata used when your web app is installed on a
        user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
      --> */}
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        {/* <!--
        Notice the use of %PUBLIC_URL% in the tags above.
        It will be replaced with the URL of the `public` folder during the build.
        Only files inside the `public` folder can be referenced from the HTML.

        Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
        work correctly both with client-side routing and a non-root public URL.
        Learn how to configure a non-root public URL by running `npm run build`.
      --> */}
        <title>Web Pangolin Studio</title>
      </head>
      <body>
        <AuthProvider>
          <PrivateRoute>
            <TopBar />
            <SideBar />
            <div className="flex justify-center min-h-screen px-5 pb-5 md:pb-10 lg:pl-80 lg:pr-80">
              {children}
            </div>
          </PrivateRoute>
        </AuthProvider>
      </body>
    </html>
  );
}
