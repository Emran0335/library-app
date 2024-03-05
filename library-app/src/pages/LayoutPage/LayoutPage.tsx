import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../../features/navigation/index";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/ReduxStore";
import { LoginRegisterModal } from "../../features/auth/index";

import './LayoutPage.css'

export default function LayoutPage() {
  const modalState = useSelector((state:RootState)=> state.modal);
  console.log(modalState)
  return (
    <div className="layout-page">
      {modalState.displayLogin && <LoginRegisterModal />}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
