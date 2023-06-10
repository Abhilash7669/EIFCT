/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef } from "react";

//gsap
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


export default function LogoShowcase() {

    let logo_Showcase_Description = 'is a powerful representation of supporting India and its growth in many aspects. The two hands supporting the Indian map signify the idea of supporting India in all ways possible. The top portion of the tree growing on top represents the growth and development of India in various areas, such as education, economy, and environment.'

    let textB = "Planting trees across India is an essential step towards creating a sustainable environment, reducing pollution and a remedy for global warming. Providing food, jobs, and homes for all Indians is crucial in ensuring the well-being and prosperity of the country's citizens. Building educational institutions and providing quality education to all Indians is a significant step towards developing Indian culture and promoting innovation and progress."
    
    let textC = "Maintaining peace and harmony is essential for the growth and development of any country, and India, with its diverse culture and traditions, can serve as an example to the world. By supporting India in these various ways, we can contribute to the country's growth and development and make it a better place for all its citizens."

    let FoundersMessage = "Founder's message"

    // Animation
    let hide = 'translateY(100%)';
    let reveal = 'translateY(0)';

    let quint = 'cubic-bezier(0.85, 0, 0.15, 1)';
    let quart = 'cubic-bezier(0.76, 0.00, 0.24, 1.00)';

    
    const titleRef = useRef();
    const descriptionRef = useRef();

    const logoRef = useRef();

    useEffect(() => {

        gsap.to('.fMssg', {
            scrollTrigger: {
                trigger: '.fMssg',
                start: 'top bottom',
            },
            y: 0,
            duration: 0.1,
        })

        gsap.to('.logo_Showcase_Image', {
            scrollTrigger: {
                trigger: '.logo_Showcase_Image',
                start: 'top bottom',
            },
            opacity: 1,
            duration: 0.3,
        })

        gsap.to('.logDesc', {
            scrollTrigger: {
                trigger: '.logo_Showcase_Image',
                start: 'top bottom',
            },
            y: 0,
            duration: 0.4,
        })

    })

    return(
        <section className='logo_Showcase'>
            <div className='logo_Showcase_Container'>
                <div className='logo_Showcase_Content'>
                    <div className="Founders_Message ofh">
                        <p className="fMssg grBold" ref={titleRef} style={{transform: hide, transition: `all 1 ${quint}`}}>{FoundersMessage}</p>
                    </div>
                    <div ref={logoRef} className='logo_Showcase_Image' style={{opacity:'0',transition: `all 1s ${quart}`}}>
                        <img 
                            src='/Landing/EIFCTLogo.svg' 
                            alt='Logo'/>
                    </div>
                    <div className="logo_Showcase_Description ofh">
                        <p className="logDesc" ref={descriptionRef} style={{transform: hide, transition: `all 1s ${quart}`}}>
                            The logo for <span className="green" style={{fontWeight:'600'}}>ENHANCE INDIA FOUNDATION CHARITABLE TRUST</span> { logo_Showcase_Description }<br /><br /> {textB}<br /><br />{textC}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}