import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mapper from "./Mapper";

const MainPage = () => {
  function sendStates(stateObject) {}
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Mapper sendStates={sendStates} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default MainPage;
