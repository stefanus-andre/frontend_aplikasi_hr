import { Routes, Route } from "react-router-dom";
import Index from ".";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./User/Dashboard/Dashboard";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/dashboard" element={<Dashboard/>}/>
      </Routes>
    </>
  );
}
