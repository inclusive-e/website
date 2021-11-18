import { Tiny, MainLayout, Divider, Text, Heading, SubHeading } from "./components";

export default function Home() {
  return (
    <MainLayout>
      <Divider />
      <div className="lg:w-9/12">
        <Tiny>
          Do good work.
        </Tiny>
        <Heading>
          Life advice looking through a window. Together.
        </Heading>
        <div className="md:w-10/12">
          <SubHeading>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </SubHeading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </Text>
        </div>
        <div className="lg:flex lg:flex-row">
          <div className="lg:flex-1 border-4 my-5 p-3 rounded-sm border-d-button-text border-opacity-30 lg:mr-3">
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
          <div className="lg:flex-1 border-4 my-5 p-3 rounded-sm border-d-button-text border-opacity-30">
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
      <Divider />
    </MainLayout>
  )
}
