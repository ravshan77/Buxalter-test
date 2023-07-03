import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import Dashboard from "../pages/Dashboard";
// import Hostings from "../pages/Hostings";
// import Sites from "../pages/Sites";
import Header from "../partials/Header";
import Sidebar from "../partials/Sidebar";
import { routes } from "../routes/routes";
import PageController from "../controller/Controller"
import Modal from "../components/Modal";


const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* Modal */}
        <Modal />
        
        <main>
          <Routes>
            {routes?.map(page => {
              return <Route path={page?.path} key={page.title} exact={true} element={ <PageController page={page} /> } />
            })}  
            {/* <Route path={"*"} key={"not-found"}element={<NotFound /> } /> */}
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Layout;

{/* <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/sites" element={<Sites />} />
            <Route exact path="/hostings" element={<Hostings />} /> */}