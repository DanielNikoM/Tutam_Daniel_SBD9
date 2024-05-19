import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-home">
          <a href="#">Your personal Notes</a>
        </div>
        <div className="navbar-links">
          <a href="#">Profile</a>
          <a href="#">Contact</a>
          <a href="#">Services</a>
          <a href="#">About me</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
