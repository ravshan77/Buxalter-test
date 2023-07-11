import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { HOSTINGS_DELETE_URL, HOSTINGS_PATH } from "../../constants";
import HostingTable from './HostingTable';
import { useDispatch, useSelector } from 'react-redux';
import useFunctions from '../../hooks/functions';
import { DELETE } from '../../server/method';
import { setCurrentCardData, setCurrentValues } from '../../redux';
import { toast } from 'react-toastify'


export const Host = ({}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const redirectCard = () => {
    navigate(HOSTINGS_PATH)
    dispatch(setCurrentValues({}))
  }
  const { handleOpenModal } = useFunctions()
  const { currentValues, currentCardData } = useSelector((state) => state.currentValuesReducer)
  const [loading, setloading] = useState(false)
  
  const handleEdit = () => {
    handleOpenModal()
  }

  const handleDelete = async (e) => {
    e.stopPropagation();
        if(window.confirm('Are you sure you want to delete this site?')) {
          setloading(true)
          await DELETE(`${HOSTINGS_DELETE_URL}/${currentValues?.id}`).then(res => {
            if(res.status){
              toast.success('Success!', { position: toast.POSITION.TOP_RIGHT, autoClose: 4000 })
              dispatch(setCurrentCardData({}))
              redirectCard()
            }
          }).catch(err => toast.error(`Error! ${err.response.data.error}`, { position: toast.POSITION.TOP_RIGHT })).finally(() => setloading(false))
        } else {
          toast.error(`Error deleting! Please try again.`, { position: toast.POSITION.TOP_RIGHT })
        }
  }
    
  
    return (
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <div className="sm:flex sm:justify-between sm:items-center mb-8">
          {/* Left: Avatars */}
           <button onClick={redirectCard} className="btn bg-indigo-500 hover:bg-indigo-600 text-white ">
              <svg height="38px" width="38px" className="w-4 h-4 fill-current opacity-50 shrink-0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 38.273 38.273" >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier"> <g>
                      <path d="M20.621,10.484V5.84c0-0.808-0.458-1.548-1.181-1.909c-0.722-0.359-1.589-0.279-2.236,0.206 l-9.486,7.147c-0.677,0.292-1.117,0.67-1.401,1.058l-5.468,4.119C0.312,16.866-0.003,17.501,0,18.173 c0.002,0.673,0.322,1.305,0.862,1.706l16.355,12.133c0.646,0.48,1.51,0.554,2.23,0.191c0.72-0.362,1.174-1.1,1.174-1.905v-5.517 c0.013,0,0.025,0,0.038,0c3.842,0,10.687,1.089,13.366,8.386c0.311,0.846,1.116,1.397,2.001,1.397c0.079,0,0.157-0.004,0.236-0.013 c0.975-0.108,1.751-0.868,1.88-1.84c0.052-0.394,1.208-9.682-4.461-16.23C30.621,12.948,26.235,10.935,20.621,10.484z M20.659,20.515c-1.443,0-2.379,0.132-2.482,0.146c-1.046,0.154-1.822,1.053-1.822,2.111v3.287l-10.66-7.907l3.555-2.678 c0.136-0.104,0.259-0.222,0.365-0.351c0.155-0.068,0.301-0.152,0.437-0.254l6.303-4.75v2.401c0,1.168,0.939,2.119,2.108,2.134 c5.345,0.063,9.374,1.61,11.975,4.6c1.442,1.658,2.314,3.602,2.835,5.469C28.923,21.038,23.424,20.515,20.659,20.515z" ></path>
                  </g>
                  </g>
              </svg>
              <span className="hidden xs:block ml-2">Go back</span>
          </button>
          <a href={`https://${currentCardData?.ip}`} target={"_blank"} className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white underline" style={{fontSize:"26px"}}>
              {currentCardData?.ip}
          </a>
  
          {/* Right: Actions */}
          <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          <button disabled={loading} onClick={handleEdit} type="button" className="btn bg-green-400 hover:bg-green-600 text-white">
            <svg width="18px" height="15px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.546"></g><g id="SVGRepo_iconCarrier"> <title>edit [#000000]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke-width="0.00021000000000000004" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-339.000000, -360.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M283,220 L303.616532,220 L303.616532,218.042095 L283,218.042095 L283,220 Z M290.215786,213.147332 L290.215786,210.51395 L296.094591,205.344102 L298.146966,207.493882 L292.903151,213.147332 L290.215786,213.147332 Z M299.244797,202.64513 L301.059052,204.363191 L299.645788,205.787567 L297.756283,203.993147 L299.244797,202.64513 Z M304,204.64513 L299.132437,200 L288.154133,209.687714 L288.154133,215.105237 L293.78657,215.105237 L304,204.64513 Z" id="edit-[#000000]"> </path> </g> </g> </g> </g></svg>
            <span className="hidden xs:block ml-2">Edit</span>
          </button>

          <button disabled={loading} onClick={handleDelete} type="button" className="btn bg-red-500 hover:bg-red-700 text-white">
          <svg width="18px" height="15px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#f5f5f5" stroke="#f5f5f5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>delete [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#ededed"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#ffffff]"> </path> </g> </g> </g> </g></svg>
            <span className="hidden xs:block ml-2">Delete</span>
          </button>
            {/* Filter button */}
            {/* <FilterButton /> */}
            {/* Datepicker built with flatpickr */}
            {/* <Datepicker />   */}
          </div>
         </div>

            {/* Cards */}
        <div className="grid grid-cols-12 gap-6">
          {/* Card (Customers) */}
          <HostingTable />
        </div>
      </div>
    );
  };

export default Host