import { BrowserRouter } from "react-router-dom";
import { PublicRoute } from "./routes/PublicRoutes/PublicRoute";
import { MainRoutes } from "./routes/MainRoutes/MainRoutes";

export const App = () => {
  return (
    <BrowserRouter>
      <PublicRoute />
      <MainRoutes />
    </BrowserRouter>
  );
};
