function Navbar({ setActiveMenu }) {
  return (
    <nav className="navbar">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
        alt="logo"
        className="logo"
      />

      <div className="nav-links">
        <span>END OF SEASON SALE</span>

        <span onMouseEnter={() => setActiveMenu("men")}>
          MEN
        </span>

        <span onMouseEnter={() => setActiveMenu("women")}>
          WOMEN
        </span>

        <span onMouseEnter={() => setActiveMenu("kids")}>
          KIDS
        </span>
      </div>

      <div className="nav-right">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search"
          />
          <span>🔍</span>
        </div>

        <span>👤</span>
        <span>♡</span>
        <span>🛍</span>
      </div>
    </nav>
  );
}

export default Navbar;