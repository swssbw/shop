import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Elements/Navbar/Navbar";
import Footer from "./components/Elements/Footer/Footer";

import LandingPage from "./components/Pages/LandingPage/LandingPage";
import CartPage from "./components/Pages/CartPage/CartPage";
import LoginPage from "./components/Pages/LoginPage/LoginPage";
import MyPage from "./components/Pages/MyPage/MyPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div style={{ width: "1200px", margin: "0 auto", padding: "8px" }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
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
