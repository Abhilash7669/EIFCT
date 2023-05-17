/* eslint-disable @next/next/no-img-element */

import { useEffect } from "react"


export default function MissionVision() {

    let mission =[{title : 'Our mission', description: 'We believe that everyone deserves a safe and secure place to call home. Our organization is committed to building homes for the homeless, providing care and support to orphaned children, and establishing compassionate old age homes that ensure dignity and companionship for senior citizens.'}]
    let vision = [{title: 'Our vision', description: '"Our vision is a world where everyone has access to safe and secure homes, healthcare, and a healthy environment. We envision communities thriving and individuals empowered to lead healthy, fulfilling lives."'}]

    useEffect(() => {

        let mission = document.querySelector('.mission')
        let visionB = document.querySelector('.vision')

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    mission.style.opacity = '1'
                }
            })
        }, {threshold: 0.2})
        observer.observe(document.querySelector('.mvContainer'))

        const observerB = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    setTimeout(() => {
                        visionB.style.opacity = '1'
                    }, 500)
                }
            })
        }, {threshold: 0.4})
        observerB.observe(document.querySelector('.visionContainer'))

    }, [])

    return(
        <>
        <div className="mv">
            <div className="mvContainer">
                <div className="mvContent">
                    <div className="missionContainer">
                    {
                        mission.map((item, i) => {
                            return(
                                <div className="mission" style={{opacity: '0', transition: 'all 1s ease'}} key={i}>
                                    <div className="missionTitle"><p>{item.title}</p></div>
                                    <div className="missionDescription"><p>{item.description}</p></div>
                                    <div className="missionImg" ><img src="/About/mission.png" alt="image" /></div>
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className="visionContainer">
                    {
                        vision.map((item, i) => {
                            return(
                                <div className="vision" style={{opacity: '0', transition:'all 1s ease'}} key={i}>
                                    <div className="visionTitle"><p>{item.title}</p></div>
                                    <div className="visionDescription"><p>{item.description}</p></div>
                                    <div className="visionImg" ><img src="/About/vision.png" alt="image" /></div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}