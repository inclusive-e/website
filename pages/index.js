import Link from 'next/link'
import { Tiny, MainLayout, Divider, Text, Heading, SubHeading } from "components";
import { Form } from "containers";

export default function Home() {
  return (
    <MainLayout>
      <div className="text-center border-dashed border mt-3 mb-6">
        <Tiny>
          Time | Portfolio.pdf 
        </Tiny>
      </div>
      <div className="lg:flex lg:flex-row">
        <div className="lg:flex-1">
          <Text>
            PMF image
          </Text>
        </div>
        <div className="lg:flex-1">
          <Text>
            Together, We witness our generation and our times. The <b><span className="line-through" style={{textDecorationThickness:4}}>idea</span> <u>work being done here</u></b> is to bring together <b><i>diverse creators like you</i></b>, see what we can do to create & curate better, and thrive to become more <b className="dark:text-d-accent font-secondary"><i>inclusive</i></b> in everything that we do.
          </Text>
          <div className="mt-5">
            <Tiny alt link>
              <u className="cursor-pointer">Siu, Lorem Ipsum si</u> 👋
            </Tiny>
          </div>
        </div>
      </div>
      <div className="my-10">
        <Divider />
      </div>
      <div className="lg:w-9/12">
        <div className="my-5">
          <Tiny alt>
            Do Good Work.
          </Tiny>
        </div>
        <div className="my-5">
          <Heading>
            Let's build a product market-fit, <span className="text-d-accent">Together.</span>
          </Heading>
        </div>
        <div className="md:w-10/12">
          <div className="my-5">
            <Text>
              We <b className="dark:text-d-primary-text">collaborate and work closely</b> with fast-paced startups, process driven organizations, bold and ambitious folks, like you.
            </Text>
          </div>
          <Text>
            We are <b className="dark:text-d-primary-text font-secondary">Product Engineers, Designers and Strategists.</b>
          </Text>
          <div className="my-5">
            <Text>
              Our deliberate pursuit states that, <b>A right amount of technology when backed up by effective design systems</b>, is the minimum needed to create best-in-class products, that seamlessly blend <Link href="/" passHref><a className="underline"> form and function</a></Link>.
            </Text>
          </div>
        </div>
        <div className="lg:flex lg:flex-row">
          <div className="lg:flex-1 border-3 my-5 p-5 rounded-sm border-d-button-text border-opacity-30 lg:mr-5">
            <Tiny alt>
              At Core
            </Tiny>
            <div className="my-5">
              <Text>
                From core React & Vue.js, to Performance first JAMStack architecture built frameworks NextJs, Gatbsy and NuxtJs, that leverage the power of Static site generators, Markups, Headless CMS systems and CDN.
              </Text>
            </div>
            <Text>
              <span className="dark:text-d-primary-text font-secondary font-bold">Building Accessible and Progressive Web Apps.</span>
            </Text>
          </div>
          <div className="lg:flex-1 border-3 my-5 p-5 rounded-sm border-d-button-text border-opacity-30">
            <Tiny alt>
              Beyond Core
            </Tiny>
            <div className="my-5">
              <Text>
                Be it OS & Infrastructure level virtualization(s), automating your app(s) using Continuous Integration and Development, or generating cloud first strategies ensuring maximum scalability at minimum cost.
              </Text>
            </div>
            <Text>
              <span className="dark:text-d-primary-text font-secondary font-bold">
                We take care of your end-to-end software migrations to cloud.
              </span>
            </Text>
          </div>
        </div>
        <div className="md:w-10/12">
          <div className="my-5">
            <Text>
              We're your product's first users, a team of advisors helping you prioritize enablers and blockers, and a call-to-action integrated development team hell-bent on turning your ideas to favorable outcomes.
            </Text>
          </div>
          <Text>
            With close to half a decade of experience working with both domestic and global startups and organizations, <span className="dark:text-d-primary-text font-bold">Learning from them, Building with them,</span> <Link passHref href="/"><a className="text-d-accent underline font-bold">check out some of the work, experience, expertise, and how we can collaborate.</a></Link> 🤝
          </Text>
        </div>
      </div>
      <div className="my-10">
        <Divider />
      </div>
      <div className="md:w-9/12 mx-auto">
        <div className="text-center">
          <div className="lg:w-8/12 mx-auto">
            <SubHeading>
              <div className="font-secondary font-medium">
                Ideate, Develop, Optimize or Amplify your product.
              </div>
            </SubHeading>
            <div className="my-3">
              <Tiny alt>
                Let's Work Together.
              </Tiny>
            </div>
          </div>
          <div className="my-5">
            <Form />
          </div>          
        </div>
      </div>
      <div className="my-10">
        <Divider />
      </div>
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="order-1 lg:order-0 mt-5 lg:mt-0">
            <Tiny>We start, then, with nothing ...</Tiny>
            <div className="mt-1 dark:text-d-primary-text underline" style={{textDecorationColor:'#4DEEE2', textDecorationThickness: 3}}>
              Powered By Inclusive
            </div>
          </div>
          <div className="order-0 lg:order-1">
            <Text>// icons</Text>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
