import { Sidebar } from "../../components/MainContent/Sidebar/Sidebar"
import { MainNavbar } from "../../components/Navbar/MainNavbar/MainNavbar"
import "./Home.css"

export const Home = () => {
    return (
        <>
            <section className="home-page-container">
                <Sidebar />
                <MainNavbar />
            </section>
        </>
    )
}