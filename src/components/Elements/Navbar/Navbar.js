import React from "react";
import LoginRow from "./_LoginRow";
import SearchRow from "./_SearchRow";
import CategoryRow from "./_CategoryRow";

const Navbar = () => {
  return (
    <>
      <LoginRow />
      <SearchRow />
      <CategoryRow />
    </>
  );
};

export default Navbar;
