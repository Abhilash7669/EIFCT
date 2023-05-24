/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link"
import { useEffect, useRef } from "react"

//gsap
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


export default function OurWork() {

    const hoverRef = useRef();

    let subTitle = 'Focused on Education of poor children, healthcare, women empowerment, livelihood for the youth and the environment'

    let ourWorkData = [
        {
            title: 'Education &',
            colorTitle: 'Literacy',
            src: '/Landing/OurWork/cultural development.png',
            descriptionA: 'Every child deserves a bright future, but unfortunately, not all of them have access to basic needs such as education, shelter, and food. We believe that every child deserves a chance to thrive, which is why we are committed to building schools and homes for orphans. Our goal is to provide a safe and nurturing environment where they can learn, grow, and reach their full potential.',
            descriptionB: 'Education is a powerful tool that can break the cycle of poverty and transform lives. However, many orphans do not have access to quality education, which limits their opportunities in life. By building schools, we can provide them with a safe and supportive learning environment, where they can gain the knowledge and skills needed to succeed.'
        },
        {
            title: 'Women',
            colorTitle: 'Empowerment', 
            src: '/Landing/OurWork/womenempowerment.png',
            descriptionA: 'Women are powerful agents of change, but unfortunately, many face significant barriers that prevent them from realizing their full potential. Gender inequality, discrimination, and lack of access to education and resources are just a few of the challenges that women around the world face. However, we believe that empowering women is essential for creating a better future for all.',
            descriptionB: 'Our mission is to create opportunities for women to succeed by providing education, training, and resources.'
        },
        {
            title: 'Cultural',
            colorTitle: 'Development',
            src: '/Landing/OurWork/education&literacy.png',
            descriptionA: 'We believe that our ancient arts and literature, including Sanskrit, Vedas, and Puranas, hold valuable lessons and teachings that can benefit society today',
            descriptionB: 'Encouraging studies on Sanskrit, Vedas, and Puranas: Our charity works to encourage and promote the study of Sanskrit, Vedas, and Puranas. We believe that these ancient texts hold valuable knowledge and wisdom that can benefit people today. We provide resources and support for individuals and institutions interested in pursuing studies in these areas.'
        }
    ]

    // Animation
    let hide = 'translateY(100%)';
    let reveal = 'translateY(0)';

    let quint = 'cubic-bezier(0.85, 0, 0.15, 1)';
    let quart = 'cubic-bezier(0.76, 0.00, 0.24, 1.00)';


    const titleRef = useRef();
    const subTitleRef = useRef();

     const dataRef = useRef();



     useEffect(() => {

        let main = document.querySelectorAll('.ourwork_Item');

        gsap.to('.titleRef', {
            scrollTrigger: {
                trigger: '.ourwork',
                start: 'top bottom',
            },
            y: 0,
            // opacity: 1,
            duration: 0.2,
            ease: quart
        })

        gsap.to(main[0], {
            scrollTrigger: {
                trigger: main[0],
                start: 'top bottom',
                // end: 'bottom top',
            },
            //  x: 100,
             translateX: '0%',
             opacity: 1,
            duration: 0.2,
        //    ease: quint,
        })

        gsap.to(main[1], {
            scrollTrigger: {
                trigger: main[1],
                start: 'top bottom',
                // end: 'bottom top',
            },
            //  x: 100,
             translateX: '0%',
            duration: 0.2,
            opacity: 1,
        //    ease: quint
        })


        gsap.to(main[2], {
            scrollTrigger: {
                trigger: main[2],
                start: 'top bottom',
                // end: 'bottom top',
            },
            //  x: 100,
             translateX: '0%',
            duration: 0.2,
            opacity: 1,
        //    ease: quint
        })
    }, [])
     



    return(
        <section className="ourwork">
            <div className="ourwork_Container">
                <div className="ourwork_Content">
                    <div className="ourwork_Title_Container">
                        <div className="ourwork_Title ofh grBold">
                            <p className="titleRef" ref={titleRef} style={{transform: 'translateY(120%)', transition: `all 1s ${quint}`}}>
                                Our works
                            </p>
                        </div>
                        <div className="ourwork_SubTitle ofh">
                            <p className="subTitOurworks" ref={subTitleRef} style={{transform: 'translateY(120%)', transition: `all 1s ${quint}`}}>
                                { subTitle }
                            </p>
                        </div>
                    </div>
                    <div className="ourwork_Showcase">
                        {
                            ourWorkData.map((data, i) => {

                                return(
                                    <div ref={dataRef} key={i} className="ourwork_Item" style={{transform: i % 2 == 0 ? 'translateX(-100%)':'translateX(100%)', opacity: '0', transition: `all 0.6s ${quart}`}}>
                                        <div className="ourwork_ItemTitleContainer" style={{display:'flex', justifyContent: `${ i % 2 == 0 ? 'flex-start' : 'flex-end'}`}}>
                                            <div className="ourwork_Item_Title grBold">
                                                <p>{ data.title } <span>{ data.colorTitle }</span></p>
                                            </div>
                                        </div>
                                        <div className="ourwork_Item_Bottom" style={{flexDirection: `${ i % 2 == 0 ? 'row' : 'row-reverse'}`}}>
                                            <div className="ourwork_Item_img">
                                                <img src={ data.src } alt='img' />
                                            </div>
                                            <div className="ourwork_Item_description">
                                                <p>{ data.descriptionA } <br /> <br /> { data.descriptionB }</p>
                                            </div>   
                                        </div>
                                        {/* mob */}
                                        <div className="ourwork_Item_Bottom Mob" style={{
                                        color:`${i % 2 == 0 ? '#F5F5F5':''}`}}>
                                            <div className="ourwork_Item_img">
                                                <img src={ data.src } alt='img' />
                                            </div>
                                            <div className="ourwork_Item_description">
                                                <p>{ data.descriptionA } <br /> <br /> { data.descriptionB }</p>
                                            </div>   
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="ourwork_Link">
                            <Link href={'/endeavours'}><div ref={hoverRef} style={{transition:'all 0.3s ease'}} className="ourwork_Link_Text" 
                                onMouseEnter={() => {hoverRef.current.style.opacity = '0.5'}}
                                onMouseLeave={() => {hoverRef.current.style.opacity = '1'}}>
                                <p>See more...</p></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}