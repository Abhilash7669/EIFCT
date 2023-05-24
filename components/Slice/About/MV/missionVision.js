/* eslint-disable @next/next/no-img-element */

import { useEffect } from "react"

//gsap
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


export default function MissionVision() {

    let mission =[{title : 'Our mission', description: 'We believe that everyone deserves a safe and secure place to call home. Our organization is committed to building homes for the homeless, providing care and support to orphaned children, and establishing compassionate old age homes that ensure dignity and companionship for senior citizens.'}]
    let vision = [{title: 'Our vision', description: '"Our vision is a world where everyone has access to safe and secure homes, healthcare, and a healthy environment. We envision communities thriving and individuals empowered to lead healthy, fulfilling lives."'}]

    
    let quint = 'cubic-bezier(0.85, 0, 0.15, 1)';
    let quart = 'cubic-bezier(0.76, 0.00, 0.24, 1.00)';


    useEffect(() => {

        let mission = document.querySelector('.mission')
        let visionB = document.querySelector('.vision')

        

        gsap.to('.mission', {
            scrollTrigger: {
                trigger: '.mission',
                start: 'top bottom',
            },
            // x: 0,
            opacity:1,
            duration: 0.2,
        })

        gsap.to('.vision', {
            scrollTrigger: {
                trigger: '.vision',
                start: 'top bottom',
            },
            // x: 0,
            opacity:1,
            duration: 0.2,
        })

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
                                <div className="mission" style={{opacity: '0', transition: `all 0.6s ${quint}`}} key={i}>
                                    <div className="missionTitle grBold"><p>{item.title}</p></div>
                                    <div className="missionDescription"><p>{item.description}</p></div>
                                    <div className="missionImg" style={{zIndex:'10000'}}><img src="/About/mission.png" alt="image"  /></div>
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className="visionContainer">
                    {
                        vision.map((item, i) => {
                            return(
                                <div className="vision" style={{opacity: '0',  transition: `all 0.6s ${quint}`}} key={i}>
                                    <div className="visionTitle grBold"><p>{item.title}</p></div>
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