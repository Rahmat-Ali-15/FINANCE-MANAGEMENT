import { Outlet } from "react-router-dom"
import { PublicNavbar } from "../../components/Navbar/PublicNavbar/PublicNavbar"
import { Landing } from "../../pages/Landing/Landing"
import { Footer } from "../../components/Footer/Footer"

export const PublicLayout = () => {
    return (
        <>  
            <PublicNavbar />
            <main>
                <Landing />
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}