import React, { memo, useEffect } from "react";
import { routes } from "../routes/routes";
import { useDispatch } from "react-redux";
import { DASHBOARD_PAGE, HOSTINGS_PAGE, HOSTING_PAGE, SITES_PAGE, SITE_PAGE } from "../constants";
import { Sites, Hostings, Dashboard, Site, Hosting } from "../pages";
import { setCurrentTemplate } from "../redux/currentTempalteReducer";


const PageController = ({ page }) => {
  const dispatch  = useDispatch();

  useEffect(() => {
    routes.map(route => {
      if (route.path === window.location.pathname){
          dispatch(setCurrentTemplate({...route}))
        } 
        return ""
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.pathname]);


  switch (page?.type) {
    case DASHBOARD_PAGE:
      return <Dashboard page={page} />;
    case SITES_PAGE:
      return <Sites page={page} />;
    case SITE_PAGE:
      return <Site page={page} />;  
    case HOSTINGS_PAGE:
      return <Hostings page={page} />;
    case HOSTING_PAGE: 
    return <Hosting page={page} />;   
    default:
      return <>jkdkjd</>;
  }
};

export default memo(PageController);