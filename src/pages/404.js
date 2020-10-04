import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function NotFound() {
    return (
        <Layout>
            <h1>404: Page Not Found</h1>
            <p>
                <Link to="/blog/">Check our latest articles</Link>
            </p>
        </Layout>
    )
}
