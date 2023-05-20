import { useEffect, useRef } from "react";

//gsap
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


export default function ShowcaseA(){

    let description = 'Through our efforts to build homes for the homeless, orphans, and elderly, and our commitment to planting ayurvedic plants and building medical institutions, we are working to create a better future for all. Join us in making a positive impact on the world'

    // Animation
    let hide = 'translateY(100%)';
    let reveal = 'translateY(0)';

    const descRef = useRef();

    let quint = 'cubic-bezier(0.85, 0, 0.15, 1)';
    let quart = 'cubic-bezier(0.76, 0.00, 0.24, 1.00)';

    useEffect(() => {

        gsap.to('.sCaseA', {
            scrollTrigger: {
                trigger: '.showcaseA',
                start: 'top center',
            },
            y: 0,
            duration: 0.2,
        })


    }, [])

    return(
        <section className="showcaseA">
            <div className="showcaseA_Container">
                <div className="showcaseA_Content ofh">
                    <p className="sCaseA" ref={descRef} style={{transform: hide, transition: `all 1s ${quint}`}}>
                        { description }
                    </p>
                </div>
            </div>
        </section>
    )
}