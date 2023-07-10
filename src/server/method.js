import { Axios } from "./axios";

export const POST = (url, data, met) => {
  const method = met ? met : data?.id ? "PUT" : "POST";
  const path = data?.id ? url + "/" + data.id : url;
  return Axios({ url: path, method: method, data: { ...data } });
};

export const PURE_POST = (url, data) => {
  return Axios({ url: url, method: "POST", data: { ...data } });
};

export const GET = (url) => {
  if (url) {   
    return Axios({ url: url, method: "GET", });
  };
}

export const DELETE = (url, data) => {
  return Axios({ url, method: "DELETE", data});
};

export const PUT = (url, data) => {
  return Axios({ url, method: "PUT", data: { ...data } });
};

export default { PUT, POST, DELETE, PURE_POST, GET}