import { FormInput, Button, Tiny } from "components"
import { Arrow } from "styles/icons"

const Form = () => {
  return (
    <div>
      <div className="my-3">
        <FormInput placeholder="Name *" />
      </div>
      <div className="my-3">
        <FormInput placeholder="Email *" />
      </div>
      <div className="my-3">
        <FormInput placeholder="Phone Number" />
      </div>
      <div className="my-3">
        <textarea placeholder="Brief us more about your idea!" className="dark:bg-d-button-background dark:text-d-button-text focus:outline-accent rounded-sm p-3 w-full lg:w-6/12" style={{minHeight: 120}} />
      </div>
      <div className="my-5">
        <Button>
          <div className="flex">
            <div className="mr-10">Get In Touch</div>
            <div>
              <Arrow />
            </div>
          </div>
        </Button>
        <div className="mt-3">
          <Tiny>
            We've got your back. 🚀
          </Tiny>
        </div>
      </div>
    </div>
  )
}

export default Form