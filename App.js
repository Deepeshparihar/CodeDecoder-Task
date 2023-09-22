import React from "react";
import "./App.css";
import GroupedBarGraph from "./BarGraph";
import SpeedGraph from "./SpeedGraph";
import SpeedometerChart from "./speedometer";
import StackedBarGraph from "./StackedBarGraph";
import Nav from "./Nav";

function App() {
  return (
    <div>
    <Nav />
    <div className="chart-container ">
      
      <SpeedometerChart />
      <GroupedBarGraph />
      <SpeedGraph />
      <StackedBarGraph />
    </div>
    </div>
  );
}

export default App;
