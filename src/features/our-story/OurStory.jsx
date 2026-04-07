import PlaceholderImage from '../../shared/components/PlaceholderImage.jsx'
import './OurStory.css'

const OurStory = () => (
  <section className="report-section our-story" id="our-story" aria-labelledby="our-story-title">
    <h2 id="our-story-title" className="report-section__title">
      Our story
    </h2>
    <div className="our-story__layout">
      <div className="report-section__prose our-story__prose">
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
      <div className="our-story__media">
        <PlaceholderImage label="Venue, crowd, or team photo" shape="tall" />
      </div>
    </div>
    <div className="report-section__media">
      <PlaceholderImage label="Weekend atmosphere or wide event shot" shape="standard" />
    </div>
  </section>
)

export default OurStory
