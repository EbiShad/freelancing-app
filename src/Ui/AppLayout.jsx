import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout({children}) {
  return (
    <div className="h-screen  grid grid-rows-[auto_1fr]  grid-cols-[15rem_1fr]">
      <Header />

      {children}

      <div className="bg-secondary-0 overflow-y-auto p-8">
        <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
