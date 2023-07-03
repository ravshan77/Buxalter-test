import { INFORMATIONS_MODAL, STRING, HOSTINGS_PATH, HOSTINGS_URL, HOSTINGS_PAGE } from "../constants";

export const hostings = {
  title: "Hostinglar",
  type: HOSTINGS_PAGE,
  path: HOSTINGS_PATH,
  url: HOSTINGS_URL,
  optionUrl: HOSTINGS_URL,
  optionName: "hostings",
  form: {
    url: HOSTINGS_URL,
    title: "Hosting",
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
        label: "Hosting name",
        required: true,
        type: STRING,
        gridColumn: "1 / 9",
        gridRow: "1 / 2",
      },
    ],
  },
};

export default hostings;
