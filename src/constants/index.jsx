{/* PATH */}
export const DASHBOARD_PATH = "/"; //! This path is accepted if there is a user
export const LOGIN_PATH = "/dashboard"; //! This path is accepted if there is a user
export const SITES_PATH = "/sites";
export const HOSTINGS_PATH = "/hostings";
export const SITE_PATH = `${SITES_PATH}/:id`
export const HOSTING_PATH = `${HOSTINGS_PATH}/:id`

{/* PAGE */}
export const SITES_PAGE = "SITES_PAGE";
export const SITE_PAGE = "SITE_PAGE";
export const HOSTING_PAGE = "HOSTING_PAGE";
export const DASHBOARD_PAGE = "DASHBOARD_PAGE";
export const HOSTINGS_PAGE = "HOSTINGS_PAGE";
export const LOGIN_PAGE = "LOGIN_PAGE";

{/* URL */}
export const LOGIN_URL = import.meta.env.VITE_LOGIN_URL
export const SITES_URL = "/site"
export const HOSTINGS_URL = import.meta.env.VITE_HOSTINGS_URL

{/* MODALS */}
export const INFORMATIONS_MODAL = "INFORMATIONS_MODAL";

{/* INPUTS */}
export const STRING = "STRING";
export const SELECT = "SELECT";
export const DATE = "DATE";
export const NUMBER_FORMAT = "NUMBER_FORMAT";
export const NUMBER = "NUMBER";
export const PHONE = "PHONE";
export const UPLOAD_IMAGE = "UPLOAD_IMAGE";
export const PASSWORD = "PASSWORD";
export const PERIOD_RANGE_DATE ="PERIOD_RANGE_DATE";

{/* CURRENT PAGE GLOBAL DATES TYPE */}
export const BASE_PAGE_DATE = "BASE_PAGE_DATE";

{/* DATE FORMAT */}
export const DATE_FORMAT = "YYYY-MM-DD";
// Global state isGetter 
export const CARDS_DATA = "CARDS_DATA";
