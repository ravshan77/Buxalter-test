import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./css/style.css";
import "./charts/ChartjsConfig";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { Login, NotFoundPage } from "./pages";
import { useAuth } from "./hooks/useAuth";

function App() {
  const location = useLocation();
  const isAuth = useAuth()
  
  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change



  return (
    <>
      {isAuth ? <Layout /> : <Routes> 
          <Route path="/" element={<Login />} />  
          <Route path="*" element={<NotFoundPage />} />
        </Routes>}
    </>
  );
}

export default App;
