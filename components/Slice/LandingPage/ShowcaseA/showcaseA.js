import { useEffect, useRef } from "react";


export default function ShowcaseA(){

    let description = 'Through our efforts to build homes for the homeless, orphans, and elderly, and our commitment to planting ayurvedic plants and building medical institutions, we are working to create a better future for all. Join us in making a positive impact on the world'

    // Animation
    let hide = 'translateY(100%)';
    let reveal = 'translateY(0)';

    const descRef = useRef();

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                   setTimeout(() => {
                    descRef.current.style.transform = reveal;
                   }, 1000)
                }   
            })
        }, {threshold: 0.2})
        observer.observe(document.querySelector('.showcaseA_Container'))

    }, [])

    return(
        <section className="showcaseA">
            <div className="showcaseA_Container">
                <div className="showcaseA_Content ofh">
                    <p ref={descRef} style={{transform: hide, transition: 'all 1s ease'}}>
                        { description }
                    </p>
                </div>
            </div>
        </section>
    )
}