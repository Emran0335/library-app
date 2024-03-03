import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../../features/navigation/index";

export default function LayoutPage() {
  return (
    <div className="layout-page">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
