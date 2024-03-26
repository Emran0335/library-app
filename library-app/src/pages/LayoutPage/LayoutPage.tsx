import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { Footer, Navbar } from "../../features/navigation/index";
import { RootState } from "../../redux/ReduxStore";

import "./LayoutPage.css";
import { LoginRegisterModal } from "../../features/auth";
import { LibraryCardModal } from "../../features/auth/components/Modals/LibraryCardModal/LibraryCardModal";

export default function LayoutPage() {
  const modalState = useSelector((state: RootState) => state.modal);
  console.log(modalState);
  return (
    <div className="layout-page">
      {modalState.displayLogin && <LoginRegisterModal />}
      {modalState.displayLibraryCard && <LibraryCardModal />}
      {/* {modalState.displayLoan && <LoanBookModal />} */}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
