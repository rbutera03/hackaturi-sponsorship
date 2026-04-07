import './PlaceholderImage.css'

/**
 * Visual placeholder for photography or graphics to be added later.
 * @param {'wide'|'standard'|'tall'|'square'} shape — Controls aspect ratio
 */
const PlaceholderImage = ({ label = 'Image placeholder', shape = 'standard', className = '' }) => (
  <div
    className={`placeholder-image placeholder-image--${shape} ${className}`.trim()}
    role="img"
    aria-label={label}
  >
    <span className="placeholder-image__inner" aria-hidden>
      <span className="placeholder-image__icon" />
      <span className="placeholder-image__label">{label}</span>
    </span>
  </div>
)

export default PlaceholderImage
