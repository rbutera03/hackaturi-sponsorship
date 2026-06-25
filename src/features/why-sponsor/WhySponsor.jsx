// src/features/why-sponsor/WhySponsor.jsx
// Reasons grid explaining sponsorship value and outcomes.

import './WhySponsor.css'

const REASONS = [
  {
    n: '01',
    title: "Become a founding partner of a growing tradition",
    body: (
      <>
        Hack@URI is the <strong>first student-run, multi-track, MLH-affiliated hackathon</strong> in
        URI&apos;s history. By sponsoring, <strong>you become a founding partner</strong> of a growing
        tradition that places URI within a <strong>nationally recognized innovation network</strong>{' '}
        alongside top engineering and CS programs. Your early support builds credibility and momentum
        for years to come.
      </>
    ),
  },
  {
    n: '02',
    title: 'Meet talented students from 60+ schools',
    body: (
      <>
        By sponsoring Hack@URI, you&apos;ll connect with <strong>outstanding computer science,
        engineering, design, and business students</strong> from across the country. Participants came
        from <strong>60+ universities</strong> including <strong>MIT, Brown, Georgia Tech, and
        Northeastern</strong>. Gain access to participant resumes and portfolios to support your{' '}
        <strong>recruiting pipeline</strong>.
      </>
    ),
  },
  {
    n: '03',
    title: 'Showcase your company and brand',
    body: (
      <>
        Boost your company&apos;s visibility through our <strong>sponsorship fair, company-led
        workshops, and mentorship opportunities</strong>. At Hack@URI 2026, participants had access to
        mentors and product managers from <strong>Google, Microsoft, IBM, Fidelity, Accenture, Meditech,
        MergeFund, and more</strong>. We&apos;d love for you to lead a workshop or demo at our next
        event.
      </>
    ),
  },
  {
    n: '04',
    title: 'Promote innovation across disciplines',
    body: (
      <>
        Hack@URI is designed as a <strong>university-wide innovation platform</strong>, bringing
        together stakeholders from the College of Engineering, College of Business, College of Arts
        &amp; Sciences, the Department of Computer Science, Cybersecurity, the Innovation Lab, URI
        Makerspace, and the URI Research Foundation. Your sponsorship reaches students{' '}
        <strong>beyond just CS</strong>—designers, entrepreneurs, and creators of all kinds.
      </>
    ),
  },
]

const WhySponsor = () => (
  <section className="report-section why-sponsor" id="why-sponsor" aria-labelledby="why-sponsor-title">
    <h2 id="why-sponsor-title" className="report-section-title">
      Why sponsor Hack@URI?
    </h2>
    <ol className="why-sponsor-grid">
      {REASONS.map((reason) => (
        <li key={reason.n} className="why-sponsor-card">
          <div className="why-sponsor-card-header">
            <span className="why-sponsor-num" aria-hidden>
              {reason.n}
            </span>
            <h3 className="why-sponsor-card-title">{reason.title}</h3>
          </div>
          <p className="report-section-prose why-sponsor-card-body">{reason.body}</p>
        </li>
      ))}
    </ol>
  </section>
)

export default WhySponsor
