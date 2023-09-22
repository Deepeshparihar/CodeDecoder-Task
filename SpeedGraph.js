import React from "react"; // Importing the React library

import Chart from "chart.js/auto"; // Importing the Chart.js library

import { Line } from "react-chartjs-2"; // Importing the Line component from the react-chartjs-2 library

// Setting up the labels for the x-axis of the chart
const labels = ["","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sep","Oct","Nov","Dec"];

// Setting up the data for the chart, including the labels and datasets
const data = {
  labels: labels,
  datasets: [
    {
      label: "Cross Working Capital", // Setting up the label for the dataset
      label1: "Net Working Capital", // Setting up the label for the dataset
      backgroundColor: "#36486b", // Setting up the background color for the dataset
      borderColor: "#034f84", // Setting up the border color for the dataset
      data: [null,0, 2, 253, 250, 200, 200,300, 550,100,350,250,0], // Setting up the data for the dataset
    },
    {
      label: "Net Working Capital", // Setting up the label for the dataset
      backgroundColor: "#ff6f69", // Setting up the background color for the dataset
      borderColor: "yellow", // Setting up the border color for the dataset
      data: [null,0, 2,150,210, -100, -20, -30, 470,-2,310,190,-50], // Setting up the data for the dataset
    },
  ],
};

// Defining the LineChart component
const LineChart = () => {
  return (
    <div style={{width:"49rem", paddingLeft:"3rem", paddingBottom:"2rem"}}>
      <span style={{marginLeft:"2rem", padding:"4px"}}>Net Working Capital vs Gross Working Capital</span>
      <Line data={data} /> </div>
  );
};

export default LineChart; // Exporting the LineChart component as the default export of the module
