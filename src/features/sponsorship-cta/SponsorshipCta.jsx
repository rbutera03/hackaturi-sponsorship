import { FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa'
import PlaceholderImage from '../../shared/components/PlaceholderImage.jsx'
import './SponsorshipCta.css'

const MAIN_SITE = 'https://hackaturi.com'
const CONTACT_EMAIL = 'hackaturi25@gmail.com'

const SponsorshipCta = () => (
  <section
    className="report-section sponsorship-cta"
    id="contact"
    aria-labelledby="sponsorship-cta-title"
  >
    <div className="sponsorship-cta__layout">
      <div className="sponsorship-cta__copy">
        <p className="report-section__eyebrow">Next steps</p>
        <h2 id="sponsorship-cta-title" className="report-section__title">
          Interested in sponsoring or partnering?
        </h2>
        <div className="report-section__prose sponsorship-cta__prose">
          <p>
            We&apos;d love to hear from you! Whether you&apos;re looking to sponsor Hack@URI,
            partner on workshops, provide mentorship, or get your brand in front of 200+ talented
            students from 40+ universities, let&apos;s talk. Reach out to us at{' '}
            <a className="sponsorship-cta__inline-link" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>{' '}
            and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <div className="sponsorship-cta__actions">
          <a className="sponsorship-cta__btn sponsorship-cta__btn--primary" href={`mailto:${CONTACT_EMAIL}`}>
            <FaEnvelope aria-hidden />
            Email us
          </a>
          <a
            className="sponsorship-cta__btn sponsorship-cta__btn--secondary"
            href={MAIN_SITE}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit hackaturi.com
            <FaExternalLinkAlt aria-hidden className="sponsorship-cta__icon-external" />
          </a>
        </div>
      </div>
      <div className="sponsorship-cta__visual">
        <PlaceholderImage label="Team photo or thank-you to partners" shape="tall" />
      </div>
    </div>
    <div className="report-section__media">
      <PlaceholderImage label="Sponsor logo wall or partnership graphic" shape="wide" />
    </div>
  </section>
)

export default SponsorshipCta
