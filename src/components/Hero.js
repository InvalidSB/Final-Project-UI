import React from "react";
import Hvideo from "../assets/homevideo.mp4"

function Hero() {
  return (
    <section className="py-12">
      <div className=" flex flex-col items-center px-4 py-8 mx-auto text-center  h-3/5 md:px-10 lg:px-32 xl:max-w-6xl">
        <h1 className="font-bold leading-none  sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl">
          POINT OUT
          <span className="dark:text-teal-300 ml-6">CROPS</span>
        </h1>
        <p className="px-8 mt-8 mb-12 text-base">
          The complete solution for your agriculture. Using these text generators
          is very convenient, as you can set exactly how many paragraphs you
          need to fit your mock-up.
        </p>
        <div className="flex flex-wrap justify-center">
          <button className="px-5 py-2 m-2 text-lg font-semibold rounded dark:bg-teal-400 dark:text-gray-900">
            Live Demo
          </button>
          <button className="px-5 py-2 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-900">
            Learn more
          </button>
        </div>
      </div>
      {/* try start */}
      <section class="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3 md:w-9/12 m-auto">
    <div class="video-docker absolute top-0 left-0 w-full h-3/5 overflow-hidden">
        <video class="min-w-full min-h-full absolute object-cover"  preload="auto" src={Hvideo} type="video/mp4" autoPlay loop></video>
    </div>
    <div class="video-content space-y-2 h-1/5">
        <h1 class="font-light text-4xl">AI systems are helping to improve the  </h1>
        <h3 class="font-light text-2xl">overall harvest quality and accuracy</h3>
    </div>
</section>
      {/* try end */}
 
    </section>
  );
}

export default Hero;
