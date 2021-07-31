import {Fragment} from 'react'

export default function MainLayout ({ children }) {
  return (
    <Fragment>
      <div>
        Navbar
      </div>
      <div className="layout-container mx-auto p-2">
        {children}
      </div>
      <footer>
        Footer
      </footer>
    </Fragment>
  )
}