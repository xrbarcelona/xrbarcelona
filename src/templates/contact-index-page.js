import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { navigate } from 'gatsby-link'
import Layout from '../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactIndexPage extends React.Component {
  // = ({ data }) => {
  //const markdown = data.markdownRemark
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    const markdown = this.props.data.markdownRemark
    const languageKey = markdown.frontmatter.languageKey

    return (
      <Layout languageKey={languageKey}>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(${
              !!markdown.frontmatter.image.childImageSharp ? markdown.frontmatter.image.childImageSharp.fluid.src : markdown.frontmatter.image
            })`,
          }}
        >
          <h1 className="home-title has-text-weight-bold is-size-1">
            {markdown.frontmatter.title}
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <form
                name="contact"
                method="post"
                action={`/${languageKey}/contact/thanks/`}
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                      {markdown.frontmatter.contact.name}
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    {markdown.frontmatter.contact.email}
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    {markdown.frontmatter.contact.message}
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    {markdown.frontmatter.contact.send}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

ContactIndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        languageKey: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }),
}

export default ContactIndexPage

export const pageQuery = graphql`
  query ContactIndexPage($languageKey: String!) {
    markdownRemark(frontmatter: { 
          templateKey: { eq: "contact-index-page" }
          languageKey: { eq: $languageKey }
        }) {
      id
      html
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
        contact {
          name
          email
          message
          send
        }
      }
    }
  }
`