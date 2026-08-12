import "./Goals.css";

export const Goals = () => {

    const goalsData = [
        {
            title: "Buy Laptop",
            range: "₹35,000 of ₹80,000",
            remaining: "₹45,000 remaining",
            percentage: "44",
            color: "#0fa6e6"
        },
        {
            title: "Emergency Fund",
            range: "₹62,000 of ₹1,00,000",
            remaining: "₹38,000 remaining",
            percentage: "62",
            color: "#1ca24c"
        },
        {
            title: "Vacation",
            range: "₹28,000 of ₹50,000",
            remaining: "₹22,000 remaining",
            percentage: "56",
            color: "#8a61ec"
        },
    ]

    return (
        <>
            <section className="goals-section">
                <div className="goals-container">
                    <div className="goals-heading">
                        <span>GOALS</span>
                        <h3>Turn Plans Into Progress</h3>
                    </div>
                    <div className="goals-subtitle">
                        <span>Set a target, track your progress, and know exactly how far you are from your goal.</span>
                    </div>
                    <div className="goals-card">
                        {
                            goalsData && goalsData.map((el, id) => (
                                <div key={id}>
                                    <div className="goadls-card-header">
                                        <div>
                                            <p>{el.title}</p>
                                            <span>{el.range}</span>
                                        </div>
                                        <span style={{color: el.color, fontWeight: 700}}>{el.percentage}%</span>
                                    </div>
                                    <div className="goals-card-track-container">
                                        <div className="goals-card-track">
                                            <span style={{background: `${el.color}`, width: `${el.percentage}%`}}></span>
                                        </div>
                                        <span>{el.remaining}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="goals-btn">
                        <button>Start a Goal</button>
                    </div>
                </div>
            </section>
        </>
    )
}