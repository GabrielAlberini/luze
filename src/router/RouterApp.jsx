import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddCarpet from "../pages/AddCarpet";
import AdminDashboard from "../pages/AdminDashboard";
import EditCarpet from "../pages/EditCarpet";

function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add" element={<AddCarpet />} />
        <Route path="/admin/edit/:id" element={<EditCarpet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;