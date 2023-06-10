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
      <Hero />
      <LogoShowcase />
      <Purpose />
      <ShowcaseA />
      <OurWork />
      <Stats />
    </>
  )
}
