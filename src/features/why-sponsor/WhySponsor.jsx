import PlaceholderImage from '../../shared/components/PlaceholderImage.jsx'
import './WhySponsor.css'

const REASONS = [
  {
    n: '01',
    title: "Support URI's historic first",
    body:
      "Hack@URI is the first student-run, multi-track, MLH-affiliated hackathon in URI's history. By sponsoring, you become a founding partner of a growing tradition that places URI within a nationally recognized innovation network alongside top engineering and CS programs. Your early support builds credibility and momentum for years to come.",
  },
  {
    n: '02',
    title: 'Meet talented students from 40+ schools',
    body:
      "By sponsoring Hack@URI, you'll connect with outstanding computer science, engineering, design, and business students from across the country. Participants came from 60+ universities including MIT, Brown, Georgia Tech, and Northeastern. Gain access to participant resumes and portfolios to support your recruiting pipeline.",
  },
  {
    n: '03',
    title: 'Showcase your company and brand',
    body:
      "Boost your company's visibility through our sponsorship fair, company-led workshops, and mentorship opportunities. At Hack@URI 2026, participants had access to mentors and product managers from Google, Microsoft, IBM, Fidelity, Accenture, Meditech, MergeFund, and more. We'd love for you to lead a workshop or demo at our next event.",
  },
  {
    n: '04',
    title: 'Promote innovation across disciplines',
    body:
      "Hack@URI is designed as a university-wide innovation platform, bringing together stakeholders from the College of Engineering, College of Business, College of Arts & Sciences, the Department of Computer Science, Cybersecurity, the Innovation Lab, URI Makerspace, and the URI Research Foundation. Your sponsorship reaches students beyond just CS—designers, entrepreneurs, and creators of all kinds.",
  },
]

const WhySponsor = () => (
  <section className="report-section why-sponsor" id="why-sponsor" aria-labelledby="why-sponsor-title">
    <p className="report-section__eyebrow">Why sponsor us</p>
    <h2 id="why-sponsor-title" className="report-section__title">
      Partner with a growing tradition
    </h2>
    <div className="report-section__media report-section__media--flush-top">
      <PlaceholderImage label="Sponsors fair, booth, or partner logos collage" shape="wide" />
    </div>
    <ol className="why-sponsor__list">
      {REASONS.map((reason) => (
        <li key={reason.n} className="why-sponsor__item">
          <div className="why-sponsor__item-header">
            <span className="why-sponsor__num" aria-hidden>
              {reason.n}
            </span>
            <h3 className="why-sponsor__item-title">{reason.title}</h3>
          </div>
          <div className="why-sponsor__item-body">
            <p className="report-section__prose">{reason.body}</p>
            <PlaceholderImage
              label={`Photo or graphic — reason ${reason.n}`}
              shape="standard"
              className="why-sponsor__item-placeholder"
            />
          </div>
        </li>
      ))}
    </ol>
  </section>
)

export default WhySponsor
