import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default function About() {
    return (
        <Layout>
            <SEO title="About" description="This is my about page" />
            <h1>About page</h1>
            <p>
                This cool GatsbyJS tutorial is from @ibaslogic
                (https://dev.to/ibaslogic/gatsby-tutorial-a-step-by-step-guide-to-building-a-gatsby-site-from-scratch-2neh)
            </p>
        </Layout>
    )
}
