/* eslint-disable @next/next/no-img-element */


export default function Hero() {

    // data
    let hero_Description = ' We believe that every person deserves the opportunity to live a life of dignity and purpose, and it is our goal to help make this a reality for as many people as possible.'

    return(
        <main className='hero'>
            <video src='/Landing/heroVid.mp4' autoPlay="true" muted="true" loop="true" 
                          height="100%" width="100%" disableRemotePlayback
                          style={{position:'absolute', top:'0', left:'0', height:'100%', width: '100%', objectFit:'cover',zIndex:'-900'}} />
            <div className='hero_Content_Container'>
            <div className='hero_Content'>
                <div className="hero_Title">
                    <p>
                    Empower <span className='green-l'>Change</span> and Transform <span className='green-l'>Lives</span>
                    </p>
                </div>
                <div className="hero_Description">
                    <p>
                    { hero_Description }
                    </p>
                </div>
            </div>
            </div>
        </main>

    )
}