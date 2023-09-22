// StackedBarGraph.js
import React from "react";
import { Bar } from "react-chartjs-2";

const StackedBarGraph = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Dataset 1",
        data: [
          500, 700, 600, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600,
        ], // Update these values as needed
        backgroundColor: "#034f84", // Color for Dataset 1
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Dataset 2",
        data: [
          1000, 1300, 1200, 1300, 1400, 1500, 1700, 1600, 1800, 1900, 2000, 2200,
        ], // Update these values as needed
        backgroundColor: "#feb236", // Color for Dataset 2
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Dataset 3",
        data: [
          1500, 1750, 1650, 1750, 1850, 1950, 2050, 2150, 2250, 2350, 2650, 3000,
        ], // Update these values as needed
        backgroundColor: "green", // Color for Dataset 3
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
        stacked: true, // Enable stacking for the bars
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        beginAtZero: true,
        stacked: true, // Enable stacking for the bars on the y-axis
        title: {
          display: true,
          text: "Amount",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <div style={{ width: "49rem", padding:"1.5rem" , marginBottom:"2rem"}}>
        <span style={{marginLeft:"2rem", padding:"4px"}}>Profit and Loss Summary</span>
      <Bar data={data} options={options} />
    </div>
  );
};

export default StackedBarGraph;
