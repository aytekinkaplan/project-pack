import "./Header.css";
import PropTypes from "prop-types";
const Header = ({ title = "Default Title" }) => {
  const links = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "About", path: "/about" },
    { id: 3, text: "Contact", path: "/contact" },
    { id: 4, text: "Blog", path: "/blog" },
  ];

  return (
    <header className="header">
      <h1>{title}</h1>
      <nav>
        <ul className="nav-list">
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.path} className="nav-link">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
