import {Fragment} from 'react'

export default function MainLayout ({ children }) {
  return (
    <Fragment>
      {/* <div>
        Navbar
      </div> */}
      <div className="layout-container mx-auto">
        {children}
      </div>
      {/* <footer>
        Footer
      </footer> */}
    </Fragment>
  )
}