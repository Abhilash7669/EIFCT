/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef } from "react";
import PurposeCard from "../../../purposeCards"


export default function Purpose() {

    let cardData = [
        {
            src: '/Landing/Purpose/buildingHome.png',
            title:' Building Homes',
            description: 'We build homes not just for the homeless, but for the orphans and old age homes'
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
            description: 'We build hospitals, medical colleges, and research centers in various fields, including Ayurveda and Homeopathy.'
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

    const titleRef = useRef();

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    titleRef.current.style.transform = reveal

                    setTimeout(() => {
                        document.querySelectorAll('.purpose_Card_Item').forEach(cards => {
                            cards.style.opacity = '1';
                        })
                    }, 500)

                }
            })
        }, {threshold: 0.2})
        observer.observe(document.querySelector('.purpose_Container'))
    }, [])


    return(
        <section className="purpose">
            <div className="purpose_Container">
                <div className="purpose_Content">
                    <div className="purpose_Header">
                        <div className="purpose_Title ofh">
                            <p ref={titleRef} style={{transform: 'translateY(120%)', transition:'all 1s ease'}}>Purpose</p>
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
                                        <PurposeCard className="purpose_Card_Item" style={{opacity: '0', transition:'all 1s ease'}}  key={i} data={data} />
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