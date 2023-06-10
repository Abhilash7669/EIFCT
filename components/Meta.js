import Head from "next/head";


export default function Meta() {
    return(
        <>
        <Head>
                {/* <!-- Primary Meta Tags --> */}
        <title>Enhance India Foundation</title>
        <meta name="title" content="Enhance India Foundation" />
        <meta name="description" content="We believe that every person deserves the opportunity to live a life of dignity and purpose, and it is our goal to help make this a reality for as many people as possible." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://enhanceindiafoundation.com/" />
        <meta property="og:title" content="Enhance India Foundation" />
        <meta property="og:description" content="We believe that every person deserves the opportunity to live a life of dignity and purpose, and it is our goal to help make this a reality for as many people as possible." />
        <meta property="og:image" content="/meta-img.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://enhanceindiafoundation.com/" />
        <meta property="twitter:title" content="Enhance India Foundation" />
        <meta property="twitter:description" content="We believe that every person deserves the opportunity to live a life of dignity and purpose, and it is our goal to help make this a reality for as many people as possible." />
        <meta property="twitter:image" content="/meta-img.png" />
        {/* FAVICON */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link> 
        </Head>
        </>
    )
}