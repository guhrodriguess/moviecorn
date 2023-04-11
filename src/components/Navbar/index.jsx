import React, { useState } from "react";

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

  const handleCloseMenu = () => {
    setClick(false);
    document.body.style.overflow = "scroll";
  };

  const handleMenu = () => {
    setClick(!click);
    if (!click) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={handleCloseMenu}>
            <span>Movie</span>
            <span className="logo">Corn</span>
          </NavLogo>
          <MobileIcon onClick={handleMenu}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleCloseMenu} click={click}>
            <h3>Página inicial</h3>
            <NavItem>
              <NavLink to="/" onClick={handleCloseMenu} className="nav-items">
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
                onClick={handleCloseMenu}
                className="nav-items"
              >
                <BiRocket size={20} />
                Lançamentos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/movies/popular"
                onClick={handleCloseMenu}
                className="nav-items"
              >
                <MdOutlineLocalMovies size={20} />
                Populares
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/movies/top"
                onClick={handleCloseMenu}
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
                onClick={handleCloseMenu}
                className="nav-items"
              >
                <BiRocket size={20} />
                Lançamentos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/series/popular"
                onClick={handleCloseMenu}
                className="nav-items"
              >
                <MdOutlineLocalMovies size={20} />
                Populares
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/series/top"
                onClick={handleCloseMenu}
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
