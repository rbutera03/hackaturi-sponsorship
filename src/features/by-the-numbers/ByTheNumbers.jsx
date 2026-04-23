// src/features/by-the-numbers/ByTheNumbers.jsx
// Metric bar summarizing impact numbers from Hack@URI 2026.

import './ByTheNumbers.css'

const STATS = [
  { 
    value: '200+', 
    label: 'Participants', 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 
  },
  { 
    value: '30+', 
    label: 'Universities', 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg> 
  },
  { 
    value: '40', 
    label: 'Projects submitted', 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg> 
  },
  { 
    value: '6', 
    label: 'Tracks', 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg> 
  },
  { 
    value: '12', 
    label: 'Prizes awarded', 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg> 
  },
]

const ByTheNumbers = () => (
  <section className="by-the-numbers-impact" id="by-the-numbers">
    <ul className="by-the-numbers-stats-list">
      {STATS.map(({ value, label, icon }) => (
        <li key={label} className="by-the-numbers-stat-item">
          <div className="by-the-numbers-icon">{icon}</div>
          <span className="by-the-numbers-stat-value">{value}</span>
          <span className="by-the-numbers-stat-label">{label}</span>
        </li>
      ))}
    </ul>
  </section>
)

export default ByTheNumbers