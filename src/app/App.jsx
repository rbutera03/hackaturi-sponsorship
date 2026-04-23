import '../shared/styles/shared.css'
import '../shared/styles/section.css'
import { Header } from '../features/layout'
import { ImpactHero } from '../features/impact-hero'
import { OurStory } from '../features/our-story'
import { ByTheNumbers } from '../features/by-the-numbers'
import { WhySponsor } from '../features/why-sponsor'
import { TracksSection } from '../features/tracks'
import { Highlights } from '../features/highlights'
import { SponsorshipCta } from '../features/sponsorship-cta'

/** Set true to show the nav header, top wave, and matching main offset / scroll-padding. */
const SHOW_HEADER = false

const App = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`app${SHOW_HEADER ? ' app--with-header' : ''}`}>
      {SHOW_HEADER && <Header scrollToSection={scrollToSection} />}
      <main className="sponsorship-main">
        <ImpactHero />
        <OurStory />
        <ByTheNumbers />
        <WhySponsor />
        <TracksSection />
        <Highlights />
        <SponsorshipCta />
      </main>
    </div>
  )
}

export default App
