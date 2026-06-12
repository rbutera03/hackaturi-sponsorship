// src/features/sponsorship-cta/SponsorshipCta.jsx
// Final call-to-action section for sponsor outreach and contact.

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
    <div className="sponsorship-cta-layout">
      <div className="sponsorship-cta-copy">
        <p className="report-section-eyebrow">Next steps</p>
        <h2 id="sponsorship-cta-title" className="report-section-title">
          Interested in sponsoring or partnering?
        </h2>
        <div className="report-section-prose sponsorship-cta-prose">
          <p>
            We&apos;d love to hear from you! Whether you&apos;re looking to sponsor Hack@URI,
            partner on workshops, provide mentorship, or get your brand in front of 200+ talented
            students from 40+ universities, let&apos;s talk. Reach out to us at{' '}
            <a className="sponsorship-cta-inline-link" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>{' '}
            and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <div className="sponsorship-cta-actions">
          <a className="sponsorship-cta-btn sponsorship-cta-btn-primary" href={`mailto:${CONTACT_EMAIL}`}>
            <FaEnvelope aria-hidden />
            Email us
          </a>
          <a
            className="sponsorship-cta-btn sponsorship-cta-btn-secondary"
            href={MAIN_SITE}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit hackaturi.com
            <FaExternalLinkAlt aria-hidden className="sponsorship-cta-icon-external" />
          </a>
        </div>
      </div>
      <div className="sponsorship-cta-visual">
        <PlaceholderImage
          src="/images/2026/team_outside.jpg"
          alt="Hack@URI mentors and sponsors"
          shape="tall"
        />
      </div>
    </div>
  </section>
)

export default SponsorshipCta
