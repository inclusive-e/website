export default ({children, ...props}) => {
  return (
    <p className="dark:text-d-secondary-text text-tiny font-bold" {...props}>
      {children}
    </p>
  )
}