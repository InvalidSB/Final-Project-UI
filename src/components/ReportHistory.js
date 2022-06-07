import React,{useEffect,useState} from 'react'
import Nav from "./Nav";

function ReportHistory() {
    const [Alldata,setAlldata]=useState()

    useEffect(() => {
        fetch("https://ff7d-103-163-182-3.ngrok.io/api/v1/prediction/reports/?page=1", {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("accesstoken"),
          },
         
        })
          .then((res) => res.json())
          .then((data) => {
              console.log(data.results);
              setAlldata(data.results)
            // history.push("/");
          })
          .catch((err) => console.log(err));
      }, []);

  return (
      <>
<Nav/>
  <div className=" py-[90px]">
      <h1 className='text-center font-poppins text-2xl mt-6'>All previous reports</h1>
      {Alldata?
      <div className='m-auto md:w-9/12 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12 '>
          {
              Alldata.map(each=>{return(

            
  <div className="p-10">  
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-[200px]" src={each.raw_image.image} alt="Mountain" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{each.disease.name}</div>
        <p className="text-gray-700 text-base">
        {each.disease.description}        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
       {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
      </div>
    </div>
  </div>
              )})
}
    </div>
    :
    <h1> loading....
    </h1>
    }
    </div>
      
      </>
  )
}

export default ReportHistory