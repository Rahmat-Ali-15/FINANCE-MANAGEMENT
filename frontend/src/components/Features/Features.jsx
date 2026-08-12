import "./Features.css";
import { FeaturesCard } from "./FeaturesCard/FeaturesCard";

export const Features = () => {
    return (
        <>
            <section className="feature-section" id="features">
                <div className="feature-container">
                    <div className="feature-heading">
                        <span>FEATURES</span>
                        <h3>Everything You Need to Manage Your Finances</h3>
                    </div>
                    <div className="feature-card">
                        <FeaturesCard />
                    </div>
                </div>
            </section>
        </>
    )
}