import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h2 className="primary-color">Notes App</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/createNote" className="ml-3">
          New Note
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
