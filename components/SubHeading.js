export default ({ children, ...props}) => {
  return (
    <h3 className="text-sub-heading md:text-sub-heading-md xl:text-sub-heading-xl dark:text-d-primary-text" {...props}>
      {children}
    </h3>
  )
}