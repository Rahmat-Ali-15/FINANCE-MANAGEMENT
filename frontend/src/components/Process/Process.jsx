import "./Process.css";

export const Process = () => {

    const topData = [
        {
            title: "Income",
            amt: "₹92,000",
            color: "#18a046"
        },
        {
            title: "Spent",
            amt: "₹70,340",
            color: "#dd2026"
        },
        {
            title: "Income",
            amt: "₹21,660",
            color: "#68bee1"
        },
        {
            title: "Income",
            amt: "₹23.5%",
            color: "#0c283d"
        },
        {
            title: "Income",
            amt: "Food",
            color: "#111f2a"
        },
    ]

    return (
        <>
            <section className="process-section">
                <div className="process-top">
                    <div className="process-top-header">
                        <div className="process-top-header-left">
                            <p>Your Money at a Glance</p>
                            <span>August 2026</span>
                        </div>
                        <div className="process-top-header-right">
                            <span>✓</span>
                            <span>You're spending 8.2% less than last month.</span>
                        </div>
                    </div>
                    <div className="process-top-content">
                        {
                            topData && topData.map((el, id) => (
                                <div key={id}>
                                    <p>{el.title}</p>
                                    <span style={{color: el.color}}>{el.amt}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="process-bottom">
                    <div className="process-bottom-header">
                        <span>PROCESS</span>
                        <h3>Three Steps to Better Finances</h3>
                    </div>
                    <div className="process-bottom-content">
                        <div>
                            <div className="process-bottom-circle">01</div>
                            <p>Track</p>
                            <span>Record your income and expenses.</span>
                        </div>
                        <div>
                            <div className="second-cirle">
                                <span className="st-line"></span>
                                <div className="process-bottom-circle">02</div>
                                <span className="st-line"></span>
                            </div>
                            <p>Understand</p>
                            <span>See patterns in your spending.</span>
                        </div>
                        <div>
                            <div className="process-bottom-circle">03</div>
                            <p>Improve</p>
                            <span>Manage budgets and work toward your goals.</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}