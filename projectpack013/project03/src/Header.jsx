import PropTypes from "prop-types";
import "./Header.css"; // CSS dosyasını dahil ettik

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
