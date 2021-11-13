import {Fragment} from 'react'

export default function MainLayout ({ children }) {
  return (
    <Fragment>
      <div className="main-layout-container mx-auto">
        {children}
      </div>
    </Fragment>
  )
}