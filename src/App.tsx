import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthContextProvider, AuthContext } from "./context/auth-context";
import { useContext } from "react";
import Main from "./pages/Main";
import Dashboard from "./pages/Dashboard";
import OrdersPreview from "./pages/OrdersPreview";
import { SidebarContextProvider } from "./context/sidebar-context";
import Suppliers from "./pages/Suppliers";
import Returns from "./pages/Returns";
import Deliveries from "./pages/Deliveries";
import OrdersHistory from "./pages/OrdersHistory";
import WarehousePreview from "./pages/WarehousePreview";
import WarehouseStockLevel from "./pages/WarehouseStockLevel";
import WarehousePendingArea from "./pages/WarehousePendingArea";
import {NextUIProvider} from "@nextui-org/react";

function App() {
  const { currentUser } = useContext(AuthContext);
  const RequireAuth = ({ children }: any) => {
    return currentUser ? children : <Navigate to={"/login"} />;
  };
  return (
    <>
    <NextUIProvider>
    <BrowserRouter>
        <AuthContextProvider>
          <SidebarContextProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/main"
                element={
                  <RequireAuth>
                    <Main />
                  </RequireAuth>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                }
              />
              <Route
                path="/orders/preview"
                element={
                  <RequireAuth>
                    <OrdersPreview />
                  </RequireAuth>
                }
              />
              <Route
                path="/orders/history"
                element={
                  <RequireAuth>
                    <OrdersHistory />
                  </RequireAuth>
                }
              />
              <Route
                path="/warehouse/preview"
                element={
                  <RequireAuth>
                    <WarehousePreview />
                  </RequireAuth>
                }
              />
              <Route
                path="/warehouse/stock-level"
                element={
                  <RequireAuth>
                    <WarehouseStockLevel />
                  </RequireAuth>
                }
              />
              <Route
                path="/warehouse/pending-area"
                element={
                  <RequireAuth>
                    <WarehousePendingArea />
                  </RequireAuth>
                }
              />
              <Route
                path="/returns"
                element={
                  <RequireAuth>
                    <Returns />
                  </RequireAuth>
                }
              />
              <Route
                path="/deliveries"
                element={
                  <RequireAuth>
                    <Deliveries />
                  </RequireAuth>
                }
              />
              <Route
                path="/suppliers"
                element={
                  <RequireAuth>
                    <Suppliers />
                  </RequireAuth>
                }
              />
            </Routes>
          </SidebarContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </NextUIProvider>

    </>
  );
}

export default App;
