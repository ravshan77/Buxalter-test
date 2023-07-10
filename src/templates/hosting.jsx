import { DATE, HOSTINGS_URL, HOSTING_PAGE, HOSTING_PATH, INFORMATIONS_MODAL, NUMBER, STRING } from "../constants";

export const hosting = {
  title: "Hosting",
  type: HOSTING_PAGE,
  path: HOSTING_PATH,
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
        name: "service_name",
        label: "Service name",
        required: true,
        type: STRING,
        gridColumn: "1 / 9",
        gridRow: "1 / 2",
      },
      {
        name: "port_number",
        label: "Port number",
        required: true,
        type: NUMBER,
        gridColumn: "1 / 5",
        gridRow: "2 / 3",
      },
      {
        name: "check_time",
        label: "Check time",
        required: true,
        type: DATE,
        gridColumn: "5 / 9",
        gridRow: "2 / 3",
      },
    ],
  },
};

export default hosting;
