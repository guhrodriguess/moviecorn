import React, { useState, useEffect } from "react";

// Icons
import { FaBars, FaTimes } from "react-icons/fa";
import { BiRocket } from "react-icons/bi";
import { AiOutlineHome, AiFillStar } from "react-icons/ai";
import { MdOutlineLocalMovies } from "react-icons/md";

// Styles
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
} from "./styles";

// React Router
import { NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={closeMobileMenu}>
            <span>Movie</span>
            <span className="logo">Corn</span>
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <h3>Página inicial</h3>
            <NavItem>
              <NavLink to="/" onClick={closeMobileMenu} className="nav-items">
                <AiOutlineHome size={20} />
                Início
              </NavLink>
            </NavItem>
            <div className="hr-style">
              <hr />
            </div>
            <h3>Filmes</h3>
            <NavItem>
              <NavLink
                to="/movies/releases"
                onClick={closeMobileMenu}
                className="nav-items"
              >
                <BiRocket size={20} />
                Lançamentos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/movies/popular"
                onClick={closeMobileMenu}
                className="nav-items"
              >
                <MdOutlineLocalMovies size={20} />
                Populares
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/movies/top"
                onClick={closeMobileMenu}
                className="nav-items"
              >
                <AiFillStar size={20} />
                Rankeados
              </NavLink>
            </NavItem>
            <div className="hr-style">
              <hr />
            </div>
            <h3>Séries</h3>
            <NavItem>
              <NavLink
                to="/series/releases"
                onClick={closeMobileMenu}
                className="nav-items"
              >
                <BiRocket size={20} />
                Lançamentos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/series/popular"
                onClick={closeMobileMenu}
                className="nav-items"
              >
                <MdOutlineLocalMovies size={20} />
                Populares
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/series/top"
                onClick={closeMobileMenu}
                className="nav-items"
              >
                <AiFillStar size={20} />
                Rankeados
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;