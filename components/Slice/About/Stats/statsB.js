/* eslint-disable @next/next/no-img-element */

import { useEffect } from "react"


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

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    document.querySelectorAll('.about_StatsItem').forEach(item => {
                        item.style.opacity = '1'
                    })
                }
            })
        }, {threshold: 0.4})
        observer.observe(document.querySelector('.statsB'))

    }, [])

    return(
        <>
            <div className="statsB">
                <div className="statsBContainer">
                    <div className="about_StatsItems">
                        {
                            statsB.map((item, i) => {
                                return(
                                    <div className="about_StatsItem" style={{opacity: '0', transition:'all 1s ease'}} key={i}>
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