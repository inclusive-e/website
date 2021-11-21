export default ({ children, ...props }) => {
  return (
    <div className="main-layout-container mx-auto py-3" {...props}>
      {children}
    </div>
  )
}