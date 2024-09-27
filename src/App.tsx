import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import DynamicRouteMiddleware from "./middleware/RouteMiddleware";
import Login from "./pages/Auth/Login";
import routesConfig from "./config/RoutesConfig";

function App() {
  const userRole: string = "admin";
  return (
    <>
      <MantineProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            element={
              <DynamicRouteMiddleware
                userRole={userRole}
                routes={routesConfig}
              />
            }
          >
            {routesConfig
              .filter((route:any) => route.role === userRole)
              .map((route:any, index:number) => (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
          </Route>
        </Routes>
      </MantineProvider>
    </>
  );
}

export default App;
