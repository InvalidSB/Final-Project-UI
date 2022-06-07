import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import ReportHistory from "./components/ReportHistory";
import { useNavigate } from "react-router-dom";

import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

const Routing = () => {
  let navigate = useNavigate();

  const [acces, setAcces] = useState(false);
  // const history = useHistory();

  useEffect(() => {
    const auth = localStorage.getItem('accesstoken')
    if(!auth){
      setAcces(false)
      navigate("/login", { replace: true });

    }
    setAcces(true)

  }, []);

  return (
    <>
    <Routes>
        <Route exact path="/" element={ acces? <Home />: <Login/>}  />
        <Route exact path="/about" element={ <About/>}/>
        <Route exact path="/report" element={ acces ? <ReportHistory/>:<Login/>} />
        <Route exact path="/login" element={ <Login/>}/>
        {/* <Route render={() => <Redirect to="/" />} /> */}
        </Routes> </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}
export default App;
