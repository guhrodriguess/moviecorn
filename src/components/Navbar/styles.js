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
    height: 12vh;
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
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  font-weight: bold;

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

  .hr-style {
    padding: 1rem 0rem;

    hr {
      width: 100%;
      border: 1px solid #222;
    }

    @media (max-width: 1200px) {
      display: none;
    }
  }

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    position: fixed;
    width: 100%;
    height: 100%;
    left: ${({ click }) => (click ? 0 : "-100%")};
    transition: all 0.5s ease;
    background: rgba(8, 10, 24, 0.85);
    backdrop-filter: blur(5px);
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
      justify-content: center;
      width: 100%;
      padding: 1rem;

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
