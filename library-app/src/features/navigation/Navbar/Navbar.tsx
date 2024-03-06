import { Book, Search } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { GrCatalog } from "react-icons/gr";

import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/ReduxStore";
import { setDisplayLogin } from "../../../redux/slices/ModalSlice";

export const Navbar: React.FC = () => {
  const authSate = useSelector((state: RootState) => state.authentication);
  const authModal = useSelector((state:RootState)=> state.modal)
  console.log(authModal)
  console.log(authSate.loggedInUser);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToProfile = () => {
    if (authSate.loggedInUser) {
      navigate(`/profile/${authSate.loggedInUser._id}`);
    }
  };

  const toggleLoginRegister = () => {
    dispatch(setDisplayLogin(true));
  };
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo-section">
        <Book sx={{ fontSize: "3rem" }} />
        <h1>My Libary</h1>
      </Link>
      <div className="navbar-option-section">
        <Link to="/catalog" className="navbar-link">
          <h2 className="navbar-option">View Catalog</h2>
          <GrCatalog className="catalog-icon" />
        </Link>
        <div className="navbar-search-box">
          <input
            type="text"
            className="navbar-search-input"
            placeholder="search catalog"
          />
          <Search sx={{ cursor: "pointer", fontSize: "2rem" }} />
        </div>
        {authSate.loggedInUser ? (
          <div
            className="navbar-option navbar-user-account"
            onClick={navigateToProfile}
          >
            <h2>{authSate.loggedInUser.firstName}'s Account</h2>
          </div>
        ) : (
          <div className="navbar-option" onClick={toggleLoginRegister}>
            <h2>Login</h2>
          </div>
        )}
      </div>
    </nav>
  );
};
