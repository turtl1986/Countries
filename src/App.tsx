import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Countries } from "./pages/Countries";
import { MainLayout } from "./pages/MainLayout";
import { Login } from "./pages/Login/Login";
import { Erorr } from "./pages/Errors";
import { PrivateRouter } from "./pages/PrivareRoute";
import { Country } from "./pages/Country/Country";


export function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRouter />}>
            <Route path="/countries" element={<Countries />} />
            <Route path="/countries/:name" element={<Country />} />
          </Route>

        </Route>
        <Route path="*" element={<Erorr />} />
      </Routes>
    </>
  );
}
