import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/ReduxStore";
import { useEffect, useState } from "react";
import { fetchAllBooks } from "../../../../redux/slices/BookSlice";
import { generateRandomGenres } from "../../utils/generateRandomGenres";
import { getRandomBookByGenre } from "../../utils/CatalogUtils";
import CatalogOverViewSection from "../CatalogOverViewSection/CatalogOverViewSection";

export const CatalogOverView: React.FC = () => {
  const bookState = useSelector((state: RootState) => state.book);
  const dispatch = useDispatch();

  const [genres, setGenres] = useState<string[]>(() => {
    return generateRandomGenres();
  });
  console.log(bookState);

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, [dispatch]);
  return (
    <>
      {bookState.books.length > 0 && !bookState.loading ? (
        <div className="catalog-overview">
          <h2>
            Welcome to our library, we currently have{" "}
            {bookState.books && bookState.books.length} book
          </h2>
          <h4>
            Browse our selected books below, or search for something using the
            top navigation bar
          </h4>
          {genres.map((genre)=> {
            return (
              <CatalogOverViewSection key={genre} books={getRandomBookByGenre(genre, bookState.books)} label={genre} />
            )
          })}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
