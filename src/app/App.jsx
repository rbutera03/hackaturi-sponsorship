import '../shared/styles/shared.css'
import '../shared/styles/section.css'
import { ImpactHero } from '../features/impact-hero'
import { OurStory } from '../features/our-story'
import { ByTheNumbers } from '../features/by-the-numbers'
import { WhySponsor } from '../features/why-sponsor'
import { TracksSection } from '../features/tracks'
import { Highlights } from '../features/highlights'
import { SponsorshipCta } from '../features/sponsorship-cta'

const App = () => (
  <div className="app">
    <main>
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

export default App
