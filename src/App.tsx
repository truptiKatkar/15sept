import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";

function App() {
  // const userRole: string = "user";
  return (
    <>
      <MantineProvider>
        <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/user/*" element={<UserRoutes />} />
          {/* {userRole === "admin" && (
            <Route path="/admin/*" element={<AdminRoutes />} />
          )}
          {userRole === "user" && (
            <Route path="/user/*" element={<UserRoutes />} />
          )} */}
        </Routes>
      </MantineProvider>
    </>
  );
}

export default App;
