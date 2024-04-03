import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import SideBar from "../ui/SideBar";
import Footer from "../ui/Footer";

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[23rem_1fr] grid-rows-[auto_1fr_auto]">
      <Header />
      <SideBar />
      <main className="overflow-y-scroll bg-blue-50 pb-[6.4rem] pr-[4.8rem] pt-16">
        <div className="mx-auto my-0 flex max-w-[110rem] flex-col gap-14">
          <Outlet />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default AppLayout;
