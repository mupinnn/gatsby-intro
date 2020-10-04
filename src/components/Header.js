import React from "react"
import { Link } from "gatsby"

export default function Header() {
    return (
        <header>
            <div>
                <p>
                    <Link to="/">Faqih</Link>
                </p>
                <p>Hustler</p>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blog/">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact/">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about/">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
