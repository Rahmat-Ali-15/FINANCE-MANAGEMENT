import "./Budget.css"

const budgetData = [
  {
    id: 1,
    name: "Food",
    spent: 6400,
    budget: 8000,
    remaining: 1600,
    percentage: 80,
    status: "normal",
  },
  {
    id: 2,
    name: "Transport",
    spent: 3200,
    budget: 5000,
    remaining: 1800,
    percentage: 64,
    status: "normal",
  },
  {
    id: 3,
    name: "Shopping",
    spent: 4300,
    budget: 4000,
    remaining: -300,
    percentage: 100,
    status: "exceeded",
  },
];

export const Budgets = () => {
  const totalBudget = budgetData.reduce(
    (total, item) => total + item.budget,
    0
  );

  const totalSpent = budgetData.reduce(
    (total, item) => total + item.spent,
    0
  );

  return (
    <section className="budgets-section" id="budgets">
      <div className="budgets-container">

        {/* Budget Preview */}
        <div className="budgets-preview">

          {/* Header */}
          <div className="budgets-header">
            <div>
              <h3 className="budgets-title">
                August Budgets
              </h3>

              <p className="budgets-subtitle">
                3 categories · 1 exceeded
              </p>
            </div>

            <span className="budgets-month">
              Aug 2026
            </span>
          </div>

          {/* Budget Items */}
          <div className="budgets-items">
            {budgetData.map((item) => (
              <div
                className="budgets-item"
                key={item.id}
              >
                <div className="budgets-item-header">
                  <span className="budgets-category">
                    {item.name}
                  </span>

                  {item.status === "exceeded" ? (
                    <span className="budgets-exceeded">
                      Exceeded by ₹
                      {Math.abs(item.remaining).toLocaleString("en-IN")}
                    </span>
                  ) : (
                    <span className="budgets-remaining">
                      ₹{item.remaining.toLocaleString("en-IN")} left
                    </span>
                  )}
                </div>

                {/* Progress */}
                <div className="budgets-progress-track">
                  <div
                    className={`budgets-progress ${
                      item.status === "exceeded"
                        ? "budgets-progress--exceeded"
                        : item.name === "Food"
                        ? "budgets-progress--warning"
                        : ""
                    }`}
                    style={{
                      width: `${item.percentage}%`,
                    }}
                  />
                </div>

                <div className="budgets-item-footer">
                  <span>
                    ₹{item.spent.toLocaleString("en-IN")} spent
                  </span>

                  <span>
                    Budget: ₹{item.budget.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="budgets-summary">
            <div className="budgets-summary-row">
              <span>Total budgeted</span>

              <strong>
                ₹{totalBudget.toLocaleString("en-IN")}
              </strong>
            </div>

            <div className="budgets-summary-row">
              <span>Total spent</span>

              <strong className="budgets-summary-spent">
                ₹{totalSpent.toLocaleString("en-IN")}
              </strong>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="budgets-content">

          <span className="budgets-eyebrow">
            BUDGETS
          </span>

          <h2 className="budgets-heading">
            Know Before You Overspend
          </h2>

          <p className="budgets-description">
            Set category budgets and know exactly how much
            you have left before you overspend.
          </p>

          <button className="budgets-button">
            Create Your Budget
          </button>

        </div>

      </div>
    </section>
  );
};