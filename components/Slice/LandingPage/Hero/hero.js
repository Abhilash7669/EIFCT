/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef } from "react";


export default function Hero() {

    // data
    let hero_Description = ' We believe that every person deserves the opportunity to live a life of dignity and purpose, and it is our goal to help make this a reality for as many people as possible.'

    // Animation
    let hide = 'translateY(100%)';
    let reveal = 'translateY(0)';

    let quint = 'cubic-bezier(0.85, 0, 0.15, 1)';
    let quart = 'cubic-bezier(0.76, 0.00, 0.24, 1.00)';


    const titleRef = useRef();
    const subTitleRef = useRef();

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    titleRef.current.style.transform = reveal;
                    setTimeout(() => {
                        subTitleRef.current.style.transform = reveal;   
                    }, 500)
                }
            })
        })
        observer.observe(document.querySelector('.hero'))

    }, [])

    return(
        <main className='hero'>
            <video className="heroVid" src='/Landing/heroVid.mp4' autoPlay="true" muted="true" loop="true" 
                           disableRemotePlayback/>
            <video className="heroVidMob" src='/Landing/HeroVidMob.mp4' autoPlay="true" muted="true" loop="true" 
                           disableRemotePlayback/>
            <div className='hero_Content_Container'>
            <div className='hero_Content'>
                <div className="hero_Title ofh">
                    <p className="grBold" ref={titleRef} style={{transform: hide,  transition: `all 1s ${quint}`}}>
                    Empower <span className='green-l'>Change</span> and Transform <span className='green-l'>Lives</span>
                    </p>
                </div>
                <div className="hero_Description ofh">
                    <p ref={subTitleRef} style={{transform: hide,  transition: `all 1s ${quint}`}}>
                    { hero_Description }
                    </p>
                </div>
            </div>
            </div>
        </main>

    )
}