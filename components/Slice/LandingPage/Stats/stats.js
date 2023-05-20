/* eslint-disable @next/next/no-img-element */

import { useEffect } from "react"


export default function Stats(){

    let statData = [
        {
            title: '2000+',
            description: 'Institutions Built and others under progress',
            src: '/Landing/stats/Institutions.png'
        },
        {
            title: '1000+',
            description: 'Women Empowered',
            src: '/Landing/stats/wEmpower.png'
        },
        {
            title: '10,000+',
            description: 'Homes Built',
            src: '/Landing/stats/homesBuilt.png'
        },
    ]


    // Animation
    let quart = 'cubic-bezier(0.76, 0.00, 0.24, 1.00)';


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    // document.querySelectorAll('.stat_Item').forEach(item => {
                    //     item[0].style.opacity = '1'
                    let item = document.querySelectorAll('.stat_Item');
                    item[0].style.opacity = '1'
                     item[0].style.scale = '1'
                    setTimeout(() => {
                        item[1].style.opacity = '1'
                         item[1].style.scale = '1'
                    }, 1000)
                    setTimeout(() => {
                        item[2].style.opacity = '1'
                         item[2].style.scale = '1'
                    }, 500)
                }
            })
        }, {threshold: 0.2})
        observer.observe(document.querySelector('.stats_Container'));


    }, [])


    return(
        <section className="stats">
            <div className="stats_Container">
                <div className="stats_Content">
                    {
                        statData.map((data, i) => {
                            return(
                                <div className="stat_Item" style={{opacity: '0', scale:'0.95', transition: `all 1s ${quart}`}} key={i}>
                                    <div className="stat_Img" style={{position:'absolute', top:'0', left:'0'}} >
                                        <img 
                                            style={{height:'100%', width:'100%', objectFit:'cover'}} 
                                            src={ data.src } alt="image" />
                                    </div>
                                    <div className="stat_Info">
                                        <div className="statA">
                                            <p>
                                                { data.title }
                                            </p>
                                        </div>
                                        <div className="stat_Descript" style={{textAlign:'center'}}>
                                            <p>{ data.description }</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}