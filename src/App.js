import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import ReportHistory from "./components/ReportHistory";

import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

const Routing = () => {
  const [acces, setAcces] = useState(true);
  // const history = useHistory();

  useEffect(() => {


  }, []);

  return (
    <>
    <Routes>
        <Route exact path="/" element={ acces? <Home />: <Login/>}  />
        <Route exact path="/about" element={ <About/>}/>
        <Route exact path="/report" element={ <ReportHistory/>} />
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
