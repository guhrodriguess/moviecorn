import styled from "styled-components";

import { HeaderProps } from "@/types";

export const Header = styled.header`
  display: flex;
  background-color: ${(props) => props.theme.background};
  border-right: 2px solid ${(props) => props.theme.hr};
  position: fixed;
  top: 0;
  width: 305px;
  height: 100%;
  z-index: 999;

  @media (max-width: 1200px) {
    width: 100%;
    position: relative;
    padding: 2rem 0;
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

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 2rem 1rem;
  gap: 0.5rem;

  @media (max-width: 1200px) {
    gap: 1.5rem;
    padding: 0rem 1.5rem;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }
`;

export const MobileIcon = styled.button`
  display: flex;
  justify-content: baseline;
  align-items: baseline;
  background: transparent;
  border: none;
  color: ${(props) => props.theme.text};
  transition: transform 0.2s ease-in-out;

  &:active {
    transform: scale(0.8);
  }

  @media (min-width: 1201px) {
    display: none;
  }
`;

export const NavMenu = styled.ul<HeaderProps>`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 1.5rem 0rem;
  gap: 1rem;
  overflow: auto;
  flex-grow: 1;

  hr {
    width: 100%;
    border: 1px solid ${(props) => props.theme.hr};
  }

  .active {
    background-color: ${(props) => props.theme.primary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.scrollbar};
    border-radius: 10px;
    border: 3.5px solid ${(props) => props.theme.background};
  }

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 70%;
    height: 100vh;
    padding: 10px 25px;
    left: ${({ showMenu }) => (showMenu ? 0 : "-100%")};
    transition: all 0.5s ease;
    background: ${(props) => props.theme.background};
    z-index: -1;
    gap: 0.5rem;
    top: 6rem;
    overflow: auto;
  }
`;

export const NavItem = styled.li`
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  font-size: 17px;
  text-decoration: none;
  gap: 0.7rem;
  border-radius: 10px;
  transition: all 0.2s linear;
  height: 100%;
  padding: 1rem;

  &:hover {
    background-color: ${(props) => props.theme.primaryHover};

    @media (max-width: 1200px) {
      background-color: transparent;
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
