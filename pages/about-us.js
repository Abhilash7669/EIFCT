import AboutHero from "../components/Slice/About/Hero/aboutHero";
import Leadership from "../components/Slice/About/Leadership/leadership";
import MissionVision from "../components/Slice/About/MV/missionVision";
import StatsB from "../components/Slice/About/Stats/statsB";
import Head from 'next/head'



export default function AboutUs() {
    return(
        <>
        <Head>
            {/* <!-- Primary Meta Tags --> */}
            <title>EnhanceIndiaFoundation</title>
            <meta name="title" content="EnhanceIndiaFoundation" />
            <meta name="description" content="We believe that every person deserves the opportunity to live a life of dignity and purpose, and it is our goal to help make this a reality for as many people as possible." />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://metatags.io" />
            <meta property="og:title" content="EnhanceIndiaFoundation" />
            <meta property="og:description" content="We believe that every person deserves the opportunity to live a life of dignity and purpose, and it is our goal to help make this a reality for as many people as possible." />
            <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://metatags.io" />
            <meta property="twitter:title" content="EnhanceIndiaFoundation" />
            <meta property="twitter:description" content="We believe that every person deserves the opportunity to live a life of dignity and purpose, and it is our goal to help make this a reality for as many people as possible." />
            <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"></meta>

            {/* favicon */}
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest"></link>
        </Head>
            <AboutHero />
            <MissionVision />
            <StatsB />
            <Leadership />
        </>
    )
}