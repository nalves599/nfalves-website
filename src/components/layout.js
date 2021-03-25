import React from "react";
import { globalStyle as GlobalStyle } from "../styles/global";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle theme="purple" />
      {children}
    </React.Fragment>
  );
}
