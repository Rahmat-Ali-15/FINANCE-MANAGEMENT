import { NavLink } from "react-router-dom";
import { PublicDashboardChart } from "../Charts/PublicDashboardChart/PublicDashboardChart";
import "./PublicHero.css";

export const PublicHero = () => {
    return (
        <>
            <section className="publicHero-section">
                <div className="publicHero-left">
                    <div className="publicHero-badge">
                        <span className="publichero-badge-dot"></span>
                        <span>Personal Finance Management</span>
                    </div>
                    <h3 className="publicHero-title">Take Control <br />of Your Money.</h3>

                    <p className="publicHero-description">Track your spending, stay on budget, and build <br /> toward your financial goals — all in one simple <br /> dashboard.</p>

                    <div className="publicHero-actions">
                        <NavLink to="/signup" className="publicHero-btn publichero-btn-primary">
                            Get Started Free
                        </NavLink>
                        <span id="features" className="publicHero-btn publicHero-btn-secondary">Explore Features</span>
                    </div>
                    <p className="publicHero-caption">Track spending. Stay on budget. Reach your goals.</p>
                </div>
                <div className="publicHero-right">
                    <PublicDashboardChart />
                </div>
            </section>
        </>
    )
}