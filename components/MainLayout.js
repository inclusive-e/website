import { Fragment } from "react"
import Link from "next/link"

const MainLayout = ({ children, ...props }) => {
  return (
    <Fragment>
      <div className="dark:bg-d-accent font-secondary p-2 md:text-center top-tooltip">
        Our entire budget and time went into building for our clients. We're
        growing, along with you!{" "}
        <span className="">
          Contact{" "}
          <Link href="#contact" passHref>
            <u className="cursor-pointer font-bold">team@atinclusive.com →</u>
          </Link>
        </span>
      </div>
      <div className="main-layout-container mx-auto py-3" {...props}>
        {children}
      </div>
    </Fragment>
  )
}

export default MainLayout
