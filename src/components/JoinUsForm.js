import React from 'react'
import PropTypes from 'prop-types'
import intl from '../intl/locales'

const JoinUsForm = ({ languageKey }) => (
  <div>
    <form
      action="https://api.staticforms.xyz/submit" 
      method="post"
    >
      <input type="text" name="honeypot" style={{display:`none`}} />
      <input type="hidden" name="accessKey" value="a630dbeb-4ad5-4104-9805-e1406547d6ab" />
      <input type="hidden" name="subject" value="Join us - xrbarcelona.org" />
      <input type="hidden" name="redirectTo" 
        value={`https://xrbarcelona.org/${languageKey}/contact/thanks/`} />
      <div className="columns">

        <div className="column is-3 is-offset-1 field">
          <div className="control">
            <input className="input" type={'text'}
              name={'name'} id={'name'}
              placeholder={intl[languageKey].contactForm.name}
              required={true}
            />
          </div>
        </div>
        <div className="column is-3 field">
          <div className="control">
            <input className="input" type={'email'}
              name={'email'} id={'email'}
              placeholder={intl[languageKey].contactForm.email}
              required={true}
            />
          </div>
        </div>
        <div className="column is-3 field">
          <div className="control">
            <input className="input" type={'phone'} 
              name={'phone'} id={'phone'}
              placeholder={intl[languageKey].contactForm.phone}
              required={false}
            />
          </div>
        </div>
        <div className="column is-2 field">
          <button className="button is-link" type="submit">
            {intl[languageKey].contactForm.join}
          </button>
        </div>
      </div>

    </form>
  </div>
)

JoinUsForm.propTypes = {
  languageKey: PropTypes.string,
}

export default JoinUsForm
