export default ({children, ...props}) => {
  return (
    <button className="py-3 px-5 dark:bg-d-button-background dark:text-d-button-text hover:outline-accent font-bold rounded-sm" {...props}>
      {children}
    </button>
  )
}