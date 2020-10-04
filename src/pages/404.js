import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default function NotFound() {
    return (
        <Layout>
            <SEO title="Oops!" description="This is my 404 page" />
            <h1>404: Page Not Found</h1>
            <p>
                <Link to="/blog/">Check our latest articles</Link>
            </p>
        </Layout>
    )
}
