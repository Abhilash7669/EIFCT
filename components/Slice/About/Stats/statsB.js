/* eslint-disable @next/next/no-img-element */

import { useEffect } from "react"

//gsap
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


export default function StatsB() {

    let statsB = [
        {
            src: '/About/trees.svg',
            stat: '10k+',
            desc: 'Trees Planted',
            textColor: '#97c55e'
        },
        {
            src: '/About/homesBuilt.svg',
            stat: '10k+',
            desc: 'Homes Built',
            textColor: '#2FA4C2'
        },
        {
            src: '/About/food.svg',
            stat: '10k+',
            desc: 'Food relief packages',
            textColor: '#FFECD2' 
        }
    ]

    let quint = 'cubic-bezier(0.85, 0, 0.15, 1)';
    let quart = 'cubic-bezier(0.76, 0.00, 0.24, 1.00)';


    useEffect(() => {

       let stat = document.querySelectorAll('.about_StatsItem')

       gsap.to(stat[0], {
        scrollTrigger: {
            trigger: stat[0],
            start: 'top bottom',
        },
         x: 0,
         opacity:1,
        duration: 0.2,
    })

    gsap.to(stat[1], {
        scrollTrigger: {
            trigger: stat[1],
            start: 'top bottom',
        },
         x: 0,
         opacity:1,
         delay:0.5,
        duration: 0.2,
    })

    gsap.to(stat[2], {
        scrollTrigger: {
            trigger: stat[2],
            start: 'top bottom',
        },
         x: 0,
         opacity:1,
         delay:1,
        duration: 0.2,
    })

    }, [])

    return(
        <>
            <div className="statsB">
                <div className="statsBContainer">
                    <div className="about_StatsItems">
                        {
                            statsB.map((item, i) => {
                                return(
                                    <div className="about_StatsItem" style={{transform: i == 0 ? 'translateX(-100%)' : i == 1 ? 'translateX(-100%)': i == 2 ? 'translateX(-100%)': null, transition: `all 0.6s ${quint}`, opacity:'0'}} key={i}>
                                        <div className="about_StatsIcon">
                                            <img src={item.src} alt="logo" />
                                        </div>
                                        <div className="about_StatsInfo">
                                            <div className="about_Stats_Stat">
                                                <p>
                                                    {item.stat}
                                                </p>
                                            </div>
                                            <div className="about_Stats_Descript">
                                                <p style={{color:`${item.textColor}`}}>
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}