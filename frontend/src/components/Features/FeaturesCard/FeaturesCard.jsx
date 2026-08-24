import "./FeaturesCard.css";


import { MdOutlineShowChart } from "react-icons/md";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { MdAccessTime } from "react-icons/md";
import { LuChartColumnBig } from "react-icons/lu";
import { CiCircleAlert } from "react-icons/ci";
import { TransactionContent } from "../TransactionContent/TransactionContent";
import { BudgetPreview } from "../BudgetContent/BudgetPreview";
import { AnalyticsChart } from "../../Charts/AnalyticsChart/AnalyticsChart";

export const FeaturesCard = () => {

    const data = [
        {
            icon: <RiBarChartHorizontalLine />,
            title: "Smart Expense Tracking",
            description: "Record and organize every income and expense in seconds.",
            content: <TransactionContent />
        },
        {
            icon: <HiOutlineChartSquareBar />,
            title: "Budget Management",
            description: "Set category budgets and know exactly how much you have left.",
            content: <BudgetPreview />
        },
        {
            icon: <MdOutlineShowChart />,
            title: "Financial Analytics",
            description: "Understand where your money goes with clear visual reports.",
            content: <AnalyticsChart />
        },
        {
            icon: <MdAccessTime />,
            title: "Savings Goals",
            description: "Set financial goals and track your progress over time."
        },
        {
            icon: <LuChartColumnBig />,
            title: "Multiple Accounts",
            description: "Manage your bank accounts, cash, wallets, and cards in one place."
        },
        {
            icon: <CiCircleAlert />,
            title: "Financial Insights",
            description: "Discover spending patterns and meaningful changes in your finances."
        },
        
    ]

    return (
        <>
            <section className="featureCard-section">
                {
                    data && data.map((el, id) => (
                        <div className="featureCard-content" key={id}>
                            <div>{el.icon}</div>
                            <div>
                                <p>{el.title}</p>
                                <span>{el.description}</span>
                            </div>
                            <div>{el.content}</div>
                        </div>
                    ))
                }
            </section>
        </>
    )
}