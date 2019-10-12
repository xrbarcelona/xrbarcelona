import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

const baseColorClass="bg-xr-light-green"

export const BlogPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      <div className="container content blog-container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  const languageKey = post.frontmatter.languageKey

  return (
    <Layout languageKey={languageKey} baseColorClass={baseColorClass}
            title={post.frontmatter.title} description={post.frontmatter.description}
            featuredImage={post.frontmatter.featuredimage}>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(
        id: { eq: $id },
        frontmatter: { templateKey: { eq: "blog-post" } }
      ) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        languageKey
        description
        featuredimage {
          childImageSharp {
            resize(width: 400, quality: 70) {
              src
            }
          }
        }
        tags
      }
    }
  }
`
