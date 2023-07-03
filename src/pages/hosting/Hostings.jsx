import React from "react";
import FilterButton from "../../components/DropdownFilter";
import Datepicker from "../../components/Datepicker";
import DashboardAvatars from "../../partials/dashboard/DashboardAvatars";
import DashboardCard10 from "./HostingCard";
import useFunctions from "../../functions/functions";

export const Hostings = ({page}) => {
  const { handleOpenModal } = useFunctions()


  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <div className="sm:flex sm:justify-between sm:items-center mb-8">
          {/* Left: Avatars */}
          <DashboardAvatars />

          {/* Right: Actions */}
          <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
            {/* Filter button */}
            <FilterButton />
            {/* Datepicker built with flatpickr */}
            <Datepicker />
            {/* Add view button */}
            <button onClick={handleOpenModal} className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
              <svg
                className="w-4 h-4 fill-current opacity-50 shrink-0"
                viewBox="0 0 16 16"
              >
                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
              </svg>
              <span className="hidden xs:block ml-2">Add view</span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-12 gap-6">
          {/* Card (Customers) */}
          <DashboardCard10 />
        </div>
      </div>
    </div>
  );
};

export default Hostings;