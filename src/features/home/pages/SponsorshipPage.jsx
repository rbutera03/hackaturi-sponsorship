import { FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa'
import './SponsorshipPage.css'

const MAIN_SITE = 'https://hackaturi.com'

const SponsorshipPage = () => (
  <main className="sponsor-page">
    <header className="sponsor-header">
      <p className="sponsor-eyebrow">Hack@URI</p>
      <h1 className="sponsor-title">Sponsorship</h1>
      <p className="sponsor-lead">
        Partner with Rhode Island&apos;s student hackathon. This site is for sponsor
        information and outreach; the main event lives on our primary site.
      </p>
    </header>

    <section className="sponsor-card" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Get in touch</h2>
      <p>
        Reach the organizing team for prospectuses, tiers, and custom packages.
      </p>
      <a className="sponsor-link sponsor-link-primary" href="mailto:sponsors@hackaturi.com">
        <FaEnvelope aria-hidden />
        sponsors@hackaturi.com
      </a>
    </section>

    <section className="sponsor-card" aria-labelledby="main-site-heading">
      <h2 id="main-site-heading">Hackathon site</h2>
      <p>Schedules, registration, and event details are on the main Hack@URI website.</p>
      <a
        className="sponsor-link sponsor-link-secondary"
        href={MAIN_SITE}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit hackaturi.com
        <FaExternalLinkAlt aria-hidden className="sponsor-icon-external" />
      </a>
    </section>
  </main>
)

export default SponsorshipPage
