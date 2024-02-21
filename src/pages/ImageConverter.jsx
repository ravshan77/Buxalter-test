import React from "react";
import heic2any from "heic2any";
import axios from "axios";

export const ImageConverter = () => {
  const BaseUrl = "http://10.100.104.110:9000/api";
  axios.defaults.baseURL = BaseUrl;
  axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

  const convertHeicToJpeg = (heicFile) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const jpegBlob = await heic2any({ blob: reader.result, toType: "image/jpeg" });
          resolve(jpegBlob);
        } catch (error) {
            console.log(error);
          reject(error);
        }
      };
      reader.onerror = () => {
        reject(new Error("Failed to read the file."));
      };
      reader.readAsArrayBuffer(heicFile);
    });
  };

  const handleFileInputChange = async (event) => {
    const heicFile = event.target.files[0];
    if (heicFile) {
      try {
        // Convert HEIC file to JPEG
        const jpegBlob = await convertHeicToJpeg(heicFile);
        console.log(jpegBlob);

        await axios({ method: "post", url: "/anketa-web-app/store/image", data: jpegBlob, headers: { "Content-Type": "multipart/form-data" } })
          .then((res) => {
            if (res.status === 200) {
              console.log(res);
            } else {
              throw new Error("Rasm yuklashda xatolik");
            }
          })
          .catch((err) => console.log(err, "Rasm yuklashda xatolik"));
      } catch (error) {
        console.error("Error converting HEIC to JPEG:", error);
      }
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/heic"
        onChange={handleFileInputChange}
      />
    </div>
  );
};

export default ImageConverter;
