import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  padding: 2rem 1.5rem;
  background-color: #080a18;
  border-right: 2px solid #222;
  position: fixed;
  top: 0;
  width: 305px;
  height: 100%;
  font-size: 1.2rem;
  z-index: 999;
  user-select: none;

  @media (max-width: 1200px) {
    width: 100%;
    position: ${({ setClick }) => (setClick ? "fixed" : "sticky")};
    height: 10vh;
    border-right: none;
    border-bottom: 2px solid #222;
  }

  h3 {
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: uppercase;
    opacity: 0.6;

    @media (max-width: 1200px) {
      font-size: 16px;
      padding: 0.6rem 0rem;
    }
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;

  @media (max-width: 1200px) {
    flex-direction: row;
    align-items: center;
  }

  @media (max-width: 1200px) {
    gap: 1.5rem;
  }

  @media (min-width: 1201px) {
    gap: 0.5rem;
  }
`;

export const NavLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  z-index: 777;

  .logo {
    color: #e50914;
  }

  @media (max-width: 1200px) {
    font-size: 1.5rem;
    margin-bottom: 0;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 1200px) {
    display: flex;
    position: sticky;
    right: 24px;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 999;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 1rem 0rem;
  gap: 1rem;

  hr {
    width: 100%;
    border: 1px solid #222;

    .hr-style {
      padding: 1rem 0rem;
    }

    @media (max-width: 1200px) {
      display: none;
    }
  }

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    width: 70%;
    height: 100%;
    padding: 0 30px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    transition: all 0.5s ease;
    background: #080a18;
    z-index: 1;
    gap: 0.2rem;
    top: 0;
  }
`;

export const NavItem = styled.li`
  @media (max-width: 1200px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }

  .nav-items {
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 17px;
    text-decoration: none;
    gap: 0.7rem;
    border-radius: 10px;
    transition: all 0.2s linear;
    height: 100%;

    &:hover {
      background-color: rgba(229, 9, 20, 0.1);
    }

    @media (max-width: 1200px) {
      display: flex;
      flex: 1;
      width: 100%;
      padding: 1rem 0.3rem;

      &:hover {
        background-color: transparent;
      }
    }

    @media (min-width: 1201px) {
      padding: 0.1rem 1rem;
    }

    @media (min-width: 1400px) {
      padding: 0.5rem 1rem;
    }

    @media (min-width: 1600px) {
      padding: 1rem;
    }
  }

  .active:nth-child(1) {
    background-color: #e50914;

    @media (max-width: 1200px) {
      background-color: transparent;
      color: #e50914;
    }
  }
`;

export const PageOpacity = styled.div`
  display: block;
  height: 100vh;
  width: 100%;
  z-index: 998;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 0.5s ease;
`;
