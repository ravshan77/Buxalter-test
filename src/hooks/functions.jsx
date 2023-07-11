import { useDispatch } from 'react-redux'
import { setCurrentValues, toggleTemplateModal } from '../redux'


const useFunctions = () => {
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