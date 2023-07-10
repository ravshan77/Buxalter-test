import { Fragment, useRef} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import InformationModalBody from './Modal/InformationModalBody'
import { INFORMATIONS_MODAL } from '../constants'
import { useSelector } from 'react-redux';
import useFunctions from '../hooks/functions';

export default function Modal() {
  const {handleCloseModal} = useFunctions()
  const { form, isOpenModal } = useSelector((state) => state.currentTempalteReducer.currentTemplate)

  const cancelButtonRef = useRef(null)
  
 
  let modalBody = null;

  console.log(form);

  switch (form?.modal?.modalType) {
    case INFORMATIONS_MODAL:
     modalBody = (<InformationModalBody form={form} cancelButtonRef={cancelButtonRef}/>)
      break
    default: 
      break;
 }   

  return (
    <Transition.Root show={isOpenModal || false} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={handleCloseModal}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0" >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                {modalBody}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}