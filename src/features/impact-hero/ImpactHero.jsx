// src/features/impact-hero/ImpactHero.jsx
// Top hero block for sponsorship report branding.

import './ImpactHero.css'
import pirateLogo from '../../../assets/pirate_ram.svg'

const ImpactHero = () => (
  <section className="impact-hero" id="hero" aria-labelledby="impact-hero-title">
    <div className="impact-hero-grid">
      <div className="impact-hero-copy">
        <div className="impact-hero-title-row">
          <img
            src={pirateLogo}
            alt=""
            className="impact-hero-logo"
            width="48"
            height="48"
            aria-hidden="true"
          />
          <h1 id="impact-hero-title" className="impact-hero-title">
            Sponsoring Hack@URI
          </h1>
        </div>
      </div>
    </div>
  </section>
)

export default ImpactHero
