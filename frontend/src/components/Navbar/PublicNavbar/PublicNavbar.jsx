import "./PublicNavbar.css";

import { MdOutlineShowChart } from "react-icons/md";

export const PublicNavbar = () => {

    return (
        <>
            <nav className="publicNavabar">
                <div className="publicNavbar-container">
                    {/* Logo */}
                    <a href="/" className="publicNavbar-logo-container">
                        <div className="publicNavbar-logo">
                            <MdOutlineShowChart />
                        </div>
                        <span className="publicNavbar-name">ExpenseFlow</span>
                    </a>
                    

                    {/* Navigation */}
                    <div className="publicNavbar-menu">
                        <ul>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#analytics">Analytics</a></li>
                            <li><a href="#budgets">Budgets</a></li>
                            <li><a href="#goals">Goals</a></li>
                        </ul>
                    </div>

                    {/* Actions */}
                    <div className="publicnavbar-action">
                        <a href="/login" className="publicNavbar-login">Log In</a>
                        <button className="publicNavbar__cta">Get Started Free</button>
                    </div>
                </div>
            </nav>
        </>
    )
}