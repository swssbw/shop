import React from "react";
import LoginRow from "./_LoginRow";
import SearchRow from "./_SearchRow";
import TotalProductsRow from "./_TotalProductsRow";

const Navbar = () => {
  return (
    <>
      <LoginRow />
      <SearchRow />
      <TotalProductsRow />
    </>
  );
};

export default Navbar;
