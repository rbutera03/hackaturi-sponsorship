import PlaceholderImage from '../../shared/components/PlaceholderImage.jsx'
import './TracksSection.css'

const TRACKS = [
  {
    name: 'Hack to Health',
    tagline: 'Technology for better care and well-being',
    description:
      'Build solutions that improve patient outcomes and streamline health services. Create wearables for health monitoring, telemedicine platforms for underserved communities, accessibility apps, or health data dashboards.',
  },
  {
    name: 'Neural Tide',
    tagline: 'AI-powered startups, technical projects, and compute-intensive experiments',
    description:
      'Choose between launching an AI-native startup with an emphasis on validation and scalability, developing a focused AI project that demonstrates strong engineering or creative application, or leveraging high-performance hardware for advanced AI workloads. Designed for teams interested in applying AI to real problems through strong execution, technical depth, and experimentation.',
  },
  {
    name: "Ocean's Edge Ventures",
    tagline: 'Build tools to help ideas and businesses set sail',
    description:
      'Build tech for entrepreneurship and business growth. Create platforms connecting small businesses to customers, financial literacy apps, e-commerce solutions, or market analysis dashboards.',
  },
  {
    name: 'Creative Currents',
    tagline: 'Shining light on creative, expressive, interactive tech',
    description:
      'Fuse art, design, and technology to push creative boundaries. Build interactive art installations, generative music platforms, AR/VR experiences, or accessibility tools for creative expression. Welcome to all majors beyond "just code."',
  },
  {
    name: 'Safe Harbor',
    tagline: 'Explore, test, and secure within trusted waters',
    description:
      'Chart a course through the world of ethical hacking. Probe systems responsibly, discover vulnerabilities, and strengthen defenses, all within a protected, fully authorized environment. Tackle web exploits, break misconfigurations, analyze binaries, test authentication flows, or uncover hidden weaknesses in networks.',
  },
  {
    name: 'SplashZone',
    tagline: 'Make your first splash into hacking and exploration',
    description:
      'Perfect for first-time hackers and coding beginners. Build your first website or mobile app, create simple games, experiment with beginner-friendly AI tools, or try anything experimental and fun. Focus on learning, creativity, and growth rather than pressure.',
  },
]

const TracksSection = () => (
  <section className="report-section tracks-section" id="tracks" aria-labelledby="tracks-title">
    <p className="report-section__eyebrow">2026 tracks</p>
    <h2 id="tracks-title" className="report-section__title">
      Where participants built
    </h2>
    <div className="report-section__media report-section__media--flush-top">
      <PlaceholderImage label="Tracks overview or judging floor" shape="wide" />
    </div>
    <ul className="tracks-section__grid">
      {TRACKS.map((track) => (
        <li key={track.name} className="tracks-section__card">
          <div className="tracks-section__card-media">
            <PlaceholderImage label={`${track.name} — project photo`} shape="square" />
          </div>
          <div className="tracks-section__card-copy">
            <h3 className="tracks-section__name">{track.name}</h3>
            <p className="tracks-section__tagline">{track.tagline}</p>
            <p className="tracks-section__description">{track.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>
)

export default TracksSection
