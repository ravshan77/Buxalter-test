import axios from "axios";
import React, { useState } from "react";
import { Delete } from "../assets/index";
import "./uploadImage.scss";

// const BaseUrl = "https://garant-hr.uz/api"
const BaseUrl = "http://10.100.104.110:9000/api"


function HtmlUploader({ name, setHandleChange, getValues }) {
  const deletImage = { url: "/anketa-web-app/delete/image", deletFileName: "Images/Products" }
  const [lockalLoading, setLockalLoading] = useState(false);
  const [progress, setProgress] = useState(0);

//   axios.defaults.port = 8000;
//   axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.baseURL = BaseUrl
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';


  const handleRemove = async () => {
    // setSaveLoading(true);
    setLockalLoading(true);
   
   await axios.post(BaseUrl + deletImage?.url,  {file: getValues(name) })
      .then((res) => {
        if (res.status === 200) {
          console.log("Rasm o'chirildi");
          let target = { [name]: null };
          setHandleChange(target);
          setProgress(0);
        }
      })
      .catch((err) => console.log("Xatolik! Rasm o'chirilmadi"))
      .finally(() => {
        // setSaveLoading(false);
        setLockalLoading(false);
      });
  };

  
  const updateDisplayedFileInfo = (input) => {
    const file = input.target.files[0];
    if (!file) {
      console.log("Xatolik");
      return;
    }
  
    const dateModified = new Date(file.lastModified).toISOString();
    const {name, size, type} = file;
    const data = { dateModified, name, size, type:"image/jpeg" };
    const json = JSON.stringify(data, null, 2);
    return JSON.parse(json);
  };
  


  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
        setLockalLoading(true);
        
        var converJpegFile = new File([new ArrayBuffer(event.target.files[0].size)], event.target.files[0].name, updateDisplayedFileInfo(event))

        console.log(event.target.files[0]);
        console.log(converJpegFile);

        const formData = new FormData();
        formData.append("file", converJpegFile);

        await axios({ method: "post", url: "/anketa-web-app/store/image", data: formData, headers: { "Content-Type": "multipart/form-data" }, onUploadProgress: (progressEvent) => {
            let percentComplete = progressEvent.loaded / progressEvent.total;
            percentComplete = parseInt(percentComplete * 100);
            setProgress(percentComplete);
        }  }).then((res) => {
          if (res.status === 200) {
            setHandleChange({ [name]: res.data });
            setProgress(0);
          } else {
            throw new Error("Rasm yuklashda xatolik");
          }
        })
        .catch((err) => console.log(err, "Rasm yuklashda xatolik"))
        .finally(() => {
          setLockalLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <div className="wrap-up">
        <>
          {[0].includes(progress) ? null : (<p style={{ width: `${progress}%`, height: "5px", backgroundColor: "green" }} ></p> )}
          <button type="button" onClick={handleRemove} className="up-delete" style={{ display: getValues(name) ? "flex" : "none", left: getValues(name) ? "10px" : "70px" }} >
            <Delete />
          </button>
          <input
            accept={"image/jpeg, image/png, image/jpg, image/image, image/img, image/raw, image/dng, image/raw, image/heic, image/*" }
            type="file"
            className="up-input"
            name={name}
            id={"labelName"}
            onChange={handleSubmit}
          />
        </>
      {getValues(name) ? (
        <div className="up-div">
          <img
            className="up-image"
            style={{ height: "200px", width: "100%" }}
            src={BaseUrl + "/public/storage/" + getValues(name)}
          />
        </div>
      ) : (
        <label
          htmlFor={"labelName"}
          className="up-div"
        >
          <p className="up-title">
            {lockalLoading ? `Yuklanmoqda: ${progress}%` : "Yuklash"}
          </p>
        </label>
      )}
    </div>
  );
}

export default HtmlUploader;
