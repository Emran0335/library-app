import { useLocation } from "react-router-dom";
import { CatalogOverView, CatalogSearch } from "../../features/catalog";

export default function CatalogPage() {
  const location = useLocation();
  console.log(location.search);
  return (
    <div className="page">
      <div className="page-container">
        {location.search === "" ? <CatalogOverView /> : <CatalogSearch />}
      </div>
    </div>
  );
}
