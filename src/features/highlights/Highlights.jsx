// src/features/highlights/Highlights.jsx
// Highlights narrative with gallery placeholders.

import PlaceholderImage from '../../shared/components/PlaceholderImage.jsx'
import './Highlights.css'

const Highlights = () => (
  <section className="report-section highlights" id="highlights" aria-labelledby="highlights-title">
    <h2 id="highlights-title" className="report-section-title">
      Hack@URI 2026 Highlights
    </h2>
    <div className="highlights-intro report-section-prose">
      <p>
        Even an unexpected blizzard couldn&apos;t slow us down. Our organizing team adapted the
        schedule in real time, and participants stayed energized, submitting 40 innovative
        projects across six specialized tracks. Judges, workshop speakers, and mentors included
        professionals from URI, Amazon, Microsoft, IBM, Mastercard, Accenture, Meditech, Fidelity,
        Citizens, and Google.
      </p>
    </div>
    <div className="highlights-gallery">
      <PlaceholderImage label="Opening ceremony or keynote" shape="standard" />
      <PlaceholderImage label="Hacking floor or teams at work" shape="standard" />
      <PlaceholderImage label="Demos, expo, or winners" shape="standard" />
    </div>
  </section>
)

export default Highlights
