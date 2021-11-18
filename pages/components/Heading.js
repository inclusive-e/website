export default ({ children, ...props}) => {
  return (
    <h1 className="font-secondary font-medium text-heading md:text-heading-md xl:text-heading-xl dark:text-d-accent" {...props}>
      {children}
    </h1>
  )
}