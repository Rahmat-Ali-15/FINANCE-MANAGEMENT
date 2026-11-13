import "./Sidebar.css";

import { NavLink } from 'react-router-dom';

import { MdDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { SiSimpleanalytics } from "react-icons/si";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { SiActualbudget } from "react-icons/si";
import { IoNotifications } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";


export const Sidebar = () => {

    return (
        <>
            <div className="sidebar-container">
                <div className="sidebar-main-menu-container">
                    <p>Main Menu</p>
                    <div>
                        <div>
                            <MdDashboard />
                            <NavLink to="dashboard">Dashboard</NavLink>
                        </div>
                        <div>
                            <GrTransaction />
                            <NavLink to="/transaction">Transaction</NavLink>
                        </div>
                        <div>
                            <SiSimpleanalytics />
                            <NavLink to="/analytics">Analytics</NavLink>
                        </div>
                        <div>
                            <MdOutlineCalendarMonth />
                            <NavLink to="/monthly/report">Monthly Reports</NavLink>
                        </div>
                        <div>
                            <BiCategory />
                            <NavLink to="/categories">Categories</NavLink>
                        </div>
                        <div>
                            <SiActualbudget />
                            <NavLink to="/budgets">Budgets</NavLink>
                        </div>
                    </div>
                </div>
                <div className="sidebar-account-container">
                    <p>Account</p>
                    <div>
                        <div>
                            <IoNotifications />
                            <NavLink to="/notification">Notification</NavLink>
                        </div>
                        <div>
                            <IoSettings />
                            <NavLink to="/settings">Settings</NavLink>
                        </div>
                        <div>
                            <FaRegUser />
                            <NavLink to="/profile">Profile</NavLink>
                        </div>
                    </div>
                </div>

                <div className="sidebar-avatar-container">
                    <div>
                        <div className="sidebar-avatart"></div>
                        <div className="avatar-details">
                            <p>name</p>
                            <span>email</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}