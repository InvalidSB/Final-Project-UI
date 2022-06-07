import React, { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Nav() {
  let navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  const [acces, setAcces] = useState(false);
  // const history = useHistory();

  useEffect(() => {
    const auth = localStorage.getItem("accesstoken");
    if (!auth) {
      setAcces(false);
      navigate("/login", { replace: true });

    }
    setAcces(true);
  }, []);

  const singoutFunc=()=>{
    localStorage.clear()
    navigate("/login", { replace: true });

  }

  return (
    <div className="w-screen h-[90px] z-10 bg-teal-300 fixed drop-shadow-lg">
      <div className="px-6 m-auto md:w-9/12 flex justify-between items-center  h-full">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold mr-12 sm:text-4xl">POC.</h1>
          <ul className="hidden md:flex uppercase">
            {acces ? (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="#platform">Service</Link>
                </li>
                <li>
                  <Link to="/report">Report History</Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/about">About</Link>
              </li>
            )}
          </ul>
        </div>
        {acces ? (

        <div className="hidden md:flex pr-2">
          <button className="border-gray py-2 px-5 dark:border-gray-900 text-white uppercase" 
          onClick={singoutFunc}
          >
           
              Sign Out
          </button>
        </div>
        )
        :
        <div className="hidden md:flex pr-2">
        <button className="border-gray py-2 px-5 dark:border-gray-900 text-white uppercase">
          <Link
            to={{
              pathname: "/login",
            }}
          >
            Sign In
          </Link>
        </button>
      </div>
            }
        <div className="md:hidden">
          {nav ? (
            <AiOutlineCloseCircle size={36} onClick={handleClick} />
          ) : (
            <VscThreeBars size={36} onClick={handleClick} />
          )}
        </div>
      </div>
      {nav && (
        <ul className="absolute bg-gray-700 w-full px-8 md:hidden">
          {acces ? (
            <>
              <li className="border-b-2 border-gray-800 w-full text-white">
                <Link to="/">Home</Link>
              </li>
              <li className="border-b-2 border-gray-800 w-full text-white">
                <Link to="#platform">Service</Link>
              </li>
              <li className="border-b-2 border-gray-800 w-full text-white">
                <Link to="/report">Report History</Link>
              </li>
            </>
          ) : (
            <li className="border-b-2 border-gray-800 w-full text-white">
              <Link to="/about">About</Link>
            </li>
          )}
          <button className="w-full my-2 p-2 bg-cyan text-black mr-4">
            <Link
              to={{
                pathname: "/login",
              }}
            >
              Sign In
            </Link>
          </button>
        </ul>
      )}
    </div>
  );
}

export default Nav;
