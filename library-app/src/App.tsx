import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage/LayoutPage";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/ReduxStore";
import { useEffect } from "react";
import { fetchUser } from "./redux/slices/AuthenticationSlice";

function App() {
  const loggedInUser = useSelector(
    (state: RootState) => state.authentication.loggedInUser
  );
  console.log(loggedInUser);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    console.log(userId)
    if (userId && !loggedInUser) {
      dispatch(
        fetchUser({
          userId: userId,
          property: "loggedInUser",
        })
      );
    }
  }, [loggedInUser, dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/resource/:barcode" element={"ResourcePage"} />
          <Route path="/profile/:userId" element={"ProfilePage"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
