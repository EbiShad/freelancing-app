import { NavLink } from "react-router-dom";
import Sidebar from "../../Ui/Sidebar";
import AppLayout from "../../Ui/AppLayout";
import { HiCollection, HiHome } from "react-icons/hi";

function FreelancerLayout() {
    const navLinkClass = "flex gap-x-2 hover:bg-primary-200 rounded-lg px-2 py-1.5 items-center transition-all duration-200"
  return (
    <AppLayout>
      <Sidebar>
        <li>
          <NavLink
            to="dashboard"
            className={({ isActive }) =>
              isActive
                ? `${navLinkClass} bg-primary-100 text-primary-900`
                : navLinkClass
            }
          >
            <HiHome />
            <span>خانه</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="projects"
            className={({ isActive }) =>
              isActive
                ? `${navLinkClass} bg-primary-100 text-primary-900`
                : navLinkClass
            }
          >
            <HiCollection />
            <span>پروژه ها</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="proposals"
            className={({ isActive }) =>
              isActive
                ? `${navLinkClass} bg-primary-100 text-primary-900`
                : navLinkClass
            }
          >
            <HiCollection />
            <span>درخواست ها </span>
          </NavLink>
        </li>
      </Sidebar>
    </AppLayout>
  );
}

export default FreelancerLayout;
