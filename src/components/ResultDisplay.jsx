import React from "react";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  
  ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
  

const ResultDisplay = ({ results }) => {
  const data = {
    labels: results?.labels || ["Category A", "Category B", "Category C"],
    datasets: [
      {
        label: "Data Insights",
        data: results?.values || [30, 45, 60],
        backgroundColor: ["#4F46E5", "#EC4899", "#10B981"],
      },
    ],
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h3 className="text-lg font-bold mb-2">Query Results</h3>
      <Bar data={data} />
    </div>
  );
};

export default ResultDisplay;
