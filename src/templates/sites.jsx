import { SITES_URL, INFORMATIONS_MODAL, SITES_PAGE, SITES_PATH, STRING } from "../constants";

export const sites = {
  title: "Sitelar",
  type: SITES_PAGE,
  path: SITES_PATH,
  url: SITES_URL,
  optionUrl: SITES_URL,
  optionName: "sites",
  form: {
    url: SITES_URL,
    title: "Site",
    modal: {
      width: 700,
      modalType: INFORMATIONS_MODAL,
    },
    gridTemplates: {
      columns: "repeat(8, 1fr)",
    },
    inputs: [
      {
        name: "name",
        label: "Site name",
        required: true,
        type: STRING,
        gridColumn: "1 / 9",
        gridRow: "1 / 2",
      },
    ],
  },
};

export default sites;
