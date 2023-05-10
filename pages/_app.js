import '../styles/globals.css'
import '../styles/landing/landing.css'
import '../styles/landing/logoShowcase.css'
import '../styles/landing/purpose.css'
import '../styles/landing/showcaseA.css'
import '../styles/landing/works.css'
import '../styles/landing/stat.css'

import '../styles/about/abouthero.css'
import '../styles/about/missionvision.css'
import '../styles/about/statsB.css'
import '../styles/about/leadership.css'

import '../styles/endeavours/ehero.css'


import '../styles/header.css'
import Header from '../components/header'

export default function App({ Component, pageProps }) {
  return(
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
