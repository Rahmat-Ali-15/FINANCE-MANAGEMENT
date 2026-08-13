import "./Footer.css";

import { MdOutlineShowChart } from 'react-icons/md';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
    return (
        <>
            <section className="footer-section">
                <div className="footer-top-container">
                    <div className="footer-left"> 
                        <a href="/" className="footer-logo">
                            <div>
                                <MdOutlineShowChart />
                            </div>
                            <span className="footer-logo-name">ExpenseFlow</span>
                        </a>
                        <span>Simple personal finance management.</span>

                        <div className="social-media">
                            <div><FaGithub /></div>
                            <div><FaLinkedin /></div>
                        </div>
                    </div>
                    <div className="footer-right">
                        <ul>
                            <p>PRODUCT</p>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#analytics">Analytics</a></li>
                            <li><a href="#budgets">Budgets</a></li>
                            <li><a href="#goals">Goals</a></li>
                        </ul>
                        <ul>
                            <p>COMPANY</p>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <ul>
                            <p>LEGAL</p>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 ExpenseFlow. All rights reserved.</p>
                    <p>Built for your financial goals.</p>
                </div>
            </section>
        </>
    )
}