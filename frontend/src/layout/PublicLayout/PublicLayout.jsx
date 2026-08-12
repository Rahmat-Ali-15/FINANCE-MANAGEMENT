import { Outlet } from "react-router-dom"
import { PublicNavbar } from "../../components/Navbar/PublicNavbar/PublicNavbar"
import { Landing } from "../../pages/Landing/Landing"

export const PublicLayout = () => {
    return (
        <>  
            <PublicNavbar />
            <main>
                <Landing />
                <Outlet />
            </main>
        </>
    )
}