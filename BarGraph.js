// GroupedBarGraph.js
import React from "react";
import { Bar } from "react-chartjs-2";

const GroupedBarGraph = () => {
  
  const data5 = {
    labels: ["Current","0-30 Days", "31-60 Days", "61-90 Days", "91+ Days"],
    datasets: [
      {
        label: "Total Accounts Receivable",
        data: [2500000, 2000000, 1000000, 800000, 300000], // Update these values as needed
        backgroundColor: "#034f84",
        borderColor: "#36486b",
        borderWidth: 1,
      },
      {
        label: "Accounts Payable",
        data: [1340000, 81000, 81000, 81000, 50000], // Update these values as needed
        
        backgroundColor: "red",
        borderColor: "#c83349",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Due Date",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Amount (in thousand)",
        },
      },
    },
  };

  return (
    <div style={{ width: "50rem", padding: "2rem" }}>
      <span style={{marginLeft:"2rem", padding:"4px"}}>Total Accounts Receivable and Payable Aging</span>
      <Bar data={data5} options={options} />
    </div>
  );
};

export default GroupedBarGraph;
