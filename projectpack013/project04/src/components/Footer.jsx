import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <p>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
