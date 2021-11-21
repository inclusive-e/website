import classNames from "classnames"

export default ({ children, ...props}) => {
  const className = classNames('font-secondary font-medium text-heading md:text-heading-md xl:text-heading-xl', {
    'dark:text-d-accent': props.alt,
    'dark:text-d-primary-text': !props.alt
  })

  return (
    <h1 className={className} {...props}>
      {children}
    </h1>
  )
}