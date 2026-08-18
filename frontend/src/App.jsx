import { BrowserRouter } from "react-router-dom";
// import { PublicLayout } from "./layout/PublicLayout/PublicLayout";
import { PublicRoute } from "./routes/PublicRoutes/PublicRoute";

export const App = () => {
  return (
    <BrowserRouter>
      <PublicRoute />
      {/* <PublicLayout /> */}
    </BrowserRouter>
  );
};
