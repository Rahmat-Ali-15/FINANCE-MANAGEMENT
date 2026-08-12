import "./BudgetPreview.css";

export const BudgetPreview = () => {
  const budgets = [
    {
      id: 1,
      name: "Food",
      percentage: "80%",
      progress: 80,
      status: "normal",
      color: "#f59e0b"
    },
    {
      id: 2,
      name: "Transport",
      percentage: "64%",
      progress: 64,
      status: "normal",
      color: "#16a34a"
    },
    {
      id: 3,
      name: "Shopping",
      percentage: "Exceeded",
      progress: 100,
      status: "exceeded",
      color: "#dc2626"
    },
  ];

  return (
    <>
      <section className="budgetPreview-section">
        {budgets &&
          budgets.map((el) => (
            <div
              key={el.id}
              className="budget-preview-item"
            >
              <div className="budget-preview-header">
                <span className="budget-preview-name">{el.name}</span>
                <span style={{color: el.color}} 
                  className="budget-preview-percentage"
                >
                  {el.percentage}
                </span>
              </div>
              <div className="budget-preview-track">
                <div
                  className="budget-preview-progress"
                  style={{ width: `${el.progress}%`, background: el.color }}
                />
              </div>
            </div>
          ))}
      </section>
    </>
  );
};
