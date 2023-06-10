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
import '../styles/awards/awards.css'

import '../styles/contact.css'


import '../styles/header.css'
import '../styles/footer.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Head from '../components/head'

export default function App({ Component, pageProps }) {
  return(
    <>
    <Head>
            {/* <!-- Primary Meta Tags --> */}
            <title>EnhanceIndiaFoundation</title>
            <meta name="title" content="EnhanceIndiaFoundation" />
            <meta name="description" content="We believe that every person deserves the opportunity to live a life of dignity and purpose, and it is our goal to help make this a reality for as many people as possible." />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://enhanceindiafoundation.com" />
            <meta property="og:title" content="EnhanceIndiaFoundation" />
            <meta property="og:description" content="We believe that every person deserves the opportunity to live a life of dignity and purpose, and it is our goal to help make this a reality for as many people as possible." />
            <meta property="og:image" content="/meta-img.png" />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://enhanceindiafoundation.com" />
            <meta property="twitter:title" content="EnhanceIndiaFoundation" />
            <meta property="twitter:description" content="We believe that every person deserves the opportunity to live a life of dignity and purpose, and it is our goal to help make this a reality for as many people as possible." />
            <meta property="twitter:image" content="/meta-img.png"></meta>

            {/* favicon */}
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest"></link>
        </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
