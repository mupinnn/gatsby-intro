import React from "react"
import Header from "./Header"
import Footer from "./Footer"

import "../styles/style.scss"
import layoutStyles from "./layout.module.scss"

export default function Layout(props) {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                <div className={layoutStyles.mainContent}>{props.children}</div>
            </div>
            <Footer />
        </div>
    )
}
