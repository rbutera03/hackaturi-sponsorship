import './ImpactHero.css'
import pirateLogo from '../../../assets/pirate_ram.svg'

const ImpactHero = () => (
  <section className="impact-hero" id="hero" aria-labelledby="impact-hero-title">
    <div className="impact-hero__grid">
      <div className="impact-hero__copy">
        <div className="impact-hero__title-row">
          <img
            src={pirateLogo}
            alt=""
            className="impact-hero__logo"
            width="48"
            height="48"
            aria-hidden="true"
          />
          <h1 id="impact-hero-title" className="impact-hero__title">
            Sponsoring Hack@URI
          </h1>
        </div>
      </div>
    </div>
  </section>
)

export default ImpactHero
