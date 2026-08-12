import "./TransactionContent.css";

export const TransactionContent = () => {
  const data = [
    {
      title: "Salary Credit",
      type: "Income",
      amount: "+₹92,000",
      color: "#16a34a",
    },
    {
      title: "Grocery Store",
      type: "Food",
      amount: "-₹1,840",
      color: "#dc2624"
    },
    {
      title: "Netflix",
      type: "Entertainment",
      amount: "-₹649",
      color: "#dc2624"
    },
  ];

  return (
    <>
      <section className="transactionContent-section">
        <div className="transactionContent-container">
          {data &&
            data.map((el, id) => (
              <div key={id}>
                <div>
                  <p>{el.title}</p>
                  <span>{el.type}</span>
                </div>
                <div style={{color: el.color}}>{el.amount}</div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};
