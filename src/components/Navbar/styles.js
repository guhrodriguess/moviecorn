import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.aside`
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

  @media (max-width: 960px) {
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

    @media (max-width: 960px) {
      :nth-child(1) {
        margin-top: 60px;
      }
      font-size: 16px;
      padding: 0.6rem 0rem;
      margin-left: 25px;
    }
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;

  @media (max-width: 960px) {
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

  @media (max-width: 960px) {
    font-size: 1.5rem;
    margin-bottom: 0;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 960px) {
    display: flex;
    position: sticky;
    right: 24px;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 1rem 0rem;
  gap: 1rem;

  @media (max-width: 960px) {
    gap: 0.2rem;
    top: 0;
  }

  .hr-style {
    padding: 1rem 0rem;

    hr {
      width: 100%;
      border: 1px solid #222;
    }

    @media (max-width: 960px) {
      display: none;
    }
  }

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    position: fixed;
    left: ${({ click }) => (click ? 0 : "-100%")};
    transition: all 0.5s ease;
    background: rgba(8, 10, 24, 0.85);
    backdrop-filter: blur(5px);
    z-index: -1;
  }
`;

export const NavItem = styled.li`
  @media (max-width: 960px) {
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
    padding: 1rem;
    text-decoration: none;
    gap: 0.7rem;
    border-radius: 10px;
    transition: all 0.2s linear;
    height: 100%;

    &:hover {
      background-color: rgba(229, 9, 20, 0.1);
    }

    @media (max-width: 960px) {
      display: flex;
      margin-left: 10px;
      width: 100%;
    }
  }

  .active:nth-child(1) {
    background-color: #e50914;

    @media (max-width: 960px) {
      background-color: transparent;
    }
  }
`;
