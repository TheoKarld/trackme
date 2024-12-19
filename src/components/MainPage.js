import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MapperTwo from "./MapperTwo";

const MainPage = () => {
  function sendStates(stateObject) {}
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MapperTwo sendStates={sendStates} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default MainPage;
