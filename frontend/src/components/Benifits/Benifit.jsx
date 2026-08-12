import "./Benifit.css";

import { LuClock4 } from "react-icons/lu";
import { IoLockClosedOutline } from "react-icons/io5";
import { GoArrowUp } from "react-icons/go";

export const Benifit = () => {

    const benifitData = [
        {
            icon: "✓",
            title: "Track Every Expense",
            desc: "Record income and expenses in seconds."
        },
        {
            icon: <LuClock4 />,
            title: "Understand Your Spending",
            desc:  "See exactly where your money goes."
        },
        {
            icon: <IoLockClosedOutline />,
            title: "Stay Within Budget",
            desc: "Set limits and monitor your spending."
        },
        {
            icon: <GoArrowUp />,
            title: "Reach Your Goals",
            desc: "Track progress toward what matters."
        },
    ]

    return(
        <>
            <section className="benifit-section">
                <div className="benifit-container">
                    {
                        benifitData && benifitData.map((el, id) => (
                            <div key={id}>
                                <div>
                                    <span style={{color: "#16a34a"}}>{el.icon}</span>
                                    <p>{el.title}</p>
                                </div>
                                <div>
                                    <span>{el.desc}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}