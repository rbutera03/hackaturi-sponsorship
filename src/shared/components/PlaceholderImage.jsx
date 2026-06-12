import './PlaceholderImage.css'

/**
 * Visual placeholder or photo frame with consistent aspect ratios.
 * @param {'wide'|'standard'|'tall'|'square'} shape — Controls aspect ratio
 */
const PlaceholderImage = ({
  label = 'Image placeholder',
  shape = 'standard',
  className = '',
  src,
  alt,
}) => {
  const classNames = `placeholder-image placeholder-image--${shape} ${
    src ? 'placeholder-image--photo' : ''
  } ${className}`.trim()

  if (src) {
    return (
      <div className={classNames}>
        <img className="placeholder-image-img" src={src} alt={alt ?? label} loading="lazy" />
      </div>
    )
  }

  return (
    <div className={classNames} role="img" aria-label={label}>
      <span className="placeholder-image-inner" aria-hidden>
        <span className="placeholder-image-icon" />
        <span className="placeholder-image-label">{label}</span>
      </span>
    </div>
  )
}

export default PlaceholderImage
