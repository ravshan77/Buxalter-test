import axios from "axios";
import { handleRefresh } from "./handleRefresh";
import { toast } from 'react-toastify'
import { baseUrl } from "../constants";



export function Axios({ url, method = "GET", data = null, }) {
  try{
    return new Promise((resolve, reject) => {
      axios({ method: method, url: baseUrl + url, data: data })
        .then((data) => {
          if (data.status) {
            resolve(data);
          }else{
            throw new Error(data.message)
          }
        })
        .catch((error) => {
          if(error.request.status === 401) {
            handleRefresh()
            return "Bye 🙂🖐"
          }
          if(error.toJSON()?.message === 'Network Error'){
            toast.warning(`Internet quality is low, please check and try again!`, { position: toast.POSITION.TOP_RIGHT })
          }else if(error.response.data.error){
            toast.error(`Error! ${err.response.data.error}`, { position: toast.POSITION.TOP_RIGHT })
          }
          reject(error);
        });
      });
    }catch(err){
      toast.error(`Error! ${err.message}`, { position: toast.POSITION.TOP_RIGHT })
    }
  }
  
  axios.interceptors.request.use(function (config) {
    const token = JSON.parse(sessionStorage.getItem("user"))?.token;
    config.headers.Authorization = `Bearer ${token}`;

  return config;
});

axios.defaults.baseURL = baseUrl

export default Axios
