import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import EventsGrid from '../components/EventsGrid'
import DemandsGrid from '../components/DemandsGrid'
import JoinUsForm from '../components/JoinUsForm'
import localizedBlogRoll from '../components/LocalizedBlogRoll'
import intl from '../intl/locales'

export const IndexPageTemplate = ({
  languageKey,
  image,
  title,
  heading,
  subheading,
  intro,
}) => (
  <div>
    <Helmet>
      <title>{`${title}`}</title>
    </Helmet>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div className="columns">
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    {heading}
                  </h3>
                  <p className="is-size-4">{subheading}</p>
                </div>
              </div>
              <DemandsGrid gridItems={intro.demands} />
              <EventsGrid gridItems={intro.blurbs} />
              <div className="columns">
                <div className="column is-12 has-text-centered">
                  <Link className="button" to={`/${languageKey}/events`}>
                    {intl[languageKey].seeAllEvents} →
                  </Link>
                </div>
              </div>
              <div className="column is-12 join-us">
                <h3>
                  {intl[languageKey].joinTheRebellion}
                </h3>
                <JoinUsForm languageKey={languageKey} />
              </div>
              <div className="column is-12">
                <h3 className="has-text-weight-semibold">
                  {intl[languageKey].latestStories}
                </h3>
                { localizedBlogRoll(languageKey) }
                <div className="column is-12 has-text-centered">
                  <Link className="button" to={`/${languageKey}/blog`}>
                    {intl[languageKey].readMore} →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  languageKey: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
    demands: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout languageKey={frontmatter.languageKey}>
      <IndexPageTemplate
        languageKey={frontmatter.languageKey}
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate($languageKey: String!) {
    markdownRemark(frontmatter: { 
          templateKey: { eq: "index-page" }
          languageKey: { eq: $languageKey }
        }) {
      frontmatter {
        title
        languageKey
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        intro {
          demands {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
