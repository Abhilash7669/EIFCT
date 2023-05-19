/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef } from "react"


export default function Leadership() {

    let leaderData = [
        {
            title: 'President',
            src:'/About/president.png',
            name: 'Mr.Presannan P.K',
            position: 'President',
            descriptA: 'Chittar Presannan was born in a traditional communist family in Chittar, Pathanamthitta. He completed his degree from Catholicate College, Pathanamthitta, and was an active member of the Students Federation of India during his educational period. After graduation, he became an entrepreneur and together with his elder brother found success in establishing an electrical products manufacturing factory and the sale of its products under the brand name Minar.The marketing sales office was located in Coimbatore, Tamilnadu.',
            descriptB: 'Apart from his business ventures, Chittar Presannan is well-known for his charitable work. He worked with Mr.S.Krishnakumar IAS(Retd.) in a well-known Charitable Foundation and has been actively involved in building thousands of homes for the tribals,the poor and the homeless which has earned him widespread appreciation and recognition.Mr.S.Krishnakumar is a beurocrat turned politician from Kerala.He has been elected to Lok Sabha three times and was also Minister in the Rajiv Gandhi and Rao Ministry.Mr.Chittar Presannans charitable work is a testament to his commitment to serving the community and helping those in need.Chittar Presannan also served as the Political Secretary to K.R.Gouri Amma,a former Minister for Revenue of Kerala.She founded the political party in the Indian State of  Kerala named JANATHIPATHIYA SAMRAKSHANA SAMITHY(JSS)on 20th March 1994.Mr.Chittar Presannan was very actively involved in the Party and his contributions and commitments made great changes and positive impacts in the Party.'
        },
        {
            title: 'Founder & Chairman',
            src: '/About/chairman.png',
            name: 'Dr.SYAMRAJ.S',
            position: 'Founder & Chairman',
            descriptA: 'Dr. Syamraj is an accomplished entrepreneur and business leader with a diverse background in multiple industries. He holds an MBBS degree and has proven his abilities in several businesses, including Spare Parts and Tyres. He has established himself as a prominent Businessman in Dubai and has been involved in imports and exports of products all over the world. Additionally, he has demonstrated his expertise in the field of real estate.Despite his success in business, Dr. Syamraj is driven by a deep desire to help those in need. He is passionate about serving the poor and disadvantaged , also has a strong commitment to social causes.',
            descriptB: 'He is dedicated to building homes for the homeless and supporting destitute women and children. His philanthropic work includes a range of initiatives, such as charity work and other efforts to improve the lives of those in need.Dr. Syamrajs entrepreneurial success and his commitment to social causes make him a highly respected and influential figure in his community. He is known for his generosity, compassion, and dedication to making a positive impact on the world around him.'
        }
    ]

    const titleRef = useRef();

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    titleRef.current.style.transform = 'translateY(0)';
                }
            })
        })
        observer.observe(document.querySelector('.leaders'))

        const observerB = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    document.querySelectorAll('.leaders').forEach(item => {
                        item.style.opacity = '1'
                    })
                }
            })
        })
        observerB.observe(document.querySelector('.leaders'))

    }, [])

    return(
        <div className="leadership">
            <div className="leadership__container">
                <div className="leadership_Content">
                    <div className="leadership_Title ofh">
                        <p ref={titleRef} style={{transform:'translateY(110%)', transition: 'all 1s ease'}}>
                            Our <span className="blue">Leadership</span>
                        </p>
                    </div>
                    <div className="leaders">
                        {
                            leaderData.map((item, i) => {
                                return(
                                    <div key={i} style={{opacity:'1', transition: 'all 2s ease'}} className="leader">
                                        <div className="leaderTitleWrap">
                                            <div className="leaderTitle">
                                                <p>{item.title}</p>
                                            </div>
                                        </div>
                                        <div className="leaderContent">
                                            <div className="leaderContentA">
                                                <div className="leaderImg">
                                                    <img src={item.src} alt="logo" />
                                                </div>
                                                <div className="leaderPositionWrap">
                                                    <div className="leaderName"><p>{item.name}</p></div>
                                                    {/* <div className="leaderPos"><p>{item.position}</p></div> */}
                                                </div>
                                            </div>
                                            <div className="leaderContentB">
                                                <div className="aboutLeader">
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