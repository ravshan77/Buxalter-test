import axios from "axios";
import message from "../utils/message";
import { handleRefresh } from "./handleRefresh";
const token = "7|xLZt3tgFDIX8PGOpkMpinoyMIcdTvQJElBpTvEU4" 
const BaseUrl = "http://10.100.104.110:9002/api"


export function Axios({ url, method = "GET", data = null, }) {
  try{
    return new Promise((resolve, reject) => {
      axios({ method: method, url: BaseUrl + url, data: data })
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
            return
          }
          if(error.toJSON()?.message === 'Network Error'){
            message({type:"warning", msg:"Internrt sifati past, tekshirib qaytadan urinib ko'ring !", title:"Ogohlantirish !!!", duration:7000})
          }else if(error.response.data.error){
            
            message({type:"danger", msg: error.response.data.error, title:"Xatolik"})
          }
          reject(error);
        });
      });
    }catch(err){
      message({type:"danger", msg: err.response.data.data, title:"Xatolik"})
    }
  }
  
  axios.interceptors.request.use(function (config) {
    // const token = JSON.parse(sessionStorage.getItem("user"))?.token;
    config.headers.Authorization = `Bearer ${token}`;

  return config;
});

axios.defaults.baseURL = BaseUrl

export default Axios
