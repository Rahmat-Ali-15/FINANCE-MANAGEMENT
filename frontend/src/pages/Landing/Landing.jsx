import { Analytics } from "../../components/Analytics/Analytics";
import { Benifit } from "../../components/Benifits/Benifit";
import { Budgets } from "../../components/Budget/Budget";
import { Features } from "../../components/Features/Features";
import { Goals } from "../../components/Goals/Goals";
import { Process } from "../../components/Process/Process";
import { PublicHero } from "../../components/PublicHero/PublicHero";
import "./Landing.css";

export const Landing = () => {
    return (
        <>

            <section className="landing-section">
                <PublicHero />

                <Benifit />

                <Features />

                <Analytics />

                <Budgets />

                <Goals />

                <Process />

            </section>
        </>
    )
}