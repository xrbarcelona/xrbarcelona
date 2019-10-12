import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import BlogRoll from './BlogRoll'

class BlogRollEs extends React.Component {
  render() {
    return <BlogRoll data={this.props.data} count={this.props.count} languageKey="es" />
  }
}

BlogRollEs.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollEs_Query {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { 
            frontmatter: { 
              templateKey: { eq: "blog-post" } 
              languageKey: { eq: "es" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                languageKey
                date(formatString: "MMMM DD, YYYY", locale: "es")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 180, quality: 70) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} languageKey="es" />}
  />
)
