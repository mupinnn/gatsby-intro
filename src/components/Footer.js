import React from "react"

import footerStyles from "./footer.module.scss"

export default function Footer() {
    return (
        <footer className={footerStyles.siteFooter}>
            <div className={footerStyles.container}>
                <p>
                    Site developed by Faqih &copy;{" "}
                    {new Date().getFullYear().toString()}
                </p>
            </div>
        </footer>
    )
}
