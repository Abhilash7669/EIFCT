/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef } from "react"
//gsap
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)



export default function Leadership() {

    let leaderData = [
        {
            title: 'President',
            src:'/About/president.png',
            name: 'Mr.Presannan P.K',
            position: 'President',
            descriptA: 'Chittar Presannan was born in a traditional communist family in Chittar, Pathanamthitta. He completed his degree from Catholicate College, Pathanamthitta, and was an active member of the Students Federation of India during his educational period. After graduation, he became an entrepreneur and together with his elder brother found success in establishing an electrical products manufacturing factory and the sale of its products under the brand name Minar. The marketing sales office was located in Coimbatore, Tamilnadu.',
            descriptB: 'Apart from his business ventures, Chittar Presannan is well-known for his charitable work. He worked with Mr.S.Krishnakumar IAS(Retd.) in a well-known Charitable Foundation and has been actively involved in building thousands of homes for the tribals, the poor and the homeless which has earned him widespread appreciation and recognition. Mr.S.Krishnakumar is a beurocrat turned politician from Kerala. He has been elected to Lok Sabha three times and was also Minister in the Rajiv Gandhi and Rao Ministry. Mr.Chittar Presannans charitable work is a testament to his commitment to serving the community and helping those in need. Chittar Presannan also served as the Political Secretary to K.R.Gouri Amma, a former Minister for Revenue of Kerala. She founded the political party in the Indian State of  Kerala named JANATHIPATHIYA SAMRAKSHANA SAMITHY(JSS) on 20th March 1994. Mr.Chittar Presannan was very actively involved in the Party and his contributions and commitments made great changes and positive impacts in the Party.'
        },
        {
            title: 'Founder & Chairman',
            src: '/About/chairman.png',
            name: 'Dr.SYAMRAJ.S',
            position: 'Founder & Chairman',
            descriptA: 'Dr. Syamraj is an accomplished entrepreneur and business leader with a diverse background in multiple industries. He holds an MBBS degree and has proven his abilities in several businesses, including Spare Parts and Tyres. He has established himself as a prominent Businessman in Dubai and has been involved in imports and exports of products all over the world. Additionally, he has demonstrated his expertise in the field of real estate. Despite his success in business, Dr. Syamraj is driven by a deep desire to help those in need. He is passionate about serving the poor and disadvantaged, also has a strong commitment to social causes.',
            descriptB: 'He is dedicated to building homes for the homeless and supporting destitute women and children. His philanthropic work includes a range of initiatives, such as charity work and other efforts to improve the lives of those in need. Dr. Syamrajs entrepreneurial success and his commitment to social causes make him a highly respected and influential figure in his community. He is known for his generosity, compassion, and dedication to making a positive impact on the world around him.'
        }
    ]

    

    const titleRef = useRef();

    let quint = 'cubic-bezier(0.85, 0, 0.15, 1)';
    let quart = 'cubic-bezier(0.76, 0.00, 0.24, 1.00)';


    useEffect(() => {

        let leader = document.querySelectorAll('.leader');

        gsap.to('.leaderSHIP', {
            scrollTrigger: {
                trigger: '.leaderSHIP',
                start: 'top bottom',
            },
             y: 0,
            duration: 0.2,
        })

        let LeaderTitle = document.querySelectorAll('.leaderTitle')
        let LeaderName = document.querySelectorAll('.leaderName')
        let LeaderImg = document.querySelectorAll('.founderIMG')

        let AboutLeader = document.querySelectorAll('.aboutLeader')

        gsap.to(LeaderTitle[0], {
            scrollTrigger: {
                trigger: LeaderTitle[0],
                start: 'top bottom',
            },
             y: 0,
            duration: 0.2,
        })

        gsap.to(LeaderImg[0], {
            scrollTrigger: {
                trigger: '.leaderImg',
                start: 'top bottom',
            },
             y: 0,
             delay:0.5,
            duration: 0.5,
        })

        gsap.to(LeaderName[0], {
            scrollTrigger: {
                trigger: LeaderName[0],
                start: 'top bottom',
            },
             y: 0,
             delay:0.6,
            duration: 0.4,
        })

        gsap.to(AboutLeader[0], {
            scrollTrigger: {
                trigger: AboutLeader[0],
                start: 'top bottom',
            },
             x: 0,
            duration: 0.4,
        })

        gsap.to(LeaderTitle[1], {
            scrollTrigger: {
                trigger: LeaderTitle[1],
                start: 'top bottom',
            },
             y: 0,
            duration: 0.2,
        })

        let ledImg = document.querySelectorAll('.leaderImg')

        gsap.to(LeaderImg[1], {
            scrollTrigger: {
                trigger: ledImg[1],
                start: 'top bottom',
            },
             y: 0,
            duration: 0.5,
        })

        gsap.to(LeaderName[1], {
            scrollTrigger: {
                trigger: LeaderName[1],
                start: 'top bottom',
            },
             y: 0,
             delay:0.6,
            duration: 0.4,
        })

        gsap.to(AboutLeader[1], {
            scrollTrigger: {
                trigger: AboutLeader[1],
                start: 'top bottom',
            },
             x: 0,
            duration: 0.4,
        })

    }, [])

    return(
        <div className="leadership">
            <div className="leadership__container">
                <div className="leadership_Content">
                    <div className="leadership_Title ofh grBold">
                        <p className="leaderSHIP" ref={titleRef} style={{transform:'translateY(150%)', transition: `all 0.6s ${quint}`}}>
                            Our <span style={{color:'#2FA4C2'}}>Leadership</span>
                        </p>
                    </div>
                    <div className="leaders">
                        {
                            leaderData.map((item, i) => {
                                return(
                                    <div key={i} style={{opacity:'1', transition: `all 1s ${quint}`}} className="leader">
                                        <div className="leaderTitleWrap ofh">
                                            <div className="leaderTitle grBold" style={{transform:'translateY(200%)', transition: `all 0.6s ${quint}`}}>
                                                <p>{item.title}</p>
                                            </div>
                                        </div>
                                        <div className="leaderContent">
                                            <div className="leaderContentA">
                                                <div className="leaderImg ofh">
                                                    <img className="founderIMG" src={item.src} alt="logo" style={{transform:'translateY(200%)', transition: `all 0.6s ${quint}`}} />
                                                </div>
                                                <div className="leaderPositionWrap ofh">
                                                    <div className="leaderName" style={{transform:'translateY(200%)', transition: `all 0.6s ${quint}`}}><p>{item.name}</p></div>
                                                    {/* <div className="leaderPos"><p>{item.position}</p></div> */}
                                                </div>
                                            </div>
                                            <div className="leaderContentB ofh">
                                                <div className="aboutLeader" style={{transform:'translateX(150%)', transition: `all 0.6s ${quint}`}}>
                                                    <p>{item.descriptA} <br /> <br /> {item.descriptB}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}