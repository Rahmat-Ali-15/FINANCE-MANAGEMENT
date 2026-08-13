import "./Security.css";

import { CiLock } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { BsShieldLock } from "react-icons/bs";

export const Security = () => {

    const cardData = [
        {
            icon: <CiLock />,
            title: "Secure Authentication",
            desc: "Protect your account with secure authentication and protected sessions."
        },
        {
            icon: <BsShieldLock />,
            title: "Private Financial Data",
            desc: "Your financial records are kept private and accessible only through your account."
        },
        {
            icon: <CiClock2 />,
            title: "Protected Account Access",
            desc: "Authenticated access helps keep your financial records protected."
        },
    ]

    return (
        <>
            <section className="security-section">
                <div className="security-header">
                    <span>SECURITY</span>
                    <h3>Your Financial Data Stays Private</h3>
                </div>
                <div className="security-card-container">
                    {
                        cardData && cardData.map((el, id) => (
                            <div key={id} className="security-card">
                                <div>{el.icon}</div>
                                <p>{el.title}</p>
                                <span>{el.desc}</span>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}