const Tagline = ({text, alt = false}) => {
  const className = 'font-medium font-secondary heading '.concat(alt ? 'dark:text-accent' : 'dark:text-primary')
  return (
    <h1 className={className}>
      {text}
    </h1>
  )
}

export default Tagline