import { Route, Routes } from "react-router-dom";

import { Home } from "../../pages/Home/Home";
import { MainLayout } from "../../layout/MainLayout/MainLayout";

export const MainRoutes = () => {
    return(
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/home" element={<Home />}></Route>
            </Route>
        </Routes>
    )
}