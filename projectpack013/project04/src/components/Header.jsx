import "./Header.css";

const links = [
  { id: 1, name: "Home" },
  { id: 2, name: "About" },
  { id: 3, name: "Contact" },
  { id: 4, name: "Portfolio" },
  { id: 5, name: "Blog" },
];

const Header = () => {
  return (
    <div className="header">
      {links.map((link) => (
        <a key={link.id} href={`#${link.name}`}>
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default Header;
