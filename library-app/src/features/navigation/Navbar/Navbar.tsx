import { Book, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { GrCatalog } from "react-icons/gr";

import "./Navbar.css";

export const Navbar: React.FC = () => {
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
        <div className="navbar-option navbar-user-account">
          <h2>user's account</h2>
        </div>
        <div className="navbar-option">
          <h2>Login</h2>
        </div>
      </div>
    </nav>
  );
};
