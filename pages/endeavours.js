/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef } from "react"
import Head from 'next/head'



//gsap
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


export default function Endeavours() {

    let heroDescript = 'At ENHANCE INDIA FOUNDATION CHARITABLE TRUST, we are dedicated to making a positive impact in the lives of individuals and communities. Through our various initiatives, we work tirelessly to address critical social issues, uplift the underprivileged, and create a better future for all. Here is a brief overview of what we do.'

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

    let phouseDescript = 'Our endeavors are driven by compassion, dedication, and a commitment to creating positive change. Join us in our mission to transform lives and build a more inclusive, sustainable, and empowered society for all.'

    let textA = 'We are passionate about creating inclusive environments that cater to the needs of individuals with disabilities. Through the development of specialized institutions, we provide access to education, vocational training, and essential services, empowering the physically disabled to lead fulfilling lives.'
    let textB = 'Healthcare accessibility is a fundamental right. We work tirelessly to improve medical facilities across India. Our efforts include building hospitals, medical colleges, and research centers in various fields, including Allopathy, Ayurveda and Homeopathy. We also extend medical relief to underprivileged sections of society, ensuring that quality healthcare reaches those in need.'
    let textC = '"Serenity in Harmony: Connecting Body, Mind and Nature". Fostering a deeper connection with nature, and raising awareness about the transformative power of yoga and meditation. We promote the importance as well as the practice of Yoga and Meditation by building Yoga and Meditation centres accross the country. We will also bring awareness amongst people the importance of regular practice of yoga and meditation for the healthy well-being of body and mind. In addition to our focus on yoga and meditation, we are committed to spreading awareness about nature welfare. We aim to highlight the urgency of protecting our natural resources and preserving biodiversity. We collaborate with environmental organizations, organize clean-up drives, and promote eco-friendly practices to inspire positive change and create a healthier planet for future generations.'

    let textD = 'We believe in the power of education and cultural preservation. Our organization supports free education for deserving children through scholarships and grants. We actively contribute to the total literacy drive by establishing free reading rooms and libraries. Additionally, we open centers dedicated to promoting and developing Indian classical arts, martial arts, and classical music, fostering cultural values and artistic expression.'
    let textE = 'We are committed to empowering women and supporting their journey towards financial independence. Our initiatives focus on assisting destitute women, widows, and promoting small startups. By providing resources, training, and mentorship, we aim to create a supportive environment that enables women to thrive and contribute to society.'
    let textF = 'Building homes for the homeless, orphans, and old age homes: We believe that everyone deserves a safe and secure place to call home. Our charity works to provide housing for people who are homeless, orphaned, or elderly. We also work to provide support services like healthcare, education, and job training to help these individuals become self-sufficient.'

    //anim
    let quint = 'cubic-bezier(0.85, 0, 0.15, 1)';
    let quart = 'cubic-bezier(0.76, 0.00, 0.24, 1.00)';

    useEffect(() => {

        gsap.to('.endTitle', {
            scrollTrigger: {
                trigger: '.endTitle',
                start: 'top bottom',
            },
             y: 0,
            duration: 0.2,
        })

        gsap.to('.endDessc', {
            scrollTrigger: {
                trigger: '.endDessc',
                start: 'top bottom',
            },
             y: 0,
            duration: 0.6,
        })
        //stats

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

    //powerhouse

    gsap.to('.powerTitl', {
        scrollTrigger: {
            trigger: '.powerTitl',
            start: 'top bottom',
        },
         y: 0,
        duration: 0.4,
    })

    gsap.to('.powerDesc', {
        scrollTrigger: {
            trigger: '.powerDesc',
            start: 'top bottom',
        },
         y: 0,
        duration: 0.4,
    })

    let soulContent = document.querySelectorAll('.ourSol_Content')

    gsap.to(soulContent[0], {
        scrollTrigger: {
            trigger: soulContent[0],
            start: 'top bottom',
        },
         x: 0,
        //  delay:1,
        duration: 0.4,
    })

    gsap.to(soulContent[1], {
        scrollTrigger: {
            trigger: soulContent[1],
            start: 'top bottom',
        },
         x: 0,
        //  delay:1,
        duration: 0.4,
    })

    gsap.to(soulContent[2], {
        scrollTrigger: {
            trigger: soulContent[2],
            start: 'top bottom',
        },
         x: 0,
        //  delay:1,
        duration: 0.4,
    })
   
    gsap.to(soulContent[3], {
        scrollTrigger: {
            trigger: soulContent[3],
            start: 'top bottom',
        },
         x: 0,
        //  delay:1,
        duration: 0.4,
    })

    let absolTitle = document.querySelectorAll('.absolTitle')

    gsap.to(absolTitle[0], {
        scrollTrigger: {
            trigger: absolTitle[0],
            start: 'top bottom',
        },
         y: 0,
        //  delay:1,
        duration: 0.4,
    })

    gsap.to(absolTitle[1], {
        scrollTrigger: {
            trigger: absolTitle[1],
            start: 'top bottom',
        },
         y: 0,
        //  delay:1,
        duration: 0.4,
    })

    let absolDesc = document.querySelectorAll('.absolDesc')

    gsap.to(absolDesc[0], {
        scrollTrigger: {
            trigger: absolDesc[0],
            start: 'top bottom',
        },
         y: 0,
        //  delay:1,
        duration: 0.4,
    })

    gsap.to(absolDesc[1], {
        scrollTrigger: {
            trigger: absolDesc[1],
            start: 'top bottom',
        },
         y: 0,
        //  delay:1,
        duration: 0.4,
    })




    })


    return(
        <>
        <main className="endeavorus">
            <div className="endeavours_Container">
                <div className="endeavours_Title grBold ofh">
                    <p className="endTitle" style={{transform:'translateY(150%)', transition: `all 0.6s ${quint}`}}>
                        Our Endeavours
                    </p>
                </div>
                <div className="endeavours_Descript ofh" >
                    <p className="endDessc" style={{transform:'translateY(150%)', transition: `all 0.6s ${quint}`}}>
                        { heroDescript }
                    </p>
                </div>
            </div>
        </main>

        {/* endeavour stats */}
        <section>
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
        </section>
        {/* ---- */}
        {/* solutions section */}
        <section className="ourSol" style={{padding:'2em 0 0 0'}}>
                <div className="ourSol_Container">
                            {/* contentA */}
                    <div className="pHouseContainer ofh">
                        <div className="pHouseTitle grBold ofh" >
                            <p className="powerTitl" style={{transform:'translateY(150%)', transition: `all 0.6s ${quint}`,color:'#000'}}>A Power House of Solutions</p>
                        </div>
                        <div className="pHouseDescript ofh">
                            <p className="powerDesc" style={{transform:'translateY(150%)', transition: `all 0.6s ${quart}`, color:'#000'}} >
                                {phouseDescript}
                            </p>
                        </div>
                    </div>
                    <div className="ourSol_Content" style={{ transition: `all 0.6s ${quint}`, transform:'translateX(200%)'}}>
                        <div className="ourSol_TextContainer" >
                            <div className="ourSol_Text grBold">
                                <p>
                                <span className="blue">Developing</span> Institutions for the Physically <span className="blue">Disabled</span> and <span className="blue">Handicapped</span>
                                </p>
                            </div>
                                <div className="ourSol_img mob">
                                    <img src="/endeavours/A.png" alt="img"/>
                                </div>
                            <div className="ourSol_Descript">
                                <p>{textA}</p>
                            </div>
                        </div>
                        <div className="ourSol_img">
                            <img src="/endeavours/A.png" alt="img"/>
                        </div>
                    </div>
                        {/* Content B */}
                    <div className="ourSol_Content reverse" style={{ transition: `all 0.6s ${quint}`, transform:'translateX(-200%)'}}>
                        <div className="ourSol_TextContainer setB">
                            <div className="ourSol_Text setBtext grBold ofh">
                            <p className="solText">
                                    <span className="blue">Medical</span> and <span className="blue">Healthcare</span> Initiatives
                                    </p>
                            </div>
                            <div className="ourSol_img mob">
                                <img src="/endeavours/B.png" alt="img"/>
                            </div>
                            <div className="ourSol_Descript">
                                <p>{textB}</p>
                            </div>
                        </div>
                        <div className="ourSol_img">
                            <img src="/endeavours/B.png" alt="img"/>
                        </div>
                    </div>
                    {/* contentC */}
                    <div className="ourSol_ContentAbsolute">
                        <div className="ourSol_AbsoluteContent">
                            <div className="ourSol_AbsoluteTitle grBold ofh"><p className="absolTitle" style={{transform:'translateY(150%)', transition: `all 0.6s ${quint}`}}>Yoga, Meditation and Nature Welfare</p></div>
                            <div className="ourSol_AbsoluteDescript ofh"><p  className="absolDesc" style={{transform:'translateY(150%)', transition: `all 0.6s ${quint}`}}>{textC}</p></div>
                        </div>
                    </div>
                    {/* secondSet */}
                    {/* contentA */}
                    <div className="ourSol_Content" style={{ transition: `all 0.6s ${quint}`, transform:'translateX(200%)'}}>
                        <div className="ourSol_TextContainer">
                            <div className="ourSol_Text grBold">
                                <p>Education and
                                <span className="blue"> Cultural Development</span>
                                </p>
                            </div>
                            <div className="ourSol_img mob">
                                <img src="/endeavours/D.png" alt="img"/>
                            </div>
                            <div className="ourSol_Descript">
                                <p>{textD}</p>
                            </div>
                        </div>
                        <div className="ourSol_img">
                            <img src="/endeavours/D.png" alt="img"/>
                        </div>
                    </div>
                        {/* Content B */}
                    <div className="ourSol_Content reverse" style={{ transition: `all 0.6s ${quint}`, transform:'translateX(-200%)'}}>
                        <div className="ourSol_TextContainer setB">
                            <div className="ourSol_Text setBtext grBold">
                            <p> 
                            <span className="blue">Women Empowerment</span> and  Startups
                            </p>
                            </div>
                            <div className="ourSol_img mob">
                                <img src="/endeavours/E.png" alt="img"/>
                            </div>
                            <div className="ourSol_Descript">
                                <p>{textE}</p>
                            </div>
                        </div>
                        <div className="ourSol_img">
                            <img src="/endeavours/E.png" alt="img"/>
                        </div>
                    </div>
                    {/* contentC */}
                    <div className="ourSol_ContentAbsolute C" >
                        <div className="ourSol_AbsoluteContent">
                            <div className="ourSol_AbsoluteTitle grBold ofh"><p className="absolTitle" style={{transform:'translateY(100%)', transition: `all 0.6s ${quint}`}}>Shelter and Care</p></div>
                            <div className="ourSol_AbsoluteDescript ofh"><p className="absolDesc" style={{transform:'translateY(150%)', transition: `all 0.6s ${quint}`}}>{textF}</p></div>
                        </div>
                    </div>
            </div>
        </section>
        </>
    )
}