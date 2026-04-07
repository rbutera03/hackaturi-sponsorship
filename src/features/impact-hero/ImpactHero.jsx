import PlaceholderImage from '../../shared/components/PlaceholderImage.jsx'
import './ImpactHero.css'

const ImpactHero = () => (
  <section className="impact-hero" aria-labelledby="impact-hero-title">
    <div className="impact-hero__grid">
      <div className="impact-hero__copy">
        <h1 id="impact-hero-title" className="impact-hero__title">
          Sponsoring Hack@URI
        </h1>
        <p className="impact-hero__subtitle">
          A look back at URI&apos;s first large-scale MLH-affiliated hackathon—and why partners
          matter for what comes next.
        </p>
      </div>
      <div className="impact-hero__visual">
        <PlaceholderImage label="Hero photo or impact graphic" shape="wide" />
      </div>
    </div>
  </section>
)

export default ImpactHero
