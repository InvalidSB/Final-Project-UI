import React,{useState,useEffect} from "react";

function LiveData() {
  const [started, setStarted] = useState(true);
  return (
    <div>
      {started && (
        <div>
          <h2 className="m-auto md:w-9/12 font-semibold text-4xl text-center"> Please open your system on the field </h2>
          <p className="font-extrabold text-xl text-center">(Implementation) </p>
       <div className="relative mt-6 m-auto md:w-9/12 h-[800px]  bg-gradient-to-r from-gray-500 to-gray-900 flex items-center justify-center text-center">
           <h1 className="text-4xl font-bold uppercase text-white">Live Data here</h1>
           </div>
           </div>
      )}
    </div>
  );
}

export default LiveData;
