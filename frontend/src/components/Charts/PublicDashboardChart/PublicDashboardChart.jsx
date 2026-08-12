import "./PublicDashboardChart.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export const PublicDashboardChart = () => {
  const amountData = [
    {
      title: "Balance",
      amount: "₹1,84,260",
      remaining: "Aug 2026",
      color: "#000",
    },
    {
      title: "Income",
      amount: "₹92,000",
      remaining: "₹92,000",
      color: "#5aa073",
    },
    {
      title: "Expense",
      amount: "₹70,340",
      remaining: "₹70,340",
      color: "#cd2f35",
    },
    {
      title: "Saved",
      amount: "23.5%",
      remaining: "₹21,660",
      color: "#66bbe8",
    },
  ];

  const recentData = [
    {
      title: "Grocery Store",
      price: "₹1,840",
      date: "Aug 10",
      color: "#cd2f35",
    },
    {
      title: "Salary Credit",
      price: "+₹92,000",
      date: "Aug 01",
      color: "#5aa073",
    },
    {
      title: "Uber Ride",
      price: "₹340",
      date: "Aug 09",
      color: "#cd2f35",
    },
    {
      title: "Netflix",
      price: "₹649",
      date: "Aug 08",
      color: "#cd2f35",
    },
  ];

  // Chart
  const data = {
    labels: ["Mar", "Apr", "May", "Jun", "Jul", "Aug"],

    datasets: [
      {
        label: "Income",
        data: [68000, 62000, 72000, 76000, 74000, 80000],
        backgroundColor: "#16a34a",
        borderRadius: 3,
        barThickness: 9,
      },
      {
        label: "Expenses",
        data: [48000, 42000, 54000, 58000, 52000, 56000],
        backgroundColor: "#fca5a5",
        borderRadius: 3,
        barThickness: 9,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        enabled: false,

        external: function (context) {
          let tooltipEl = document.getElementById("expense-chart-tooltip");

          // Create tooltip only once
          if (!tooltipEl) {
            tooltipEl = document.createElement("div");

            tooltipEl.id = "expense-chart-tooltip";
            tooltipEl.className = "expense-chart__tooltip";

            document.body.appendChild(tooltipEl);
          }

          const tooltip = context.tooltip;

          // Hide tooltip
          if (tooltip.opacity === 0) {
            tooltipEl.style.opacity = 0;
            return;
          }

          if (tooltip.dataPoints?.length) {
            const dataIndex = tooltip.dataPoints[0].dataIndex;

            const month = data.labels[dataIndex];

            const expense = data.datasets[0].data[dataIndex];
            const income = data.datasets[1].data[dataIndex];

            tooltipEl.innerHTML = `
              <div class="expense-chart__tooltip-month">
                ${month}
              </div>

              <div class="expense-chart__tooltip-item expense-chart__tooltip-item--expense">
                expense : ₹${expense.toLocaleString("en-IN")}
              </div>

              <div class="expense-chart__tooltip-item expense-chart__tooltip-item--income">
                income : ₹${income.toLocaleString("en-IN")}
              </div>
            `;
          }

          const position = context.chart.canvas.getBoundingClientRect();

          tooltipEl.style.opacity = 1;

          tooltipEl.style.left =
            position.left + window.scrollX + tooltip.caretX + 10 + "px";

          tooltipEl.style.top =
            position.top + window.scrollY + tooltip.caretY - 30 + "px";
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
          color: "#8b8b8b",
          font: {
            size: 12,
          },
        },
      },

      y: {
        display: false,

        grid: {
          display: true,
          color: "#eeeeee",
        },

        border: {
          display: false,
        },

        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className="publicDashboardChart">
        <div className="publicDashboardChart-title-container">
          <div>
            <span className="publicDashboardChart-dot"></span>
            <span className="publicDashboardChart-title">ExpenseFlow</span>
          </div>
          <p className="publicDashboardChart-date">August 2026</p>
        </div>
        <div className="publicDashboardChart-amount">
          {amountData &&
            amountData.map((el, id) => (
              <div key={id}>
                <span>{el.title}</span>
                <p style={{ color: el.color, fontWeight: "bold" }}>
                  {el.amount}
                </p>
                <span>{el.remaining}</span>
              </div>
            ))}
        </div>
        <div className="publicDashboardChart-wrapper">
          <div className="publicDashboardChart-container">
            <p>Income vs Expenses</p>
            <div className="publicDashboardChart-chart">
              <Bar
                data={data}
                options={options}
              />
            </div>
          </div>
          <div className="publicDashboardChart-recent">
            <p>Recent</p>
            <div>
              {recentData &&
                recentData.map((el, id) => (
                  <div key={id}>
                    <div>
                      <p>{el.title}</p>
                      <span>{el.date}</span>
                    </div>
                    <div style={{ color: el.color }}>{el.price}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
