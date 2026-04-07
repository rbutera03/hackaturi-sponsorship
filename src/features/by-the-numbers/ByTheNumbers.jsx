import PlaceholderImage from '../../shared/components/PlaceholderImage.jsx'
import './ByTheNumbers.css'

const STATS = [
  { value: '200+', label: 'Participants' },
  { value: '30+', label: 'Universities' },
  { value: '40', label: 'Projects submitted' },
  { value: '6', label: 'Tracks' },
  { value: '12', label: 'Prizes awarded' },
]

const ByTheNumbers = () => (
  <section
    className="report-section by-the-numbers"
    id="by-the-numbers"
    aria-labelledby="by-the-numbers-title"
  >
    <p className="report-section__eyebrow">By the numbers</p>
    <h2 id="by-the-numbers-title" className="report-section__title">
      Scale of Hack@URI 2026
    </h2>
    <ul className="by-the-numbers__stats">
      {STATS.map(({ value, label }) => (
        <li key={label} className="by-the-numbers__stat">
          <span className="by-the-numbers__value">{value}</span>
          <span className="by-the-numbers__label">{label}</span>
        </li>
      ))}
    </ul>
    <div className="report-section__media">
      <PlaceholderImage label="Infographic or stats visualization" shape="wide" />
    </div>
    <div className="report-section__media">
      <PlaceholderImage label="Participant diversity or school map graphic" shape="standard" />
    </div>
  </section>
)

export default ByTheNumbers
