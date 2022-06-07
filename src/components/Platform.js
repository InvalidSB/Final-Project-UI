import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

function Platform() {
  return (
    <div className="relative my-12 m-auto md:w-9/12 flex flex-col items-center justify-center text-center" id="platform">
      <h2 className="font-bold leading-none  sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl text-center">
        All-In-One-Platform
      </h2>
      <p className="md:w-4/5 py-6">
        We examine the particular agricultural problems under study, the
        specific models and frameworks employed, the data sources, current
        status and pre-processing of data used under study.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12 w-10/12">
        <div className="flex shadow-xl hover:shadow-inner p-4 rounded ">
          <div>
            <BsPatchCheckFill size={32} className="mr-4 text-teal-600" />
          </div>
          <div >
            <h3 className="font-bold text-lg text-left">Feature one</h3>
            <p className="text-base pt-2 pb-4 text-left">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form.
            </p>
          </div>
        </div>
        <div className="flex shadow-xl hover:shadow-inner p-4 rounded ">
          <div>
            <BsPatchCheckFill size={32} className="mr-4 text-teal-600" />
          </div>
          <div >
            <h3 className="font-bold text-lg text-left">Feature two</h3>
            <p className="text-base pt-2 pb-4 text-left">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form.
            </p>
          </div>
        </div>
        <div className="flex shadow-xl hover:shadow-inner p-4 rounded ">
          <div>
            <BsPatchCheckFill size={32} className="mr-4 text-teal-600" />
          </div>
          <div >
            <h3 className="font-bold text-lg text-left">Feature three</h3>
            <p className="text-base pt-2 pb-4 text-left">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form.
            </p>
          </div>
        </div>
        <div className="flex shadow-xl hover:shadow-inner p-4 rounded ">
          <div>
            <BsPatchCheckFill size={32} className="mr-4 text-teal-600" />
          </div>
          <div >
            <h3 className="font-bold text-lg text-left">Feature four</h3>
            <p className="text-base pt-2 pb-4 text-left">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form.
            </p>
          </div>
        </div>
        <div className="flex shadow-xl hover:shadow-2xl p-4 rounded ">
          <div>
            <BsPatchCheckFill size={32} className="mr-4 text-teal-600" />
          </div>
          <div >
            <h3 className="font-bold text-lg text-left">Feature five</h3>
            <p className="text-base pt-2 pb-4 text-left">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form.
            </p>
          </div>
        </div>
        <div className="flex shadow-xl hover:shadow-inner p-4 rounded ">
          <div>
            <BsPatchCheckFill size={32} className="mr-4 text-teal-600" />
          </div>
          <div >
            <h3 className="font-bold text-lg text-left">Feature six</h3>
            <p className="text-base pt-2 pb-4 text-left">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Platform;
