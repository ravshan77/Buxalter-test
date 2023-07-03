import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./css/style.css";
import "./charts/ChartjsConfig";
import Layout from "./Layout/Layout";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Layout />
    </>
  );
}

export default App;
