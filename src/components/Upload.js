import React, { useState, useEffect } from "react";
import { GrCloudUpload } from "react-icons/gr";
import { MdDoneAll } from "react-icons/md";
import axios from "axios";
function Upload() {
  const [file, setFile] = useState();
  const [imagefile, setImagefile] = useState("");
  const[photo,setPhoto]=useState("")

  const UploadPhoto = () => {
    const image = new FormData();
    image.append("file", imagefile);
    axios.post("https://ff7d-103-163-182-3.ngrok.io/api/v1/prediction/images/", image, {
      headers: {
            "content-Type": 'multipart/form-data',
            Authorization: "Bearer " + localStorage.getItem("accesstoken"),
          },
    })
      .then((res) => {
        console.log(res.data)

        setFile(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
      <div className="py-24 font-poppins" id="predict">
      <h2 className="font-bold leading-none  sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl text-center">UPLOAD AND PREDICT</h2>
    <div className="m-auto md:w-7/12 font-poppins rounded-lg shadow-2xl pb-6">

      <div className="flex items-center mt-8 p-8">
        <div className="md:w-4/5">
          <h2 className="font-bold text-2xl text-left">
            Upload the picture here
          </h2>

          <p className="py-3 md:w-11/12">
            The combination of increasing global smartphone penetration and
            recent advances in computer vision made possible by deep learning
            has paved the way for smartphone-assisted disease diagnosis.
          </p>
        </div>
        <div className="md:w-1/5 ">
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col w-full border-2 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
              <div className="flex flex-col items-center justify-center pt-7">
                <GrCloudUpload size={48} />

                <p className="pt-3 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                  Upload a file
                </p>
              </div>
              <input
               type="file" onChange={(e) => setImagefile(e.target.files[0])}
               className="invisible"
              />
            </label>
          </div>

          <div className="flex justify-center p-2">
           
              <button
                className="w-full my-2 p-2 bg-cyan  flex align-center justify-center text-black "
                onClick={() => UploadPhoto()}
              >
                <MdDoneAll /> Predict
              </button>
           
          </div>
        </div>
      </div>
      {/* result start */}
      <div>
      <h2 className="font-bold text-2xl text-center">
            OUTPUT
          </h2>
          <div className="relative mt-6 m-auto md:w-11/12 h-[500px]  bg-gradient-to-r from-gray-500 to-teal-200  text-center rounded-lg">
           {/* <h3 className="text-xl font-bold uppercase text-white">Result here</h3> */}
           {file ?
          <div className="flex items-center justify-items-stretch w-full h-full from-gray-500">

           <img src={"https://ff7d-103-163-182-3.ngrok.io"+file.raw_image.image} alt="image loading..." className="w-9/12 h-full"/>
           <div className="ml-5">
          <h2 className="">{file.disease.name}</h2>
          <p>{file.disease.description}</p>
          <h4 className="">Cure - <span className="text-extrabold text-green-700">{file.disease.cure.name}</span></h4>
          <p>Description - {file.disease.cure.description}</p>
          </div> 
           </div>
          :
          null
          }

           </div>
      </div>
      {/* result end */}
    </div>
    </div>
  );
}

export default Upload;
