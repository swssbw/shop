import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const LoginRow = () => {
  return (
    <div className="loginRow">
      <div className="loginRow_container">
        <Button type="text" size="small">
          <Link to="/login">로그인</Link>
        </Button>
        <Button type="text" size="small">
          <Link to="/mypage">마이페이지</Link>
        </Button>
        <Button type="text" size="small">
          <Link to="/cart">장바구니</Link>
        </Button>
      </div>
    </div>
  );
};

export default LoginRow;
