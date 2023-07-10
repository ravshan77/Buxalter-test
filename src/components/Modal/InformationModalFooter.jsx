import React from 'react'
import { useDispatch } from 'react-redux'
import useFunctions from '../../hooks/functions'
import { toggleTemplateModal } from '../../redux'

const InformationModalFooter = ({ cancelButtonRef, saveLoading}) => {
  const { handleOpenModal} = useFunctions()
  const dispatch = useDispatch()

  const closeModal = () => {
    alert("Last modified data may not be saved.")
    dispatch(toggleTemplateModal(false))
  }


  return (
    <>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button onClick={handleOpenModal} disabled={saveLoading} type="submit" className={` ${saveLoading ? "opacity-50 cursor-not-allowed " : "" } inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto`} >
          Save
        </button>
        <button onClick={closeModal} disabled={saveLoading} ref={cancelButtonRef} type="button" className={` ${saveLoading ? "opacity-50 cursor-not-allowed " : "" } mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto`} >
          Cancel
        </button>
      </div>
    </>
  )
}

export default InformationModalFooter