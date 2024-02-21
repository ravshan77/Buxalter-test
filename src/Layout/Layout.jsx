import React from "react";
import Form from "../components/Form";
import Textarea from "../components/TextAria";
import Header from "../partials/Header";


const Layout = () => {


  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}

     {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header />
        {/* Modal */}
        
        <main>
          <Form />
        </main>
      </div>
    </div>
  );
};

export default Layout;
