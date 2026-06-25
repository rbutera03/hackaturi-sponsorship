// src/features/tracks/TracksSection.jsx
// Track cards shown in sponsorship report context.

import { useCallback, useEffect, useState } from 'react'
import {
  FaAnchor,
  FaBrain,
  FaChevronLeft,
  FaChevronRight,
  FaHeartbeat,
  FaPalette,
  FaShieldAlt,
} from 'react-icons/fa'
import { GiWaterSplash } from 'react-icons/gi'
import './TracksSection.css'

const TRACKS = [
  {
    name: 'Hack to Health',
    icon: FaHeartbeat,
    tagline: 'Technology for better care and well-being',
    description:
      'Build solutions that improve patient outcomes and streamline health services. Create wearables for health monitoring, telemedicine platforms for underserved communities, accessibility apps, or health data dashboards.',
  },
  {
    name: 'Neural Tide',
    icon: FaBrain,
    tagline: 'AI-powered startups, technical projects, and compute-intensive experiments',
    description:
      'Choose between launching an AI-native startup with an emphasis on validation and scalability, developing a focused AI project that demonstrates strong engineering or creative application, or leveraging high-performance hardware for advanced AI workloads.',
  },
  {
    name: "Ocean's Edge Ventures",
    icon: FaAnchor,
    tagline: 'Build tools to help ideas and businesses set sail',
    description:
      'Build tech for entrepreneurship and business growth. Create platforms connecting small businesses to customers, financial literacy apps, e-commerce solutions, or market analysis dashboards.',
  },
  {
    name: 'Creative Currents',
    icon: FaPalette,
    tagline: 'Shining light on creative, expressive, interactive tech',
    description:
      'Fuse art, design, and technology to push creative boundaries. Build interactive art installations, generative music platforms, AR/VR experiences, or accessibility tools for creative expression. Welcome to all majors beyond "just code."',
  },
  {
    name: 'Safe Harbor',
    icon: FaShieldAlt,
    tagline: 'Explore, test, and secure within trusted waters',
    description:
      'Chart a course through the world of ethical hacking. Probe systems responsibly, discover vulnerabilities, and strengthen defenses, all within a protected, fully authorized environment.',
  },
  {
    name: 'SplashZone',
    icon: GiWaterSplash,
    tagline: 'Make your first splash into hacking and exploration',
    description:
      'Perfect for first-time hackers and coding beginners. Build your first website or mobile app, create simple games, experiment with beginner-friendly AI tools, or try anything experimental and fun. Focus on learning, creativity, and growth rather than pressure.',
  },
]

function useVisibleCount() {
  const [visibleCount, setVisibleCount] = useState(1)

  useEffect(() => {
    const mediaQueries = [
      { query: window.matchMedia('(min-width: 1200px)'), count: 3 },
      { query: window.matchMedia('(min-width: 760px)'), count: 2 },
    ]

    const update = () => {
      const match = mediaQueries.find(({ query }) => query.matches)
      setVisibleCount(match ? match.count : 1)
    }

    update()
    mediaQueries.forEach(({ query }) => query.addEventListener('change', update))
    return () => mediaQueries.forEach(({ query }) => query.removeEventListener('change', update))
  }, [])

  return visibleCount
}

const Tracks = () => {
  const visibleCount = useVisibleCount()
  const [index, setIndex] = useState(0)
  const maxIndex = Math.max(0, TRACKS.length - visibleCount)

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex))
  }, [maxIndex])

  const goPrev = useCallback(
    () => setIndex((current) => (current === 0 ? maxIndex : current - 1)),
    [maxIndex],
  )
  const goNext = useCallback(
    () => setIndex((current) => (current >= maxIndex ? 0 : current + 1)),
    [maxIndex],
  )
  const goTo = useCallback((page) => setIndex(Math.min(maxIndex, Math.max(0, page))), [maxIndex])

  const pageCount = maxIndex + 1

  return (
    <section className="report-section tracks-section" id="tracks" aria-labelledby="tracks-title">
      <h2 id="tracks-title" className="report-section-title">
        Hack@URI 2026 Tracks
      </h2>
      <p className="tracks-section-intro report-section-prose">
        Six themed tracks let students explore health, AI, entrepreneurship, creativity, security,
        and beginner-friendly hacking.
      </p>

      <div
        className="tracks-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Hack@URI 2026 tracks"
      >
        <button
          type="button"
          className="tracks-carousel-arrow tracks-carousel-arrow--prev"
          onClick={goPrev}
          aria-label="Show previous tracks"
        >
          <FaChevronLeft aria-hidden="true" />
        </button>

        <div className="tracks-carousel-viewport">
          <ul
            className="tracks-carousel-track"
            style={{ '--carousel-index': index }}
            aria-live="polite"
          >
            {TRACKS.map((track) => {
              const Icon = track.icon
              return (
                <li key={track.name} className="tracks-section-card tracks-carousel-card">
                  <div className="tracks-section-card-header">
                    <span className="tracks-section-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <h3 className="tracks-section-name">{track.name}</h3>
                  </div>
                  <p className="tracks-section-tagline">{track.tagline}</p>
                  <p className="report-section-prose tracks-section-description">{track.description}</p>
                </li>
              )
            })}
          </ul>
        </div>

        <button
          type="button"
          className="tracks-carousel-arrow tracks-carousel-arrow--next"
          onClick={goNext}
          aria-label="Show next tracks"
        >
          <FaChevronRight aria-hidden="true" />
        </button>
      </div>

      <div className="tracks-carousel-dots" role="tablist" aria-label="Track carousel pages">
        {Array.from({ length: pageCount }, (_, page) => (
          <button
            key={page}
            type="button"
            role="tab"
            className="tracks-carousel-dot"
            aria-label={`Go to track page ${page + 1} of ${pageCount}`}
            aria-selected={index === page}
            onClick={() => goTo(page)}
          />
        ))}
      </div>
    </section>
  )
}

export default Tracks
