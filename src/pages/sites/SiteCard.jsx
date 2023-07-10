import React from 'react';
import { useNavigate } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import { tailwindConfig, hexToRGB } from '../../utils/Utils';
import { SITES_PATH } from '../../constants';
import { useDispatch } from 'react-redux';
import { setCurrentCardData, setCurrentValues } from '../../redux';


export function SiteCard({card}) {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const chartData = {
    labels: [
      '12-01-2020',
      '01-01-2021',
      '02-01-2021',
      '03-01-2021',
      '04-01-2021',
      '05-01-2021',
      '06-01-2021',
      '07-01-2021',
      '08-01-2021',
      '09-01-2021',
      '10-01-2021',
      '11-01-2021',
      '12-01-2021',
      '01-01-2022',
      '02-01-2022',
      '03-01-2022',
      '04-01-2022',
      '05-01-2022',
      '06-01-2022',
      '07-01-2022',
      '08-01-2022',
      '09-01-2022',
      '10-01-2022',
      '11-01-2022',
      '12-01-2022',
      '01-01-2023',
    ],
    datasets: [
      // Indigo line
      {
        data: [732, 610, 610, 504, 504, 504, 349, 349, 504, 342, 504, 610, 391, 192, 154, 273, 191, 191, 126, 263, 349, 252, 423, 622, 470, 532],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        pointHoverBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
      },
      // Gray line
      {
        data: [532, 532, 532, 404, 404, 314, 314, 314, 314, 314, 234, 314, 234, 234, 314, 314, 314, 388, 314, 202, 202, 202, 202, 314, 720, 642],
        borderColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.slate[500])}, 0.25)`,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.slate[500])}, 0.25)`,
        pointHoverBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.slate[500])}, 0.25)`,
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
      },
    ],
  };

  const redirectCard = (id) => {
    dispatch(setCurrentCardData({...card}))
    dispatch(setCurrentValues({...card, }))
    navigate(`${SITES_PATH}/${card?.id}`)
  }


  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5 cursor-pointer" onClick={redirectCard}>
            <h2 className="text-3xl font-semibold text-slate-800 dark:text-slate-100 mb-2" style={{fontSize:"24px"}}>{card?.name}</h2>
        <div className="flex text-xs font-semibold text-slate-400 dark:text-slate-500 mb-1 border-gray-100 border" style={{ alignItems:"center", justifyContent:"space-between"}}>
          
          { card?.status === "1" ? <div className='flex' style={{alignItems:"center"}}> Active  <svg className='ml-3' width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g  stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M17 6H7a6 6 0 1 0 0 12h10a6 6 0 0 0 0-12Z" fill="#77e26f" fill-opacity=".16" stroke="#77e26f" stroke-width="1.5" stroke-miterlimit="10"></path><path d="M17 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="#ffffff" stroke="#77e26f" stroke-width="1.5" stroke-miterlimit="10"></path></g></svg> </div>
          : <div className='flex' style={{alignItems:"center"}}> inactive  <svg className='ml-3' width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#b79f9f"><g  stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M17 6H7a6 6 0 1 0 0 12h10a6 6 0 0 0 0-12Z" fill="#f55656" fill-opacity=".16" stroke="#f55656" stroke-width="1.5" stroke-miterlimit="10"></path><path d="M7 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="#ffffff" stroke="#f55656" stroke-width="1.5" stroke-miterlimit="10"></path></g></svg></div>}
        
          <div className="flex items-start">
            <div className="text-lg font-bold text-slate-800 dark:text-slate-100 mr-2">{card?.date}</div>
          </div>
        </div>
      </div>
      <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
        <LineChart data={chartData} width={389} height={128} />
      </div>
    </div>
  );
}

