// src/features/our-story/OurStory.jsx
// Story section describing Hack@URI mission and event context.

import PlaceholderImage from '../../shared/components/PlaceholderImage.jsx'
import './OurStory.css'

const OurStory = () => (
  <section className="report-section our-story" id="our-story" aria-labelledby="our-story-title">
    <h2 id="our-story-title" className="report-section-title">
      Our story
    </h2>
    <div className="our-story-layout">
      <div className="report-section-prose our-story-prose">
        <p>
          Hack@URI 2026 was the University of Rhode Island&apos;s first-ever large-scale
          hackathon, launched in partnership with Major League Hacking. Held on February 21–22,
          2026 at the Fascitelli Center for Advanced Engineering, Hack@URI brought together
          students from all majors and backgrounds to build, learn, and innovate over a weekend.
        </p>
        <p>
          Hack@URI is a celebration of creativity, technology, and collaboration. We&apos;re a
          community of students passionate about creating spaces where others can learn by
          building, whether it&apos;s coding, design, business, or exploring bold new ideas. Our
          mission is to bridge the gap between classroom learning and real-world experience,
          sparking innovation and connecting participants with Rhode Island&apos;s growing tech and
          creative community. Whether you&apos;re a first-time hacker or a seasoned builder,
          Hack@URI is your platform.
        </p>
      </div>
      <div className="our-story-media">
        <PlaceholderImage
          src="/images/2026/opening_ceremony.jpg"
          alt="Hack@URI crowd at the Fascitelli Center"
          shape="standard"
        />
      </div>
    </div>
  </section>
)

export default OurStory
