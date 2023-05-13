/* eslint-disable @next/next/no-img-element */


export default function AwardsGallery() {


    let text = 'Welcome to our Awards & Gallery section, where we proudly showcase the recognition and impact of our charity work. Here, you will find a collection of achievements, awards, and memorable moments that highlight our dedication to making a positive difference in the lives of others.'

    let showcaseDescript = 'Most trees are planted in different regions of India. Receiving the award from Honarable Prayar Gopalakrishnan, President and MLA of Travancore Devaswom Board for his struggle against natural exploitation.'

    let charitableTitle = 'CHARITABLE BUILDER'

    let cDescA = 'A philanthropist and charitable builder. Mr.Presannan is dedicated to making a positive impact on society by providing housing and other essential services to those in need.'
    let cDescB = 'Mr.Presannan built more than 13000 homes for the Tribals ,poor homeless.He was the District President of Sainik Association'
    let cDescC = 'Chittar Presannan has also been a vocal advocate for social justice and has reacted to several instances of social discrimination. His efforts have helped to bring about positive change and justice in many cases. His activism and dedication to social causes have made him a respected and influential figure in his community.'
    let cDescD = 'Overall, Chittar Praeannan"s life and work exemplify a deep commitment to social justice and community service. His entrepreneurial success and charitable work have made him an inspiration to many and a role model for those who seek to make a positive impact on the world around them.'

    return(
        <>
        <main className="awardsHero">
            <div className="awards_TextContainer">
                <div className="awards_Title">
                    <p>Awards & Gallery</p>
                </div>
                <div style={{width:'80%'}}>
                    <p style={{fontSize:'1.3em', textAlign:'center', fontWeight:'400', lineHeight:'140%', color:'#FFFF'}}>{text}</p>
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
                        <div style={{height:'100%', width: '100%'}}>
                            <img style={{height:'100%', width:'100%', objectFit:'cover', borderRadius:'.4em'}} src="/awards/honorsShowcase.png" alt="image" />
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
            <div className="charitable" style={{padding:'2em 0'}}>
                <div className="charitableContainer" style={{padding:'2em 4em', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <div className="charitableA" style={{width: '48%', height:'80vh'}}>
                        <div style={{height:'100%', width:'100%'}}><img style={{height:'100%', width:'100%', objectFit:'contain'}} src="/awards/CHARITABLEbuilder.png"  alt="image"/></div>
                    </div>
                    <div className="charitableB" style={{width: '48%', display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <div className="charitableTitle" style={{padding:'0 0 2em 0'}}>
                            <p style={{fontSize:'2.4em', fontWeight:'600'}}>{charitableTitle}</p>
                        </div>
                        <div className="charitableDescript" style={{padding:'0.5em 0'}}>
                            <p style={{fontSize:'1.3em', lineHeight:'140%'}}>{cDescA} <br /> <br />{cDescB} <br /><br />{cDescC} <br /><br />{cDescD}</p>
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


            <div className="collageContainer" style={{padding:'12em 0'}}>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center', margin:'0 0 2em 0'}}>
                <div><p style={{fontSize:'2.4em', fontWeight:'600'}}>Collage of Efforts</p></div>
                </div>
                <div className="collageA" style={{height:'200vh', width:'100vw'}}>
                    <img style={{height:'100%', width:'100%', objectFit:'fill'}} src="/awards/collagA.png" alt="collage" />
                </div>
                <div className="collageA" style={{height:'200vh', width:'100vw'}}>
                    <img style={{height:'100%', width:'100%', objectFit:'fill'}} src="/awards/collagB.png" alt="collage" />
                </div>
            </div>
        </section>
        </>
    )
}