// SpeedometerChart.js
import React from "react";
import { Doughnut } from "react-chartjs-2";


const SpeedometerChart = () => {
  const data = {
    labels: ["Current Ratio","Remained"],
    datasets: [
      {
        data: [33, 77], // Update these values as needed
        backgroundColor: ["#92a8d1", "rgba(0, 0, 0, 0.2)"],
        borderColor: ["#034f84", "rgba(0, 0, 0, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const data1 = {
    labels: ["Days Passed","Days Remained"],
    datasets: [
      {
        data: [10, 21], // Update these values as needed
        backgroundColor: ["#feb236", "rgba(0, 0, 0, 0.2)"],
        borderColor: [" #ff7b25", "rgba(0, 0, 0, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const data2 = {
    labels: ["Days Passed","Days Remained"],
    datasets: [
      {
        data: [7, 24], // Update these values as needed
        backgroundColor: ["#d64161", "rgba(0, 0, 0, 0.2)"],
        borderColor: ["#50394c", "rgba(0, 0, 0, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const data3 = {
    labels: ["Days Passed","Days Remained"],
    datasets: [
      {
        data: [28, 3], // Update these values as needed
        backgroundColor: ["green", "rgba(0, 0, 0, 0.2)"],
        borderColor: ["#484f4f", "rgba(0, 0, 0, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{display:"flex", padding:"2rem", marginTop:"6rem"}}>
    <div className="padding" style={{padding:"6px" , width:"11rem" }}>
      <div style={{textAlign:"center", border:"solid", padding:"2px", height:"5rem"}} >
     <span style={{fontFamily:"initial" , fontStyle:"bold", fontSize:"14px", fontWeight:"bold"}}>Total Accounts Receivable </span>
     <span style={{fontSize:"35px", fontStyle:"bold", color:"#92a8d1"}}>$6,621,280</span>
     </div>
    
    <div style={{padding:"6px" , background:"", marginTop:"2px", border:"solid"}} >
      {" "}
      <Doughnut data={data} />
    </div>
    </div>
    <div className="padding" style={{padding:"6px" , width:"11rem"}}>
      <div style={{textAlign:"center", border:"solid", padding:"2px", height:"5rem"}} >
     <span style={{fontFamily:"initial" , fontStyle:"bold", fontSize:"14px", fontWeight:"bold"}}>Total Accounts Payable </span>
     <span style={{fontSize:"35px", fontStyle:"bold", color:"#f7786b"}}>$1,630,270</span>
     </div>
    
    <div style={{padding:"6px" , background:"", marginTop:"2px", border:"solid"}} >
      {" "}
      <Doughnut data={data1} />
    </div>
    </div>
    <div className="padding" style={{padding:"6px" , width:"11rem"}}>
      <div style={{textAlign:"center", border:"solid", padding:"2px", height:"5rem"}} >
     <span style={{fontFamily:"initial" , fontStyle:"bold", fontSize:"14px", fontWeight:"bold"}}>Equity Ratio </span>
     <span style={{fontSize:"35px", fontStyle:"bold", color:"#034f84"}}>75.38%</span>
     </div>
    
    <div style={{padding:"6px" , background:"", marginTop:"2px", border:"solid"}} >
      {" "}
      <Doughnut data={data2} />
    </div>
    </div>
    <div className="padding" style={{padding:"6px" , width:"11rem"}}>
      <div style={{textAlign:"center", border:"solid", padding:"2px", height:"5rem"}} >
     <span style={{fontFamily:"initial" , fontStyle:"bold", fontSize:"14px", fontWeight:"bold",paddingLeft:"2px"}}>  Debt Equity </span>
     <span style={{fontSize:"35px", fontStyle:"bold", color:"#034f84"}}>1.10%</span>
     </div>
    
    <div style={{padding:"6px" , background:"", marginTop:"2px", border:"solid"}} >
      {" "}
      <Doughnut data={data3} />
    </div>
    </div>
    
  </div>
  
  );
};

export default SpeedometerChart;
