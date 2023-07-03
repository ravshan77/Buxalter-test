import { Dialog } from "@headlessui/react";
import React from "react";
import InformationModalFooter from "./InformationModalFooter";
import Inputs from "./inputs";
import ModalInputs from './ModalInputs'
import { useSelector } from 'react-redux';


const InformationModalBody = ({ cancelButtonRef, form}) => {
  const { currentValues } = useSelector((state) => state.currentValuesReducer)

  const onSubmit = (e) => {
    e.preventDefault();

    var content = confirm(currentValues?.name); // The "hello" means to show the following text
    if (content === true) {
      // Do whatever if the user clicked ok.
      alert("Save")
    } else {
      // Do whatever if the user clicks cancel.
      alert("Cancel")
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} style={{ width: "auto", height: "auto" }}>
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:items-start"> {/* sm:flex */}
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                { currentValues?.id ? ("Edit " + form?.title) : ("Create a " + form?.title)}
              </Dialog.Title>
              <div className="mt-2">
                <div style={{ gridTemplateColumns: form?.gridTemplates?.columns, gridTemplateRows: form?.gridTemplates?.rows, display:"grid" }}>
                    {form?.inputs?.map((input, i) =>
                            <div className="mb-3" style={{ gridColumn: input?.gridColumn, gridRow: input?.gridRow }} key={i + "input_wrap"}>
                                {/* {input?.label ? <label htmlFor={input?.name} >{input?.label + " * "} </label> : null} */}
                                {input?.label ? <label htmlFor={input?.name} className="block text-sm font-medium leading-6 text-gray-900"> {input?.label + " * "} </label> : null}
                                <div className="relative rounded-md shadow-sm">
                                  <ModalInputs {...input} values={currentValues} />
                                </div>
                            </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <InformationModalFooter cancelButtonRef={cancelButtonRef} />
      </form>
    </>
  );
};

export default InformationModalBody;


{/* <form style={{ width: "auto", height: "auto" }}>
    <div className="form" style={{ gridTemplateColumns: form?.gridTemplates?.columns, gridTemplateRows: form?.gridTemplates?.rows }}>
        {form?.inputs?.map((input, i) =>
                <div className="form-item" style={{ gridColumn: input?.gridColumn, gridRow: input?.gridRow, }} key={i + "input_wrap"}>
                    {input?.label ? <label htmlFor={input?.name} >{input?.label + " * "} </label> : null}
                    <ModalInput {...input} values={currentValues} />
                </div>
        )}
    </div>
</form> */}