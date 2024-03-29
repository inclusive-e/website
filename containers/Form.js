import { useRef, useState } from "react"
import emailjs from "emailjs-com"
import { FormInput, Button, Tiny, Loading } from "components"
import { Arrow } from "styles/icons"

const Form = () => {
  const form = useRef()
  const [isLoading, setIsLoading] = useState(false)
  const [user_name, setName] = useState("")
  const [user_email, setEmail] = useState("")
  const [user_phone, setPhone] = useState("")
  const [project_brief, setBrief] = useState("")

  const resetForm = () => {
    setName("")
    setEmail("")
    setPhone("")
    setBrief("")
  }

  const handleSubmit = e => {
    e.preventDefault()
    setIsLoading(true)
    emailjs
      .send(
        "service_nlsipdi",
        "template_n5axuqh",
        { user_name, user_email, user_phone, project_brief },
        "user_y1MFhHq4A3Md1wyH4WHdL"
      )
      .then(
        result => {
          if (result.text.toLocaleLowerCase() === "ok") {
            setIsLoading(false)
            resetForm()
          }
        },
        error => {
          setIsLoading(false)
          console.log("Email send error:", error.text)
        }
      )
  }

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <div className="my-3">
        <FormInput
          placeholder="Name *"
          name="user_name"
          value={user_name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div className="my-3">
        <FormInput
          placeholder="Email *"
          type="email"
          name="user_email"
          value={user_email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="my-3">
        <FormInput
          placeholder="Phone Number"
          name="user_number"
          value={user_phone}
          onChange={e => {
            if (RegExp("^[0-9]*$").test(e.target.value)) {
              return setPhone(e.target.value)
            }
          }}
        />
      </div>
      <div className="my-3">
        <textarea
          placeholder="Ideas matter, we're a product of one. Tell us all about it."
          value={project_brief}
          name="project_brief"
          onChange={e => setBrief(e.target.value)}
          className="dark:bg-d-button-background dark:text-d-button-text focus:outline-accent rounded-sm p-3 w-full lg:w-6/12"
          style={{ minHeight: 120 }}
        />
      </div>
      <div className="my-5">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <div style={{ margin: "8px 42px" }}>
              <Loading />
            </div>
          ) : (
            <div className="flex space-x-4">
              <div>Get In Touch</div>
              <div>
                <Arrow />
              </div>
            </div>
          )}
        </Button>
        <div className="mt-3">
          <Tiny>We've got your back. 🚀</Tiny>
        </div>
      </div>
    </form>
  )
}

export default Form
