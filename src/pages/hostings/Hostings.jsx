import React, { useEffect, useState } from "react";
import useFunctions from "../../hooks/functions";
import SearchInputPage from "../../components/SearchInputPage";
import { HostingCard } from "./HostingCard";
import { useDispatch, useSelector } from "react-redux";
import { POST } from "../../server/method";
import { setTablesData } from "../../redux";
import LoadingCard from "../../components/Loading/loadingCard";
import EmptyContent from "../../components/EmptyContent/EmptyContent";
import { CARDS_DATA, HOSTINGS_SEARCH_URL } from "../../constants";
import { toast } from 'react-toastify'


export const Hostings = ({}) => {
  const { handleOpenModal } = useFunctions()
  const dispatch = useDispatch()
  const [searchInputValue, setSearchInputValue] = useState({host_name:""});
  const [loading, setLoading] = useState(false);
  const { tableData, isGetter } = useSelector((state) => state.rootDataReducer)
 
  const fetchRecords = async ({index, payload})  => {
    setLoading(true);    
    await POST(`${HOSTINGS_SEARCH_URL+index}`, payload).then((res) => {
        if (res.status === 200) {
          dispatch(setTablesData({ key: CARDS_DATA, data: res?.data.data }));
        }
      }).catch((err) => toast.error(`Error! ${err.response.data.error}`, { position: toast.POSITION.TOP_RIGHT })).finally(() => setLoading(false));
    };


    const handleFilter = (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setSearchInputValue({...searchInputValue, [name]:value});
      fetchRecords({index:1 ,payload:{...searchInputValue, [name]:value}})    
    };
    
  useEffect(() => {
    setSearchInputValue({...searchInputValue,})
    fetchRecords({index:1, payload:{...searchInputValue}})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGetter[CARDS_DATA]]);

  const card_data = tableData[CARDS_DATA] ?? []
  

  return (
    <div>
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        {/* Left: Avatars */}
        <SearchInputPage onSearch={handleFilter} searchInputName={"host_name"} searchInputValue={searchInputValue} />
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

        {/* Right: Actions */}
          {/* Filter button */}
          {/* <FilterButton /> */}
          {/* Datepicker built with flatpickr */}
          {/* <Datepicker /> */}
          {/* Add view button */}
          <button onClick={handleOpenModal} className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
            <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span className="hidden xs:block ml-2">Add view</span>
          </button>
        </div>
      </div>

      {/* Cards */}
      { card_data.length === 0 ? <EmptyContent /> : <div className="grid grid-cols-12 gap-6">
        {loading ? <LoadingCard/> : card_data?.map(card => <HostingCard card={card} />) }
      </div>}
    </div>
  </div>
  );
};

export default Hostings;
