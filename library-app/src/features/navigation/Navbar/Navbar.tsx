import { Book, Search } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { GrCatalog } from "react-icons/gr";

import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/ReduxStore";
import { setDisplayLogin } from "../../../redux/slices/ModalSlice";
import { useRef } from "react";

export const Navbar: React.FC = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  
  const authSate = useSelector((state: RootState) => state.authentication);

  console.log(authSate.loggedInUser);

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToProfile = () => {
    if (authSate.loggedInUser) {
      navigate(`/profile/${authSate.loggedInUser._id}`);
    }
  };

  const toggleLogin = () => {
    dispatch(setDisplayLogin(true));
  };

  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === "Enter" &&
      searchRef &&
      searchRef.current &&
      searchRef.current.value.length > 0
    ) {
      navigate(
        `/catalog?barcode=${searchRef.current.value}&title=${searchRef.current.value}&description=${searchRef.current.value}`
      );
      searchRef.current.value = "";
    }
  };

  const handleSearchIconClicked = () => {
    if (searchRef && searchRef.current && searchRef.current.value.length > 0) {
      navigate(
        `/catalog?barcode=${searchRef.current.value}&title=${searchRef.current.value}&description=${searchRef.current.value}`
      );
      searchRef.current.value = "";
    }
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
        <div className="navbar-search-box" onKeyDown={handleEnterKey}>
          <input
            type="text"
            className="navbar-search-input"
            placeholder="search catalog"
            ref={searchRef}
          />
          <Search
            onClick={handleSearchIconClicked}
            sx={{ cursor: "pointer", fontSize: "2rem" }}
          />
        </div>
        {authSate.loggedInUser ? (
          <div
            className="navbar-option navbar-user-account"
            onClick={navigateToProfile}
          >
            <h2>{authSate.loggedInUser.firstName}'s Account</h2>
          </div>
        ) : (
          <div className="navbar-option" onClick={toggleLogin}>
            <h2>Login</h2>
          </div>
        )}
      </div>
    </nav>
  );
};
