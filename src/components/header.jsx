import React from "react";
import {
  FaBars,
  FaShoppingCart,
  FaUserCircle,
  FaUser
} from "react-icons/fa";

const Header = ({
  showFilters,
  setShowFilters,
  searchText,
  setSearchText
})  => {
  return (
    <header className="header">

      <div className="header-left">
        <FaBars
          className="menu-icon"
          onClick={() =>
            setShowFilters(!showFilters)
          }
        />
      </div>

      <div className="header-center">
        <input
  type="text"
  placeholder="Search products..."
  className="search-input"
  value={searchText}
  onChange={(e) =>
    setSearchText(e.target.value)
  }
/>
      </div>

      <div className="header-right">
        <FaShoppingCart />
        <FaUserCircle />
        <FaUser />
      </div>

    </header>
  );
};

export default Header;