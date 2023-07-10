import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentValues, toggleTemplateModal } from '../redux'


const useFunctions = () => {
//   const currentTemplate = useSelector((state) => state.currentTempalteReducer.currentTemplate)
  const dispatch = useDispatch()

  
  const handleOpenModal = () => {
    dispatch(toggleTemplateModal(true))
  }

  const handleCloseModal = () => {
    dispatch(setCurrentValues({}))
    dispatch(toggleTemplateModal(false))
}


  return {
    handleCloseModal,
    handleOpenModal,
  }
}

export default useFunctions