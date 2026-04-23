// src/app/App.jsx
// Root sponsorship report shell composing all feature sections.

import '../shared/styles/shared.css'
import '../shared/styles/section.css'
import { Header } from '../features/layout'
import { ImpactHero } from '../features/impact-hero'
import { OurStory } from '../features/our-story'
import { ByTheNumbers } from '../features/by-the-numbers'
import { WhySponsor } from '../features/why-sponsor'
import { Tracks } from '../features/tracks'
import { Highlights } from '../features/highlights'
import { SponsorshipCta } from '../features/sponsorship-cta'

/** Set true to show the nav header, top wave, and matching main offset / scroll-padding. */
const SHOW_HEADER = false

const App = () => {
  // Shared in-page navigation helper used by the optional header.
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`app${SHOW_HEADER ? ' app--with-header' : ''}`}>
      {/* Optional fixed header for section navigation */}
      {SHOW_HEADER && <Header scrollToSection={scrollToSection} />}
      <main className="sponsorship-main">
        {/* Sponsorship report sections */}
        <ImpactHero />
        <OurStory />
        <ByTheNumbers />
        <WhySponsor />
        <Tracks />
        <Highlights />
        <SponsorshipCta />
      </main>
    </div>
  )
}

export default App
