const FormInput = ({value, onChange, placeholder, ...props}) => {
  return (
    <input
      className="dark:bg-d-button-background dark:text-d-button-text focus:outline-accent rounded-sm p-3 w-full lg:w-6/12"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}

export default FormInput