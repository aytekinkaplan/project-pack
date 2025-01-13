import PropTypes from "prop-types";
import "./Footer.css"; // CSS dosyasını dahil ettik

const Footer = ({ title }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-title">{title}</p>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Footer;
