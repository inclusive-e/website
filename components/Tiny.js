import classNames from "classnames"

export default ({children, ...props}) => {
  const className = classNames('text-tiny font-bold', {
    'dark:text-d-accent': props.alt,
    'dark:text-d-secondary-text': !props.alt
  })
  
  return (
    <p className={className} {...props}>
      {children}
    </p>
  )
}