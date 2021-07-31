import { useEffect } from 'react'
import '../styles/tailwind.scss'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    localStorage.setItem('theme', 'dark')
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <div className="mh-screen border-2 dark:bg-background dark:text-primary font-primary">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
