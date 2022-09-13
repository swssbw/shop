import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./components/Elements/Navbar/Navbar";
import Footer from "./components/Elements/Footer/Footer";

import LandingPage from "./components/Pages/LandingPage/LandingPage";
import CartPage from "./components/Pages/CartPage/CartPage";
import LoginPage from "./components/Pages/LoginPage/LoginPage";
import MyPage from "./components/Pages/MyPage/MyPage";
import ProductDetail from "./components/Elements/ProductDetail/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "8px" }}>
          <Routes>
            <Route path="/" element={<Navigate to="/products" />} />
            <Route path="/products" element={<LandingPage />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
        </div>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
