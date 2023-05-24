/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef } from "react";
import PurposeCard from "../../../purposeCards"


//gsap
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


export default function Purpose() {

    let cardData = [
        {
            src: '/Landing/Purpose/buildingHome.png',
            title:' Building Homes',
            description: 'We build homes not just for the homeless people in all categories'
        },
        {
            src: '/Landing/Purpose/nature.png',
            title: 'Nature Welfare',
            description: 'We understand that the planet is facing numerous environmental challenges, including climate change, pollution, and habitat destruction. Our aim is to plant thousands of plants across India.'
        },
        {
            src: '/Landing/Purpose/womenEmpowerment.png',
            title: 'Women Empowerment',
            description: 'Join us in our efforts to empower women and create a better, more equitable world for all.'
        },
        {
            src: '/Landing/Purpose/healthWelfare.png',
            title: 'Health Welfare',
            description: 'We are committed to improving the health and well-being of people around the world.'
        },
        {
            src: '/Landing/Purpose/medicalInstitutions.png',
            title: 'Medical Institutions',
            description: 'We build hospitals, medical colleges, and research centers in various fields, including Allopathy, Ayurveda and Homeopathy.'
        },
        {
            src: '/Landing/Purpose/education.png',
            title: 'Education',
            description: 'We promote education by providing scholarships, grants, and free educational resources to deserving children.'
        }
    ]

    // Animation
    let hide = 'translateY(100%)';
    let reveal = 'translateY(0)';

    let quint = 'cubic-bezier(0.85, 0, 0.15, 1)';
    let quart = 'cubic-bezier(0.76, 0.00, 0.24, 1.00)';


    const titleRef = useRef();

    useEffect(() => {


        gsap.to('.purpTitle', {
            scrollTrigger: {
                trigger: '.purpTitle',
                start: 'top bottom',
            },
            y: 0,
            duration: 0.2,
        })

        let card = document.querySelectorAll('.purpose_Card_Item');

        gsap.to(card[0], {
            scrollTrigger: {
                trigger: '.purpose_Card_Item',
                start: 'top bottom',
            },
            y: 0,
            opacity:1,
            duration: 0.2,
        })

        gsap.to(card[1], {
            scrollTrigger: {
                trigger: card[1],
                start: 'top bottom',
            },
            y: 0,
            opacity:1,
            duration: 0.2,
            // delay: 0.5
        })

        gsap.to(card[2], {
            scrollTrigger: {
                trigger: card[2],
                start: 'top bottom',
            },
            y: 0,
            opacity:1,
            duration: 0.2,
            // delay: 1
        })

        gsap.to(card[3], {
            scrollTrigger: {
                trigger: card[3],
                start: 'top bottom',
            },
            y: 0,
            opacity:1,
            duration: 0.2,
            // delay: 1.5
        })

        gsap.to(card[4], {
            scrollTrigger: {
                trigger: card[4],
                start: 'top bottom',
            },
            y: 0,
            opacity:1,
            duration: 0.2,
            // delay: 2
        })

        gsap.to(card[5], {
            scrollTrigger: {
                trigger: card[5],
                start: 'top bottom',
            },
            y: 0,
            opacity:1,
            duration: 0.2,
            // delay: 2.5
        })

        




    }, [])


    return(
        <section className="purpose">
            <div className="purpose_Container">
                <div className="purpose_Content">
                    <div className="purpose_Header">
                        <div className="purpose_Title ofh grBold">
                            <p className="purpTitle" ref={titleRef} style={{transform: 'translateY(120%)', transition: `all 1s ${quint}`}}>Purpose</p>
                        </div>
                        {/* <div className="purpose_Description">
                            <p>
                                We are a  new <span className="blue">trust</span> and our <span className="blue">purpose</span> are many
                            </p>
                        </div> */}
                    </div>
                    <div className="purpose_Cards">
                        <div className="purpose_Cards_Wrapper">
                            {
                                cardData.map((data, i) => {
                                    return(
                                        <PurposeCard className="purpose_Card_Item" style={{opacity: '0', transform: i % 2 == 0 ? 'translateY(50%)':'translateY(50%)', transition: `all 0.5s ${quart}`}}  key={i} data={data} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}