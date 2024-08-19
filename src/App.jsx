import { Route, Routes } from "react-router-dom";
import Auth from "./Pages/auth";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import CompletePrifile from "./Pages/CompletePrifile";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import OwnerDashboard from "./Pages/OwnerDashboard";
import Projects from "./Pages/Projects";
import Project from "./Pages/Project";
import { DarkModeProvider } from "./Features/Context/DarkModeProvider";
import OwnerLayout from "./Features/Owner/OwnerLayout";
import FreelancerLayout from "./Features/Freelancer/FreelancerLayout";
import FrreelancerDashboard from "./Pages/FrreelancerDashboard";
import Proposals from "./Pages/Proposals";
import SubmitedProjects from "./Pages/SubmitedProjects";
import ProtectedRout from "./Ui/ProtectedRout";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <Toaster />
        <div className="w-full">
          <Routes>
            <Route path="/owner" element={<ProtectedRout><OwnerLayout /></ProtectedRout>}>
              <Route path="dashboard" element={<OwnerDashboard />}></Route>
              {/* <Route index element={<Navigate to="dashboard" replace/>}> </Route> */}
              <Route path="projects" element={<Projects />}></Route>
              <Route path="projects/:id" element={<Project />}></Route>
            </Route>

            <Route path="/freelancer" element={<ProtectedRout><FreelancerLayout /></ProtectedRout>}>
              <Route path="dashboard" element={<FrreelancerDashboard />}> </Route>
              <Route path="proposals" element={<Proposals />}> </Route>
              <Route path="projects" element={<SubmitedProjects />}> </Route>
            </Route>

            <Route path="/auth" element={<Auth />}></Route>

            <Route
              path="/complete-profile"
              element={<CompletePrifile />}
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
