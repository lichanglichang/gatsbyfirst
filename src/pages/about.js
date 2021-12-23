import React from "react"
import { graphql } from "gatsby"
const About = ({ data }) => {
  console.log(data.site.siteMetadata.title)
  return <div>{data.site.siteMetadata.title}</div>
}

export default About
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
