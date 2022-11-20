import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, Register } from "./pages";
import {
  AddJob,
  AllJobs,
  Stats,
  Profile,
  SharedLayout,
  PriorityJobs
} from "./pages/dashboard";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="profile" element={<Profile />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="priority-jobs" element={<PriorityJobs/>} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
