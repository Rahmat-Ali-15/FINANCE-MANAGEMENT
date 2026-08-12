import "./AnalyticsDashboard.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  ArcElement,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  ArcElement,
  Legend,
);

export const AnalyticsDashboard = () => {
  const analyticsData = [
    {
      title: "Shopping",
      type: "Highest Spending",
      data: "₹22,400",
    },
    {
      title: "₹62,875",
      type: "Avg Monthly",
      data: "last 8 months",
    },
    {
      title: "23.5%",
      type: "Savings Rate",
      data: "↑ 2.1% vs last mo",
    },
  ];

  // Line chart
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],

    datasets: [
      {
        label: "Spent",

        data: [52000, 61000, 58000, 70000, 72000, 65000, 68000, 50000],

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
        enabled: false,

        external: (context) => {
          const { chart, tooltip } = context;

          let tooltipEl = chart.canvas.parentNode.querySelector(
            ".analytics-chart-tooltip",
          );

          // Create tooltip
          if (!tooltipEl) {
            tooltipEl = document.createElement("div");

            tooltipEl.className = "analytics-chart-tooltip";

            chart.canvas.parentNode.appendChild(tooltipEl);
          }

          // Hide tooltip
          if (tooltip.opacity === 0) {
            tooltipEl.style.opacity = "0";
            return;
          }

          if (tooltip.dataPoints?.length) {
            const dataPoint = tooltip.dataPoints[0];

            const month = dataPoint.label;
            const value = dataPoint.raw;

            tooltipEl.innerHTML = `
              <div class="analytics-chart-tooltip-month">
                ${month}
              </div>

              <div class="analytics-chart-tooltip-value">
                Spent : ₹${Number(value).toLocaleString("en-IN")}
              </div>
            `;
          }

          const { offsetLeft, offsetTop } = chart.canvas;

          tooltipEl.style.opacity = "1";

          tooltipEl.style.left = offsetLeft + tooltip.caretX - 133 + "px";

          tooltipEl.style.top = offsetTop + tooltip.caretY + 10 + "px";
        },
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
            size: 11,
          },
        },
      },

      y: {
        display: false,

        min: 0,
        max: 100000,

        grid: {
          display: false,
        },

        border: {
          display: false,
        },
      },
    },
  };

  //   Category chart
  const categoryData = {
    labels: ["Food", "Transport", "Shopping", "Bills", "Other"],

    datasets: [
      {
        data: [28, 18, 22, 20, 12],

        backgroundColor: [
          "#16a34a",
          "#0ea5e9",
          "#8b5cf6",
          "#f59e0b",
          "#6b7280",
        ],

        borderWidth: 0,

        hoverOffset: 4,
      },
    ],
  };

  const categoryOptions = {
    responsive: true,

    maintainAspectRatio: false,

    cutout: "65%",

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        enabled: true,

        backgroundColor: "#ffffff",

        titleColor: "#111111",

        bodyColor: "#111111",

        borderColor: "#e5e5e5",

        borderWidth: 1,

        padding: 10,

        cornerRadius: 5,

        displayColors: true,

        callbacks: {
          label: (context) => {
            const label = context.label;
            const value = context.raw;

            return ` ${label}: ${value}%`;
          },
        },
      },
    },
  };

  const categories = [
    {
      name: "Food",
      value: "28%",
      color: "#16a34a",
    },
    {
      name: "Transport",
      value: "18%",
      color: "#0ea5e9",
    },
    {
      name: "Shopping",
      value: "22%",
      color: "#8b5cf6",
    },
    {
      name: "Bills",
      value: "20%",
      color: "#f59e0b",
    },
    {
      name: "Other",
      value: "12%",
      color: "#6b7280",
    },
  ];

  return (
    <>
      <div className="analyticsDashboard-container">
        <div className="analyticsDashboard-header">
          <p>Analytics Dashboard</p>
          <span>Aug 2026 · All accounts</span>
        </div>
        <div className="analyticsDashboard-cotent">
          {analyticsData &&
            analyticsData.map((el, id) => (
              <div key={id}>
                <span>{el.type}</span>
                <p>{el.title}</p>
                <span>{el.data}</span>
              </div>
            ))}
        </div>
        {/* Line chart */}
        <div className="analyticsDashboard-chart">
          <div className="analyticsDashboard-monthly-spend">
            <p>Monthly Spending Trend</p>
            <div className="analyticsDashboard-lineChart">
              <Line
                data={data}
                options={options}
              />
            </div>
          </div>
          {/* Category chart */}
          <div className="analyticsDashboard-category">
            <p>By Category</p>
            <div className="analyticsDashboard-categoryChart">
              <div className="category-chart-canvas">
                <Doughnut
                  data={categoryData}
                  options={categoryOptions}
                />
              </div>

              <div className="category-chart-legend">
                {categories.map((category) => (
                  <div
                    className="category-chart-legend-item"
                    key={category.name}
                  >
                    <span
                      className="category-chart-dot"
                      style={{
                        backgroundColor: category.color,
                      }}
                    />

                    <span className="category-chart-name">{category.name}</span>

                    <span className="category-chart-value">
                      {category.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
