import React from "react";
import { Book } from "../../../../models/Book";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/ReduxStore";

import "./CatalogOverViewSection.css";
import { useNavigate } from "react-router-dom";
interface CatalogOverViewSectionProps {
  books: Book[];
  label: string;
}

const CatalogOverViewSection: React.FC<CatalogOverViewSectionProps> = ({
  books,
  label,
}) => {
  const bookState = useSelector((state: RootState) => state.book);
  console.log(bookState);

  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`catalog?genre=${label}&subjects=${label}`);
  };
  return (
    <div className="catalog-overview-section">
      <div className="catalog-overview-section-top">
        <h4>{label}</h4>
        <p className="catalog-overview-section-more" onClick={handleViewMore}>
          View More...
        </p>
      </div>
      {books.length > 0 && !bookState.loading && <BookCarousel books={books} />}
    </div>
  );
};

export default CatalogOverViewSection;
