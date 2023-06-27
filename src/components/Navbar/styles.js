import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  background-color: ${(props) => props.theme.background};
  border-right: 2px solid ${(props) => props.theme.hr};
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
    border-bottom: 2px solid ${(props) => props.theme.hr};
  }

  h3 {
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: uppercase;
    opacity: 0.6;

    @media (max-width: 1200px) {
      font-size: 16px;
      margin-top: 0.5rem;
    }
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  height: 100%;
  flex: 1;

  @media (max-width: 1200px) {
    gap: 1.5rem;
    padding: 0rem 1.5rem;
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 1201px) {
    gap: 0.5rem;
  }
`;

export const NavLogo = styled(Link)`
  color: ${(props) => props.theme.text};
  cursor: pointer;
  text-decoration: none;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  z-index: 777;

  .logo {
    color: ${(props) => props.theme.primary};
  }

  @media (max-width: 1200px) {
    font-size: 1.5rem;
    margin-bottom: 0;
  }
`;

export const MobileIcon = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${(props) => props.theme.text};
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:active {
    transform: scale(0.8);
  }

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
    border: 1px solid ${(props) => props.theme.hr};

    .hr-style {
      padding: 1rem 0rem;
    }
  }

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 70%;
    height: 100vh;
    padding: 10px 25px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    transition: all 0.5s ease;
    background: ${(props) => props.theme.background};
    z-index: 1;
    gap: 0.5rem;
    top: 10vh;
    overflow: auto;
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
    color: ${(props) => props.theme.text};
    display: flex;
    align-items: center;
    font-size: 17px;
    text-decoration: none;
    gap: 0.7rem;
    border-radius: 10px;
    transition: all 0.2s linear;
    height: 100%;

    &:hover {
      background-color: ${(props) => props.theme.primaryHover};
    }

    @media (max-width: 1200px) {
      display: flex;
      flex: 1;
      width: 100%;
      padding: 0.8rem 0.4rem;

      &:hover {
        background-color: transparent;
      }
    }

    @media (min-width: 1201px) {
      padding: 0.4rem 1rem;
    }

    @media (min-width: 1400px) {
      padding: 1rem;
    }
  }

  .active:nth-child(1) {
    background-color: ${(props) => props.theme.primary};

    @media (max-width: 1200px) {
      background-color: transparent;
      color: ${(props) => props.theme.primary};
    }
  }
`;

export const PageOpacity = styled.div`
  display: block;
  height: 100vh;
  width: 100%;
  z-index: 998;
  position: fixed;
  background-color: ${(props) => props.theme.blackOpacity};
  transition: all 0.5s ease;
`;
