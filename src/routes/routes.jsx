import { sites, dashboard, hostings, site, hosting, login } from "../templates";

 const informationTemplates = [ sites, dashboard, hostings, site, hosting];


const routes = [
  login,
  ...informationTemplates,
];

// export default routes;


export { routes}


