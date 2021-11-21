export default ({children, ...props}) => {
  return (
    <p className="text-base xl:text-xl dark:text-d-secondary-text" {...props}>
      {children}
    </p>
  )
}