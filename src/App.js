import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./components/Elements/Navbar/Navbar";

import LandingPage from "./components/Pages/LandingPage/LandingPage";
import CartPage from "./components/Pages/CartPage/CartPage";
import LoginPage from "./components/Pages/LoginPage/LoginPage";
import MyPage from "./components/Pages/MyPage/MyPage";
import ProductDetail from "./components/Elements/ProductDetail/ProductDetail";
import SearchPage from "./components/Pages/SearchPage/SearchPage";

function App() {
  return (
    <BrowserRouter basename="/shop">
      <div className="wrapper">
        <Navbar />
        <div className="section">
          <Routes>
            <Route path="/" element={<Navigate to="/products" />} />
            <Route path="/products" element={<LandingPage />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/search/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
