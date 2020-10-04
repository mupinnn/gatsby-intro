import React from "react"
import Header from "./Header"
import Footer from "./Footer"

import "../styles/style.scss"

export default function Layout(props) {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}
