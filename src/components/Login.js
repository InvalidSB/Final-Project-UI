import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const notify = () => toast.error("Invalid Credentials!");
  const notifysuc = () => toast.info("Sign in successfully");

  const SignIn = (e) => {
    e.preventDefault();

    fetch("https://ff7d-103-163-182-3.ngrok.io/api/v1/token/ ", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data, err) => {
        if (data.detail) {
          notify();
          console.log(data.detail);
          localStorage.clear();
        } else {
          localStorage.setItem("accesstoken", data.access);
          // console.log(data.access);
          notifysuc();
          // localStorage.setItem("user", JSON.stringify(data.user));
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="flex items-center font-poppins justify-center bg-gray-200 h-[100vh] w-[100vw] font-light ">
        <div>
          <div className="relative m-auto w-[400px] h-[450px] mr-6 shadow-xl  bg-white/30 flex flex-col items-center justify-center text-center  rounded-xl backdrop-blur-lg  ">
            <h3 className="text-xl font-bold uppercase mb-6 text-black border-y-4 border-black">
              Point Out Crops
            </h3>
            <p className="w-4/5">
              This is just a beta version for a plant Cauliflower
            </p>
            <ol className="text-left mt-6">
              <li className="text-left list-disc p-0 m-0">
                Deep Learning Technique
              </li>
              <li className="text-left list-disc p-0 m-0">
                Disease Prediction
              </li>
              <li className="text-left list-disc p-0 m-0">
                Report About The Disease
              </li>
            </ol>
          </div>
        </div>

        <div className="bg-white/10 w-[400px] h-[450px] shadow-xl rounded-xl backdrop-blur-lg  ">
          <h3 className="text-center text-xl font-light mt-10 text-black">
            {" "}
            Please enter your credentials
          </h3>
          <div className=" flex flex-col items-center justify-center mt-10 ">
            <input
              className=" w-4/5 m-auto rounded bg-white/20 shadow-md backdrop-blur-md px-3 py-5 text-sm h-[30px] mb-8"
              placeholder="Username..."
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              className=" w-4/5 m-auto rounded bg-white/20 shadow-md backdrop-blur-md px-3 py-5 text-sm h-[30px] mb-8"
              placeholder="Password..."
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="text-center mb-4">
              <a href="#">Forgot password ?</a>
            </div>
            <button className="w-3/5 my-2 p-2 bg-cyan  flex align-center justify-center text-black disable" onClick={SignIn}>
              Sign In
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
