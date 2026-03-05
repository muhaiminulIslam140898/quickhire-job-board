import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import MainLayout from "./layouts/MainLayout";
import Admin from "./pages/Admin";
import ApplyJob from "./pages/ApplyJob";
import Applications from "./pages/Applications";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/apply/:id" element={<ApplyJob />} />
        <Route path="/applications/:jobId" element={<Applications />} />
      </Routes>
    </MainLayout>
  );
}

export default App;