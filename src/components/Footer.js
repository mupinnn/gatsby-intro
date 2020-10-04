import React from "react"

export default function Footer() {
    return (
        <footer>
            <p>
                Site developed by Faqih &copy;{" "}
                {new Date().getFullYear().toString()}
            </p>
        </footer>
    )
}
