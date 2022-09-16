import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../features/users/userSlice";

const LoginRow = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    localStorage.removeItem("persist:sampleshop");
    navigate("/products");
  };

  return (
    <div className="loginRow">
      <div className="loginRow_container">
        {!isLogin ? (
          <Button type="text" size="small">
            <Link to="/login">로그인</Link>
          </Button>
        ) : (
          <Button type="text" size="small" onClick={onLogout}>
            로그아웃
          </Button>
        )}
        {isLogin && (
          <Button type="text" size="small">
            <Link to="/mypage">마이페이지</Link>
          </Button>
        )}
        <Button type="text" size="small">
          <Link to="/cart">장바구니</Link>
        </Button>
      </div>
    </div>
  );
};

export default LoginRow;
