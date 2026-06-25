// src/features/our-story/OurStory.jsx
// Story section describing Hack@URI mission and event context.

import starsSvg from '../../../assets/stars-bg.svg'
import { OUR_STORY_DECOR_STARS } from '../../app/decorStars.js'
import PlaceholderImage from '../../shared/components/PlaceholderImage.jsx'
import './OurStory.css'

const OurStory = () => (
  <section className="report-section our-story" id="our-story" aria-labelledby="our-story-title">
    <div className="our-story-stars" aria-hidden>
      {OUR_STORY_DECOR_STARS.map((star, index) => (
        <img
          key={index}
          src={starsSvg}
          alt=""
          className="our-story-star"
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
    <div className="our-story-layout">
      <div className="our-story-media">
        <PlaceholderImage
          src="/images/2026/opening_ceremony.jpg"
          alt="Hack@URI crowd at the Fascitelli Center"
          shape="standard"
        />
      </div>
      <div className="our-story-copy">
        <h2 id="our-story-title" className="report-section-title">
          Hack@URI's Successful Debut
        </h2>
        <div className="report-section-prose">
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
      </div>
    </div>
  </section>
)

export default OurStory
