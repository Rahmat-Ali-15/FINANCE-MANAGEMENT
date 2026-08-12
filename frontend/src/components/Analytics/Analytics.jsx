import "./Analytics.css";

import { AnalyticsDashboard } from "../Charts/AnalyticsDashboard/AnalyticsDashboard";

export const Analytics = () => {

    const analyticsData = [
        {
            icon: "✓",
            desc: "Monthly spending trends"
        },
        {
            icon: "✓",
            desc: "Category breakdown"
        },
        {
            icon: "✓",
            desc: "Income vs expense comparison"
        },
        {
            icon: "✓",
            desc: "Savings rate and spending metrics"
        },
    ]

    return(
        <>
            <section className="analytics-section" id="analytics">
                <div className="analytics-left">
                    <AnalyticsDashboard />
                </div>
                <div className="analytics-right">
                    <span className="analytics-title">ANALYTICS</span>
                    <h3 className="analytics-heading">See Where Your Money Goes</h3>
                    <p className="analytics-subtitle">Understand your spending with clear charts, trends, and category breakdowns.</p>
                    <div className="analytics-content">
                        {
                            analyticsData && analyticsData.map((el,id) => (
                                <div key={id}>
                                    <span>{el.icon}</span>
                                    <p>{el.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}