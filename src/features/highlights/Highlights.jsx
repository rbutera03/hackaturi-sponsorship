import PlaceholderImage from '../../shared/components/PlaceholderImage.jsx'
import './Highlights.css'

const Highlights = () => (
  <section className="report-section highlights" id="highlights" aria-labelledby="highlights-title">
    <p className="report-section__eyebrow">2026 highlights</p>
    <h2 id="highlights-title" className="report-section__title">
      Resilience and energy
    </h2>
    <div className="highlights__intro report-section__prose">
      <p>
        Even an unexpected blizzard couldn&apos;t slow us down. Our organizing team adapted the
        schedule in real time, and participants stayed energized, submitting 40 innovative
        projects across six specialized tracks. Judges, workshop speakers, and mentors included
        professionals from URI, Amazon, Microsoft, IBM, Mastercard, Accenture, Meditech, Fidelity,
        Citizens, and Google.
      </p>
    </div>
    <div className="highlights__gallery">
      <PlaceholderImage label="Opening ceremony or keynote" shape="standard" />
      <PlaceholderImage label="Hacking floor or teams at work" shape="standard" />
      <PlaceholderImage label="Demos, expo, or winners" shape="standard" />
    </div>
    <div className="report-section__media">
      <PlaceholderImage label="Mentors, judges, or workshop moment" shape="wide" />
    </div>
  </section>
)

export default Highlights
