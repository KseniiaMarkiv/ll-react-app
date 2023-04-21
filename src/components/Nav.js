import { Link, Routes, Route } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';
import { useState } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  
  return (
    <nav className="Navbar">
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <Hamburger toggled={isOpen} />
      </div>
      <ul className={`menu ${isOpen ? "menu-open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/#about" onClick={handleClick('about')}>About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/#specials" onClick={handleClick('specials')}>Order Online</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
