"use client"
import "./globals.css";
// import { SessionProvider } from "next-auth/react";


export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body>
      {/*<SessionProvider refetchInterval={5 * 60}>*/}
          {children}
      {/*</SessionProvider>*/}
      </body>
      </html>

  );
}
