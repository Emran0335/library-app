import React from "react";

export const CatalogSearch: React.FC = () => {
  return (
    <div className="catalog-search">
      <div className="catalog-search-advanced-search-section">
        CatalogAdvancedSearch
      </div>
      <>
        <h2>
          Displaying {"total books"} books out of {"all books"}
        </h2>
        <div className="catalog-search-item-area">BookCard</div>
        <div className="catalog-search-pages">CatalogSearchPageNavigator</div>
      </>
    </div>
  );
};
