import { Link } from 'react-router-dom'

function Hero({
  title,
  subtitle,
  image,
  imageAlt = 'Hero image',
  eyebrow,
  showButton = false,
  buttonText = 'Ver mas',
  buttonHref = '#catalogo',
  buttonTo,
  heightClass = 'min-h-[24rem]',
  containerClassName = '',
  imageClassName = '',
  overlayClassName = 'bg-black/30'
}) {
  const sectionClassName = `relative w-full overflow-hidden ${heightClass} ${containerClassName}`.trim()
  const imageClasses = `w-full h-full object-cover ${imageClassName}`.trim()
  const overlayClasses = `absolute inset-0 ${overlayClassName}`.trim()

  return (
    <section className={sectionClassName}>

      {image ? (
        <img
          src={image}
          alt={imageAlt}
          className={imageClasses}
        />
      ) : (
        <div className="absolute inset-0 bg-base-200"></div>
      )}

      <div className={overlayClasses}></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        {eyebrow && <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/80">{eyebrow}</p>}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide mb-3">{title}</h1>
        <p className="text-lg md:text-2xl text-white/90 max-w-2xl">
          {subtitle}
        </p>
        {showButton && (
          buttonTo ? (
            <Link
              to={buttonTo}
              className="mt-8 inline-flex items-center rounded-full border border-white/70 bg-white/15 px-6 py-2 text-sm md:text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/25"
            >
              {buttonText}
            </Link>
          ) : (
            <a
              href={buttonHref}
              className="mt-8 inline-flex items-center rounded-full border border-white/70 bg-white/15 px-6 py-2 text-sm md:text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/25"
            >
              {buttonText}
            </a>
          )
        )}
      </div>

    </section>
  )
}

export default Hero