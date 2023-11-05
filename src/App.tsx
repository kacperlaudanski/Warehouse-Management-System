import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthContextProvider, AuthContext } from "./context/auth-context";
import { useContext } from "react";
import Main from "./pages/Main";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";

function App() {
  const { currentUser } = useContext(AuthContext);
  const RequireAuth = ({children}: any) => {
    return currentUser ? children : <Navigate to={"/login"} />;
  };
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
