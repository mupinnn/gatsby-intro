import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
            }
            timeToRead
            html
        }
    }
`

export default function BlogPost(props) {
    return (
        <Layout>
            <div>
                <h2>{props.data.markdownRemark.frontmatter.title}</h2>
                <span>
                    Posted on {props.data.markdownRemark.frontmatter.date}
                </span>{" "}
                / <span>{props.data.markdownRemark.timeToRead} min read</span>
                <div
                    dangerouslySetInnerHTML={{
                        __html: props.data.markdownRemark.html,
                    }}
                ></div>
            </div>
        </Layout>
    )
}
