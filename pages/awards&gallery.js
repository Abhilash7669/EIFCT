/* eslint-disable @next/next/no-img-element */


export default function AwardsGallery() {


    let text = 'Welcome to our Awards & Gallery section, where we proudly showcase the recognition and impact of our charity work. Here, you will find a collection of achievements, awards, and memorable moments that highlight our dedication to making a positive difference in the lives of others.'

    let showcaseDescript = 'Most trees are planted in different regions of India. Receiving the award from Honarable Prayar Gopalakrishnan, President and MLA of Travancore Devaswom Board for his struggle against natural exploitation.'

    let charitableTitle = 'CHARITABLE BUILDER'

    let neemTitle = 'Planting Hope: A Charitable Journey of Neem Leaf Cultivation'
    let neemDescA = 'Join us on an inspiring and charitable journey as we follow the footsteps of a selfless individual dedicated to making a positive impact on our environment and community. '
    let neemDescB = '"Planting Hope" is a celebration of human kindness, environmental consciousness, and the profound impact of small actions. It inspires viewers to recognize the power within themselves to make a difference, whether through planting trees, supporting local initiatives, or spreading awareness about the importance of sustainable practices.'

    let cDescA = 'A philanthropist and charitable builder. Mr.Presannan is dedicated to making a positive impact on society by providing housing and other essential services to those in need.'
    let cDescB = 'Mr.Presannan built more than 13000 homes for the Tribals ,poor homeless.He was the District President of Sainik Association'
    let cDescC = 'Chittar Presannan has also been a vocal advocate for social justice and has reacted to several instances of social discrimination. His efforts have helped to bring about positive change and justice in many cases. His activism and dedication to social causes have made him a respected and influential figure in his community.'
    let cDescD = 'Overall, Chittar Praeannan"s life and work exemplify a deep commitment to social justice and community service. His entrepreneurial success and charitable work have made him an inspiration to many and a role model for those who seek to make a positive impact on the world around them.'

    let carouselImg = [
        // {
        //     src: '/awards/neem/neemA.jpg'
        // },
        {
            src: '/awards/neem/neemB.jpg'
        },
        {
            src: '/awards/neem/neemC.jpg',
        },
        {
            src: '/awards/neem/neemD.jpg'
        },
        {
            src: '/awards/neem/neemB.jpg'
        },
        {
            src: '/awards/neem/neemC.jpg',
        },
        {
            src: '/awards/neem/neemD.jpg'
        },
    ]

    return(
        <>
        <main className="awardsHero">
            <div className="awards_TextContainer">
                <div className="awards_Title">
                    <p>Awards & Gallery</p>
                </div>
                <div className="awards_Descript">
                    <p>{text}</p>
                </div>
            </div>
        </main>

        {/* honors */}
        <section className="honors">
            <div className="honorsContainer">
                <div className="honorsWrapper">
                    <div className="honorsWrapperTitle">
                        <p>Honors & Achievements</p>
                    </div>
                    <div className="honorsShowcase">
                        <div className="honorsImgShowcase" style={{height:'100%', width: '100%'}}>
                            <img style={{borderRadius:'.4em'}} src="/awards/honorsShowcase.png" alt="image" />
                        </div>
                    </div>
                    <div className="honorsDescript">
                        <p>{showcaseDescript}</p>
                    </div>
                </div>
            </div>
        </section>
        {/* charitable Builder */}
        <section className="charitableMain" >
            <div className="charitable">
                <div className="charitableContainer">
                    <div className="charitableA">
                        <div style={{height:'100%', width:'100%'}}><img style={{height:'100%', width:'100%', objectFit:'contain'}} src="/awards/CHARITABLEbuilder.png"  alt="image"/></div>
                        {/* mobile-title */}
                        <div className="charitableTitle mob">
                            <p>{charitableTitle}</p>
                        </div>
                        {/* ---- */}
                    </div>
                    <div className="charitableB">
                        <div className="charitableTitle">
                            <p>{charitableTitle}</p>
                        </div>
                        {/* mobile-img */}
                        <div className="charitableA mob">
                            <div style={{height:'100%', width:'100%'}}><img style={{height:'100%', width:'100%', objectFit:'fill'}} src="/awards/CHARITABLEbuilder.png"  alt="image"/></div>
                        </div>
                        {/* ----- */}
                        <div className="charitableDescript">
                            <p>{cDescA} <br /> <br />{cDescB} <br /><br />{cDescC} <br /><br />{cDescD}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="neemMain" style={{background:'#224435'}}>
            <div className="neem">
                <div className="neemContainer">
                    <div className="neemA">
                        <div className="neemTitle" style={{padding:'2em 0 4em 0'}}>
                            <p style={{color:'#FFF'}}>{neemTitle}</p>
                        </div>
                        {/* carousel */}
                        <div className="carouselContainer" style={{display:'flex', alignItems:'center', width:'100%', overflow:'hidden', flexWrap:'nowrap', whiteSpace:'nowrap'}}>
                            {
                                carouselImg.map((data, i) => {
                                    return(
                                            <div className="neemAnim"  key={i}>
                                            <img style={{height:'100%', width:'100%', objectFit:'cover'}} src={data.src} alt="img" />
                                        </div>
                                      
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="charitableB">
                        <div className="charitableDescript" style={{padding:'4em 0'}}>
                            <p style={{textAlign:'center', color:'#FFF'}}>Neem sapling, the first of over 100 saplings planted on Pathanamthitta Ring Road, 4 images through different growth periods</p>
                            {/* <p style={{color:'#FFF'}}>{neemDescA} <br /><br />{neemDescB}</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* video */}
        <section style={{padding:'2em'}}>

            {/* <div style={{padding:'6em 4em', display:"flex", flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <div style={{padding:'6em 0'}}><p style={{fontSize:'2.4em', textTransform:'uppercase', fontWeight:'600'}}>Agenda</p></div>
                <div style={{height:'26em', width:'50em'}}>
                    <video style={{height:'100%', width:'100%', borderRadius:'0.4em'}} src="/awards/videoO.mp4" type="video/mp4" playsInline="true" controls="controls"/>
                </div>
            </div> */}


            <div className="collageContainer">
                <div className="collageWrapper"><p>Collage of Efforts</p></div>
                <div className="collageA">
                    <img  src="/awards/collagA.png" alt="collage" />
                </div>
                <div className="collageA">
                    <img src="/awards/collagB.png" alt="collage" />
                </div>
            </div>
        </section>
        </>
    )
}