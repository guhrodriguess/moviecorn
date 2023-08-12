import { useState } from "react";

import {
    LayoutGrid,
    Rocket,
    Star,
    Clapperboard,
    AlignLeft,
} from "lucide-react";

import * as Styles from "./styles";

import { NavLink } from "react-router-dom";

import logo from "@/assets/logo.svg";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const handleCloseMenu = () => {
        setShowMenu(false);
        document.body.style.overflow = "auto";
    };

    const handleMenu = () => {
        setShowMenu(!showMenu);

        if (!showMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    };

    return (
        <>
            <Styles.Header>
                <Styles.Nav>
                    <Styles.MobileIcon onClick={handleMenu}>
                        <AlignLeft size={30} />
                    </Styles.MobileIcon>
                    <img
                        src={logo}
                        width={150}
                        alt="MovieCorn Logo"
                        loading="lazy"
                    />
                    <Styles.NavMenu showMenu={showMenu}>
                        <h3>Página inicial</h3>
                        <NavLink
                            to="/"
                            onClick={handleCloseMenu}
                            className={({ isActive }) =>
                                isActive ? "active" : undefined
                            }
                        >
                            <Styles.NavItem>
                                <LayoutGrid size={20} />
                                Início
                            </Styles.NavItem>
                        </NavLink>
                        <hr />
                        <h3>Filmes</h3>
                        <NavLink
                            to="/movies/releases"
                            onClick={handleCloseMenu}
                            className={({ isActive }) =>
                                isActive ? "active" : undefined
                            }
                        >
                            <Styles.NavItem>
                                <Rocket size={20} />
                                Lançamentos
                            </Styles.NavItem>
                        </NavLink>
                        <NavLink
                            to="/movies/popular"
                            onClick={handleCloseMenu}
                            className={({ isActive }) =>
                                isActive ? "active" : undefined
                            }
                        >
                            <Styles.NavItem>
                                <Clapperboard size={20} />
                                Populares
                            </Styles.NavItem>
                        </NavLink>
                        <NavLink
                            to="/movies/top"
                            onClick={handleCloseMenu}
                            className={({ isActive }) =>
                                isActive ? "active" : undefined
                            }
                        >
                            <Styles.NavItem>
                                <Star size={20} />
                                Rankeados
                            </Styles.NavItem>
                        </NavLink>
                        <hr />
                        <h3>Tv</h3>
                        <NavLink
                            to="/tv/releases"
                            onClick={handleCloseMenu}
                            className={({ isActive }) =>
                                isActive ? "active" : undefined
                            }
                        >
                            <Styles.NavItem>
                                <Rocket size={20} />
                                Lançamentos
                            </Styles.NavItem>
                        </NavLink>
                        <NavLink
                            to="/tv/popular"
                            onClick={handleCloseMenu}
                            className={({ isActive }) =>
                                isActive ? "active" : undefined
                            }
                        >
                            <Styles.NavItem>
                                <Clapperboard size={20} />
                                Populares
                            </Styles.NavItem>
                        </NavLink>
                        <NavLink
                            to="/tv/top"
                            onClick={handleCloseMenu}
                            className={({ isActive }) =>
                                isActive ? "active" : undefined
                            }
                        >
                            <Styles.NavItem>
                                <Star size={20} />
                                Rankeados
                            </Styles.NavItem>
                        </NavLink>
                    </Styles.NavMenu>
                </Styles.Nav>
            </Styles.Header>

            {showMenu && <Styles.PageOpacity onClick={handleCloseMenu} />}
        </>
    );
}
