export default ({ children, ...props }) => {
  return (
    <div className="main-layout-container mx-auto py-1" {...props}>
      {children}
    </div>
  )
}