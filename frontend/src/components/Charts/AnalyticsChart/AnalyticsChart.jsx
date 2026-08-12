import "./AnalyticsChart.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
);

export const AnalyticsChart = () => {
  const data = {
    labels: ["Jun", "Jul", "Aug"],

    datasets: [
      {
        data: [70, 50, 80],
        borderColor: "#16a34a",
        borderWidth: 2,
        backgroundColor: "rgba(22, 163, 74, 0.08)",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "#16a34a",
        pointHoverBorderColor: "#ffffff",
        pointHoverBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    interaction: {
      mode: "index",
      intersect: false,
    },

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        enabled: true,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },

        border: {
          display: false,
        },

        ticks: {
          color: "#9ca3af",
          font: {
            size: 10,
          },
        },
      },

      y: {
        display: false,
        min: 0,
        max: 100,
      },
    },
  };

  return (
    <>
      <div className="analytics-chart">
        <Line
          data={data}
          options={options}
        />
      </div>
    </>
  );
};
