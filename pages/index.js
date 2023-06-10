/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Hero from '../components/Slice/LandingPage/Hero/hero'
import LogoShowcase from '../components/Slice/LandingPage/LogoShowcase/logoShowcase'
import Purpose from '../components/Slice/LandingPage/Purpose/purpose'
import ShowcaseA from '../components/Slice/LandingPage/ShowcaseA/showcaseA'
import OurWork from '../components/Slice/LandingPage/OurWorks/ourWorks'
import Stats from '../components/Slice/LandingPage/Stats/stats'

export default function Home() {


  return (
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
      <Hero />
      <LogoShowcase />
      <Purpose />
      <ShowcaseA />
      <OurWork />
      <Stats />
    </>
  )
}
