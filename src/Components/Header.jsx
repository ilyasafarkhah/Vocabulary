import { NavLink } from "react-router"
import "/src/CSS/Header.css"

function Header() {

    return (

        <header className="site-header">

            <div className="header-inner">

                <NavLink
                    to="/"
                    className="brand"
                >
                    Safarkhah<span> Vocab Memory</span>
                </NavLink>


                <nav
                    className="main-nav"
                    aria-label="Main navigation"
                >

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        Home
                    </NavLink>


                    <NavLink
                        to="/wordlist"
                        className={({ isActive }) =>
                            isActive
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        Word List
                    </NavLink>


                    <NavLink
                        to="/addword"
                        className={({ isActive }) =>
                            isActive
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        Add Word
                    </NavLink>

                </nav>


                <div className="header-badge">
                    Learn every day
                </div>

            </div>

        </header>
    )
}

export default Header