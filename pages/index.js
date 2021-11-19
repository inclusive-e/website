import { Tiny, MainLayout, Divider, Text, Heading, SubHeading, Button } from "components";
import { Form } from "containers";

export default function Home() {
  return (
    <MainLayout>
      <div className="text-center border-dashed border mt-3 mb-6">
        <Text>
          Navbar
        </Text>
      </div>
      <div className="lg:flex lg:flex-row">
        <div className="lg:flex-1">
          <Text>
            PMF image
          </Text>
        </div>
        <div className="lg:flex-1">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </Text>
          <div className="mt-5">
            <Tiny>
              We Are Hiring!
            </Tiny>
          </div>
        </div>
      </div>
      <div className="my-6">
        <Divider />
      </div>
      <div className="lg:w-9/12">
        <Tiny>
          Do good work.
        </Tiny>
        <Heading>
          Life advice looking through a window. Together.
        </Heading>
        <div className="md:w-10/12">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </Text>
        </div>
        <div className="lg:flex lg:flex-row">
          <div className="lg:flex-1 border-3 my-5 p-3 rounded-sm border-d-button-text border-opacity-30 lg:mr-3">
            <div className="pb-3">
              <Tiny>
                At Core
              </Tiny>
            </div>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </Text>
          </div>
          <div className="lg:flex-1 border-3 my-5 p-3 rounded-sm border-d-button-text border-opacity-30">
            <div className="pb-3">
              <Tiny>
                Beyond Core
              </Tiny>
            </div>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </Text>
          </div>
        </div>
        <div className="md:w-10/12">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <span className="text-d-accent underline">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</span>
          </Text>
        </div>
      </div>
      <div className="my-6">
        <Divider />
      </div>
      <div className="md:w-8/12 mx-auto">
        <div className="text-center">
          <SubHeading>
            Lorem ipsum dolor sit amet, <br/> consectetur.
          </SubHeading>
          <Tiny>
            Lorem Ipsum si dolor.
          </Tiny>
          <div className="my-3">
            <Form />
          </div>
          <div>
            <Button>
              Get In touch
            </Button>
            <Tiny>Lorem ipsum si.</Tiny>
          </div>
        </div>
      </div>
      <div className="my-6">
        <Divider />
      </div>
      <div className="border py-8">
        <Text>
          footer
        </Text>
      </div>
    </MainLayout>
  )
}
