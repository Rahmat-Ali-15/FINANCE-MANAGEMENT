import { Route, Routes } from "react-router-dom"
import { SignUp } from "../../components/Register/SignUp"
import { PublicLayout } from "../../layout/PublicLayout/PublicLayout"

export const PublicRoute = () => {
    return(
        <Routes>
            {/* <Route path="/signup" element={<SignUp />}></Route> */}
            <Route element={<PublicLayout />}>
                <Route path="/" element={null} />
                <Route path="/signup" element={<SignUp />} />
            </Route>
        </Routes>
    )
}