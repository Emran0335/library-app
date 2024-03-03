import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage/LayoutPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={"CatalogPage"} />
          <Route path="/resource/:barcode" element={"ResourcePage"} />
          <Route path="/profile/:userId" element={"ProfilePage"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
