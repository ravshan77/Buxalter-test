import { Dialog } from "@headlessui/react";
import React, { useState } from "react";
import InformationModalFooter from "./InformationModalFooter";
import ModalInputs from './ModalInputs'
import { useDispatch, useSelector } from 'react-redux';
import { POST } from "../../server/method";
import { setCurrentCardData, setCurrentValues, setIsGetter, toggleTemplateModal } from "../../redux";
import { CARDS_DATA } from "../../constants";
import { toast } from 'react-toastify'


const InformationModalBody = ({ cancelButtonRef, form}) => {
  const { currentValues } = useSelector((state) => state.currentValuesReducer)
  const { currentTemplate } = useSelector((state) => state.currentTempalteReducer)
  const [saveLoading, setSaveLoading] = useState(false)
  const dispatch = useDispatch()


  const onSubmit = async (e) => {
    e.preventDefault();
    setSaveLoading(true)
   await POST(currentTemplate?.form?.url, {...currentValues}).then(res => {
    dispatch(setIsGetter({ key:CARDS_DATA}))
    toast.success('Success!', { position: toast.POSITION.TOP_RIGHT, autoClose: 4000 })
    dispatch(setCurrentValues({...res.data.data}))
    dispatch(setCurrentCardData({...res.data.data}))
    dispatch(toggleTemplateModal(false))
  }).catch(err => toast.error(`Error! ${err.response.data.error}`, { position: toast.POSITION.TOP_RIGHT })).finally(() => {
    setSaveLoading(false)
  })

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
                <div style={{ gridTemplateColumns: form?.gridTemplates?.columns, gridTemplateRows: form?.gridTemplates?.rows, display:"grid", gridColumnGap:"20px" }}>
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
        <InformationModalFooter saveLoading={saveLoading} cancelButtonRef={cancelButtonRef} />
      </form>
    </>
  );
};

export default InformationModalBody;