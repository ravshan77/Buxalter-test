import React, { useState } from "react";
import PrintButton from "./printButton";
// import HtmlUploader from "./HeicConvertator";
// import ImageConverter from "./ImageConverter";



const PrintLayout = () => {
  // const [values, setValues] = useState({})
  // HtmlUploader({ name, setHandleChange, getValues })

  // const setHandleChange = target => setValues({...values, ...target}) 
  // const getValues = name => name && values[name]

  return <div>
    <PrintButton />
    {/* <ImageConverter /> */}
    {/* <HtmlUploader name={"salomat"} setHandleChange={setHandleChange} getValues={getValues}/> */}
  </div>;
};

export default PrintLayout;
