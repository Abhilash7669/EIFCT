import { useEffect, useRef } from "react";


export default function AboutHero(){

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
        observer.observe(document.querySelector('.aboutHero'))

    }, [])

    return(
        <div className="aboutHero">
            <div className="about_Container">
                <div className="about_Text">
                    <div className="about_Title ofh grBold">
                        <p ref={titleRef} style={{transform: hide, transition: `all 1s ${quint}`}}>About Us</p>
                    </div>
                    <div className="about_Descript ofh">
                        <p ref={subTitleRef} style={{transform: hide, transition: `all 1s ${quint}`}}>Driven by compassion and a deep commitment to building a better future for all</p>
                    </div>
                </div>
            </div>
        </div>
    )
}