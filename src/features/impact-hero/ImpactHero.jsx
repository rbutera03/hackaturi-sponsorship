// src/features/impact-hero/ImpactHero.jsx
// Top hero block for sponsorship report branding.

import starsSvg from '../../../assets/stars-bg.svg'
import { HERO_DECOR_STARS } from '../../app/decorStars.js'
import ramLogo from '../../../assets/space_ram.png'
import './ImpactHero.css'

const ImpactHero = () => (
  <section className="impact-hero" id="hero" aria-labelledby="impact-hero-title">
    <div className="impact-hero-stars" aria-hidden>
      {HERO_DECOR_STARS.map((star, index) => (
        <img
          key={index}
          src={starsSvg}
          alt=""
          className="impact-hero-star"
          style={{
            top: star.top,
            left: star.left,
            right: star.right,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
    <div className="impact-hero-grid">
      <div className="impact-hero-copy">
        <div className="impact-hero-title-row">
          <img
            src={ramLogo}
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
