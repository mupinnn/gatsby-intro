import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

export default function Header() {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.overlay}></div>
            <div className={headerStyles.heroContent}>
                <p className={headerStyles.brand}>
                    <Link to="/">Faqih</Link>
                </p>
                <p className={headerStyles.description}>Hustler</p>
            </div>
            <nav className={headerStyles.navContainer}>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link
                            to="/"
                            activeClassName={headerStyles.activeMenuItem}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/blog/"
                            activeClassName={headerStyles.activeMenuItem}
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact/"
                            activeClassName={headerStyles.activeMenuItem}
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about/"
                            activeClassName={headerStyles.activeMenuItem}
                        >
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
