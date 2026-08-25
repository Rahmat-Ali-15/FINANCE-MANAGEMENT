import { Route, Routes } from "react-router-dom"
import { PublicLayout } from "../../layout/PublicLayout/PublicLayout"
import { SignUp } from "../../components/Register/SignUp"
import { Login } from "../../pages/Login/Login"

export const PublicRoute = () => {
    return(
        <Routes>
            {/* <Route path="/signup" element={<SignUp />}></Route> */}
            <Route element={<PublicLayout />}>
                <Route path="/" element={null} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    )
}