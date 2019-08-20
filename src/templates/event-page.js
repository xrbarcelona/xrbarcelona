import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import intl from '../intl/locales'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Layout from '../components/Layout'
import EventsGrid from '../components/EventsGrid'
import Testimonials from '../components/Testimonials'

const baseColorClass="bg-xr-purple"

export const EventPageTemplate = ({
  title,
  heading,
  description,
  intro,
  testimonials,
  languageKey,
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url('/img/banner-events.jpg')`,
      }}
    >
      <h1 className={`home-title ${baseColorClass} has-text-weight-bold is-size-1`}>
        {title}
      </h1>
    </div>
    <section className="section section--gradient">
      <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1 has-text-centered">
              <p>{description}</p>
            </div>
          </div>
          <div className="has-text-centered">
            <OutboundLink className="button" href="https://framagenda.org/index.php/apps/calendar/p/4S4QSqkFWj7obna4/XR-Barcelona-General">
              {intl[languageKey].goToCalendar} →
            </OutboundLink>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <EventsGrid gridItems={intro.blurbs} />
              <div className="has-text-centered calendar-bottom">
                <OutboundLink className="button" href="https://framagenda.org/index.php/apps/calendar/p/4S4QSqkFWj7obna4/XR-Barcelona-General">
                  {intl[languageKey].goToCalendar} →
                </OutboundLink>
              </div>
              <Testimonials testimonials={testimonials} />
            </div>
          </div>
      </div>
    </section>
  </div>
)

EventPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,
}

const EventPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout languageKey={frontmatter.languageKey} baseColorClass={baseColorClass} >
      <EventPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        testimonials={frontmatter.testimonials}
        languageKey={frontmatter.languageKey}
      />
    </Layout>
  )
}

EventPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default EventPage

export const eventPageQuery = graphql`
  query EventPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        languageKey
        title
        heading
        description
        intro {
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
        testimonials {
          author
          quote
        }
      }
    }
  }
`
