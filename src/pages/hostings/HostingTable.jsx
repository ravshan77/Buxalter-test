import React from "react";
import { useNavigate } from "react-router-dom";
import { HOSTINGS_PATH } from "../../constants";
// import useFunctions from "../../hooks/functions";
// import { setCurrentValues } from "../../redux";
// import { useDispatch } from "react-redux";


let customers = [
  {
    id: "1",
    port_number: "8443",
    service_name: "Service Hour",
    location: "🇩🇪",
    check_time: "2023-02-11",
  },
  {
    id: "2",
    port_number: "8443",
    service_name: "Serve and Connect",
    location: "🇫🇷",
    check_time: "2023-02-11",
  },
  {
    id: "3",
    port_number: "8443",
    service_name: "Serve and Smile.",
    location: "🇮🇹",
    check_time: "2023-02-11",
  },
  {
    id: "4",
    port_number: "8443",
    service_name: "Service and Protect.",
    location: "🇬🇧",
    check_time: "2023-02-11",
  },
  {
    id: "5",
    port_number: "8443",
    service_name: "Service Unit",
    location: "🇺🇸",
    check_time: "2023-02-11",
  },
  {
    id: "6",
    port_number: "8443",
    service_name: "Service Stationed",
    location: "🇩🇪",
    check_time: "2023-02-11",
  },
  {
    id: "7",
    port_number: "8443",
    service_name: "Domain Service 2",
    location: "🇫🇷",
    check_time: "2023-02-11",
  },
  {
    id: "8",
    port_number: "8443",
    service_name: "Service-hungry",
    location: "🇫🇷",
    check_time: "2023-02-11",
  },
]

function HostingTable() {
  const navigate = useNavigate();
  const redirectCard = (id) => navigate(`${HOSTINGS_PATH}/${id}`);
  // const { handleOpenModal } = useFunctions()
  // const dispatch = useDispatch();
  const handleDeleteItem = (item) => {
    customers = customers.filter(c => c.id !== item.id);
  }

  const handleEditItem = (item) => {
  //  handleOpenModal()
  //  dispatch(setCurrentValues({...item}))
  }

  return (
    <div className="col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Customers
        </h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">№</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Port number</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Service name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Time</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Actions</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
              {customers?.map((customer) => {
                return (
                  <tr key={customer.id} onClick={() => redirectCard(customer.id)} >
                    <td className="p-4 whitespace-nowrap">
                      <div className="text-left">{customer.id}</div>
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="font-medium text-slate-800 dark:text-slate-100">
                          {customer.port_number}
                        </div>
                      </div>
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      <div className="text-left">{customer.service_name}</div>
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      <div className="text-left font-medium text-green-500">
                        {customer.check_time}
                      </div>
                    </td>
                    <td className=" whitespace-nowrap">
                      <div className="text-left font-medium text-green-500 inline-flex flex-row">
                        <button onClick={() => handleDeleteItem(customer)} className="border-orange-700">
                           <svg width="15px" height="15px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#f5f5f5" stroke="#f5f5f5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>delete [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#ea2e2e"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#ffffff]"> </path> </g> </g> </g> </g></svg>
                        </button>
                        <button onClick={() => handleEditItem(customer)} className="ml-8">
                        <svg width="15px" height="15px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>edit [#1483]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-339.000000, -360.000000)" fill="#70cd71"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M283,220 L303.616532,220 L303.616532,218.042095 L283,218.042095 L283,220 Z M290.215786,213.147332 L290.215786,210.51395 L296.094591,205.344102 L298.146966,207.493882 L292.903151,213.147332 L290.215786,213.147332 Z M299.244797,202.64513 L301.059052,204.363191 L299.645788,205.787567 L297.756283,203.993147 L299.244797,202.64513 Z M304,204.64513 L299.132437,200 L288.154133,209.687714 L288.154133,215.105237 L293.78657,215.105237 L304,204.64513 Z" id="edit-[#1483]"> </path> </g> </g> </g> </g></svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HostingTable;
