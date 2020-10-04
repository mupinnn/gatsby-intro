import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default function Home() {
    return (
        <Layout>
            <SEO title="Home" description="This is my home page" />
            <h1>Home page</h1>
            <h2>Hi! This is my first GatsbyJS site.</h2>
        </Layout>
    )
}
