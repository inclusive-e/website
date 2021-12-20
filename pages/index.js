import Link from "next/link"
import {
  Tiny,
  MainLayout,
  Divider,
  Text,
  Heading,
  SubHeading,
  Time,
} from "components"
import { Form } from "containers"
import {
  ApolloGraphQL,
  AWS,
  Docker,
  Firebase,
  Gatsby,
  GoogleCloud,
  GraphQL,
  JAMStack,
  MongoDb,
  NextJs,
  NodeJs,
  NuxtJs,
  React,
  Vue,
} from "styles/icons/stack"
import { Roadmap, Amplify, Build, Tailored } from "styles/icons/stages"
import { Github, Gmail, LinkedIn, Twitter } from "styles/icons/social"
import { Flow } from "styles/icons"

export default function Home() {
  return (
    <MainLayout>
      <div className="text-center mt-3 mb-10">
        <div className="flex flex-row justify-between items-center">
          <div>
            <Tiny>
              <div className="dark:text-d-primary-text">
                🇮🇳 <Time />
              </div>
            </Tiny>
          </div>
          <div>
            <Tiny alt>
              <u className="cursor-pointer">Our Portfolio</u>
            </Tiny>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:flex-1 order-1 lg:order-0">
          <div className="banner-img">
            <Flow />
          </div>
          <div className="mt-3">
            <Tiny>
              Don’t just design the product and build the whole thing.
            </Tiny>
            <Text>
              <span className="font-bold dark:text-d-primary-text">
                Ship often. Get early feedback. Iterate{" "}
                <span
                  className="line-through dark:text-d-secondary-text"
                  style={{ textDecorationThickness: 4 }}
                >
                  quickly
                </span>{" "}
                wisely.
              </span>
            </Text>
          </div>
        </div>
        <div className="lg:flex-1 order-0 lg:order-1">
          <Text>
            Together, We witness our generation and our times. The{" "}
            <b className="dark:text-d-primary-text">
              <span
                className="line-through"
                style={{ textDecorationThickness: 4 }}
              >
                idea
              </span>{" "}
              work being done here
            </b>{" "}
            is to bring together{" "}
            <b className="dark:text-d-primary-text">
              <i>diverse creators like you</i>
            </b>
            , see what we can do to create & curate better, and thrive to become
            more{" "}
            <b className="dark:text-d-accent font-secondary">
              <i>inclusive</i>
            </b>{" "}
            in everything that we do.
          </Text>
          <div className="my-5">
            <Tiny alt>
              <Link href="#contact">
                <u className="cursor-pointer">Come work with us.</u>
              </Link>{" "}
              👋
            </Tiny>
          </div>
        </div>
      </div>
      <div className="my-10">
        <Divider />
      </div>
      <div className="lg:w-9/12">
        <Tiny alt>Do Good Work.</Tiny>
        <div className="my-5">
          <Heading>
            Let's build a Product-Market Fit,{" "}
            <span className="text-d-accent">Together.</span>
          </Heading>
        </div>
        <div className="md:w-10/12">
          <div className="my-5">
            <Text>
              We{" "}
              <b className="dark:text-d-primary-text">
                collaborate and work closely
              </b>{" "}
              with fast-paced startups, process driven organizations, bold and
              ambitious folks, like you.
            </Text>
          </div>
          <Text>
            We are{" "}
            <b className="dark:text-d-primary-text font-secondary">
              Product Engineers, Designers and Strategists.
            </b>
          </Text>
          <div className="mt-5 mb-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="flex p-3 flex-col items-center rounded-sm dark:bg-d-button-background dark:bg-opacity-30">
              <Roadmap />
              <div className="text-center">
                <Tiny>Project Roadmaps</Tiny>
              </div>
            </div>
            <div className="flex p-3 flex-col justify-center items-center rounded-sm dark:bg-d-button-background dark:bg-opacity-30">
              <Build />
              <div className="text-center">
                <Tiny>Build Digital Products</Tiny>
              </div>
            </div>
            <div className="flex p-3 flex-col justify-center items-center rounded-sm dark:bg-d-button-background dark:bg-opacity-30">
              <Amplify />
              <div className="text-center">
                <Tiny>Amplify Performance</Tiny>
              </div>
            </div>
            <div className="flex p-3 flex-col justify-center items-center rounded-sm dark:bg-d-button-background dark:bg-opacity-30">
              <Tailored />
              <div className="text-center">
                <Tiny>Tailored-made Solutions</Tiny>
              </div>
            </div>
          </div>
          <div className="my-5">
            <Text>
              Our deliberate pursuit states that,{" "}
              <b>
                A right amount of technology when backed up by effective design
                systems
              </b>
              , is the minimum needed to create best-in-class products, that
              seamlessly blend{" "}
              <Link
                href="https://en.wikipedia.org/wiki/Form_follows_function"
                passHref
              >
                <a target="_blank" className="underline">
                  {" "}
                  form and function
                </a>
              </Link>
              .
            </Text>
          </div>
        </div>
        <div className="lg:flex lg:flex-row">
          <div className="lg:flex-1 border-3 my-5 p-5 rounded-sm border-d-button-text border-opacity-30 lg:mr-5">
            <Tiny alt>At Core</Tiny>
            <div className="my-5">
              <Text>
                From core React & Vue.js, to Performance first JAMStack
                architecture built frameworks NextJs, Gatbsy and NuxtJs, that
                leverage the power of Static site generators, CDN, Headless CMS
                systems & Markups.
              </Text>
            </div>
            <div className="mb-8">
              <Text>
                <span className="dark:text-d-primary-text font-secondary font-bold">
                  Building Accessible and Progressive Web Apps.
                </span>
              </Text>
            </div>
            <div className="flex flex-row space-x-3 md:space-x-4">
              <React />
              <Vue />
              <Gatsby />
              <NextJs />
              <NuxtJs />
              <GraphQL />
              <JAMStack />
            </div>
          </div>
          <div className="lg:flex-1 border-3 my-5 p-5 rounded-sm border-d-button-text border-opacity-30">
            <Tiny alt>Beyond Core</Tiny>
            <div className="my-5">
              <Text>
                Be it server-side systems, OS & Infrastructure level
                virtualization(s), automating your app(s) using Continuous
                Integration and Development, or generating cloud first
                strategies <u>ensuring maximum scalability at minimum cost</u>.
              </Text>
            </div>
            <div className="mb-8">
              <Text>
                <span className="dark:text-d-primary-text font-secondary font-bold">
                  We take care of your end-to-end Server, DevOps and Cloud
                  solutions.
                </span>
              </Text>
            </div>
            <div className="flex flex-row space-x-3 md:space-x-4">
              <AWS />
              <GoogleCloud />
              <Docker />
              <Firebase />
              <MongoDb />
              <NodeJs />
              <ApolloGraphQL />
            </div>
          </div>
        </div>
        <div className="md:w-10/12">
          <div className="my-5">
            <SubHeading>
              <div className="border-l-4 dark:border-d-button-background pl-3 md:pl-5 font-secondary font-medium dark:text-d-primary-text">
                We're your product's first users, a team of advisors helping you
                prioritize enablers and blockers, and a call-to-action
                integrated development team hell-bent on turning your ideas to
                favorable outcomes.
              </div>
            </SubHeading>
          </div>
          <Text>
            With close to half a decade of experience working with both domestic
            and global startups and organizations,{" "}
            <span className="dark:text-d-primary-text font-bold">
              Learning from them, Building with them,
            </span>{" "}
            <Link passHref href="/">
              <a className="text-d-accent underline font-bold">
                check out some of the work, experience, expertise, and how we
                can collaborate.
              </a>
            </Link>{" "}
            🤝
          </Text>
        </div>
      </div>
      <div className="my-10">
        <Divider />
      </div>
      <div className="md:w-9/12 mx-auto" id="contact">
        <div className="text-center">
          <div className="lg:w-8/12 mx-auto">
            <SubHeading>
              <div className="font-secondary font-medium">
                Ideate, Develop, Optimize or Amplify your product.
              </div>
            </SubHeading>
            <div className="my-3">
              <Tiny alt>Let's Work Together.</Tiny>
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
          <div className="order-1 lg:order-0 mt-8 lg:mt-0">
            <Tiny>We start, then, with nothing ...</Tiny>
            <div
              className="mt-1 dark:text-d-primary-text underline"
              style={{
                textDecorationColor: "#4DEEE2",
                textDecorationThickness: 3,
              }}
            >
              Powered By Inclusive
            </div>
          </div>
          <div className="order-0 lg:order-1">
            <div className="flex flex-row space-x-4">
              <Link href="/" passHref>
                <a target="_blank">
                  <LinkedIn />
                </a>
              </Link>
              <Link href="/" passHref>
                <a target="_blank">
                  <Twitter />
                </a>
              </Link>
              <Link href="/" passHref>
                <a target="_blank">
                  <Github />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
