import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DATE, NUMBER, STRING } from "../../constants";
import { setCurrentValues } from "../../redux";


const ModalInputs = (props) => {
  const dispatch = useDispatch();
  let input = null;
  const {  values, name, type, disabled, required, form, placeholder,} = props;

const handleChange = target => dispatch(setCurrentValues({ ...values, ...target }))



  const getValues = (inputName) => values && values[inputName]



  switch (type) {

    case STRING:
      input = (
          <input
            type="text"
            style={{width:"100%"}} 
            className="block w-100% rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name={name}
            id={name}
            placeholder={placeholder}
            autoComplete="on"
            disabled={disabled}
            value={getValues(name) || ""}
            required={required}
            onChange={(e) => {
              let target = { [name]: e.target.value };
              handleChange(target);
            }}
          />
      );
      break;

      case NUMBER:
      input = (
          <input
            type="number"
            style={{width:"100%"}} 
            className="block w-100% rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name={name}
            id={name}
            placeholder={placeholder}
            autoComplete="on"
            disabled={disabled}
            value={getValues(name) || ""}
            required={required}
            onChange={(e) => {
              let target = { [name]: e.target.value };
              handleChange(target);
            }}
          />
      );
      break;


      case DATE:
      input = (
          <input
            type="date"
            style={{width:"100%"}} 
            className="block w-100% rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name={name}
            id={name}
            placeholder={placeholder}
            autoComplete="on"
            disabled={disabled}
            value={getValues(name) || ""}
            required={required}
            onChange={(e) => {
              let target = { [name]: e.target.value };
              handleChange(target);
            }}
          />
      );
      break;
  
    default:   
      break;
  }

  return input;
};

export default memo(ModalInputs);



