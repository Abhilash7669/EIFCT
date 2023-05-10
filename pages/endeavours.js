/* eslint-disable @next/next/no-img-element */


export default function Endeavours() {

    let heroDescript = 'At ENHANCE INDIA FOUNDATION CHARITABLE TRUST, we are dedicated to making a positive impact in the lives of individuals and communities. Through our various initiatives, we work tirelessly to address critical social issues, uplift the underprivileged, and create a better future for all. Here is a brief overview of what we do'

    let statsB = [
        {
            src: '/About/trees.svg',
            stat: '10k+',
            desc: 'Trees Planted',
            textColor: '#63764C'
        },
        {
            src: '/About/homesBuilt.svg',
            stat: '10k+',
            desc: 'Homes Built',
            textColor: '#0E6D87'
        },
        {
            src: '/About/food.svg',
            stat: '10k+',
            desc: 'Food relief packages',
            textColor: '#FFECD2' 
        }
    ]

    let phouseDescript = 'Our endeavors are driven by compassion, dedication, and a commitment to creating positive change. Join us in our mission to transform lives and build a more inclusive, sustainable, and empowered society for all.'

    let textA = 'We are passionate about creating inclusive environments that cater to the needs of individuals with disabilities. Through the development of specialized institutions, we provide access to education, vocational training, and essential services, empowering the physically disabled to lead fulfilling lives.'
    let textB = 'Healthcare accessibility is a fundamental right. We work tirelessly to improve medical facilities across India. Our efforts include building hospitals, medical colleges, and research centers in various fields, including Ayurveda and Homeopathy. We also extend medical relief to underprivileged sections of society, ensuring that quality healthcare reaches those in need.'
    let textC = 'Healthcare accessibility is a fundamental right. We work tirelessly to improve medical facilities across India. Our efforts include building hospitals, medical colleges, and research centers in various fields, including Ayurveda and Homeopathy. We also extend medical relief to underprivileged sections of society, ensuring that quality healthcare reaches those in need.'


    return(
        <>
        <main className="endeavorus">
            <div className="endeavours_Container">
                <div className="endeavours_Title">
                    <p>
                        Our Endeavours
                    </p>
                </div>
                <div className="endeavours_Descript">
                    <p>
                        { heroDescript }
                    </p>
                </div>
            </div>
        </main>

        {/* endeavour stats */}
        <section>
            <div style={{backgroundColor:'#222222', padding:'2em 0', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <div className="pHouseTitle">
                    <p style={{color:'#FFF'}}>A Power House of solutions</p>
                </div>
                <div className="pHouseDescript">
                    <p style={{color:'#FFFF'}}>
                        {phouseDescript}
                    </p>
                </div>
            </div>
        <div className="statsB">
                <div className="statsBContainer">
                    <div className="about_StatsItems">
                        {
                            statsB.map((item, i) => {
                                return(
                                    <div className="about_StatsItem" key={i}>
                                        <div className="about_StatsIcon">
                                            <img src={item.src} alt="logo" />
                                        </div>
                                        <div className="about_StatsInfo">
                                            <div className="about_Stats_Stat">
                                                <p>
                                                    {item.stat}
                                                </p>
                                            </div>
                                            <div className="about_Stats_Descript">
                                                <p style={{color:`${item.textColor}`}}>
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
        {/* ---- */}
        {/* solutions section */}
        <section className="ourSol" style={{padding:'2em 0'}}>
            <div className="ourSol_Container">
                        {/* contentA */}
                <div className="ourSol_Content" style={{display:'flex'}}>
                    <div className="ourSol_TextContainer" style={{width:'50%', padding:'0 2em'}}>
                        <div className="ourSol_Text" style={{width:'66%', padding:"2em 0"}}>
                            <p style={{fontSize:'1.6em', fontWeight:'600'}}>
                            <span className="blue">Devloping</span> Institutions for the Physically <span className="blue">Disabled</span> and <span className="blue">Handicapped</span>
                            </p>
                        </div>
                        <div style={{width:'80%'}}>
                            <p style={{fontSize:'1.2em', lineHeight:'150%'}}>{textA}</p>
                        </div>
                    </div>
                    <div className="ourSol_img" style={{width:'50%', height:'32.06em'}}>
                        <img style={{height:'100%', width:'100%', objectFit:'cover'}} src="/endeavours/A.png" alt="img"/>
                    </div>
                </div>
                        {/* Content B */}
                    <div className="ourSol_Content" style={{display:'flex', flexDirection:'row-reverse', justifyContent:'space-between'}}>
                    <div className="ourSol_TextContainer" style={{width:'40%', margin:'2em 0'}}>
                        <div className="ourSol_Text" style={{width:'62%', padding:"2em 0"}}>
                           <p style={{fontSize:'1.6em', fontWeight:'600'}}>
                                <span className="blue">Medical</span> and <span className="blue">Healthcare</span> Initiatives
                                </p>
                        </div>
                        <div style={{width:'80%'}}>
                            <p style={{fontSize:'1.2em', lineHeight:'150%'}}>{textB}</p>
                        </div>
                    </div>
                    <div className="ourSol_img" style={{width:'50%', height:'32.06em'}}>
                        <img style={{height:'100%', width:'100%', objectFit:'cover'}} src="/endeavours/A.png" alt="img"/>
                    </div>
                </div>
                    {/* contentC */}
                    <div className="ourSol_ContentAbsolute" style={{position:'relative', height:'80vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <div style={{position:'absolute', top:'0', left:'0', height:'100%', width:'100%', zIndex:'-100'}}><img style={{height:'100%', width:'100%', objectFit:'cover'}} src="/endeavours/C.png" alt="img" /></div>
                        <div className="" style={{zIndex:'100000', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                            <div style={{padding:'0'}}><p style={{fontSize:'1.6em', color:'#FFF', fontWeight:'600'}}>Yoga, Meditation and Nature Welfare</p></div>
                            <div style={{width:'70%', padding:'2em 0'}}><p style={{fontSize:'1.2em', lineHeight:'150%', textAlign:'center', color:'#FFF'}}>{textC}</p></div>
                        </div>
                    </div>
                    {/* secondSet */}
                            {/* contentA */}
                <div className="ourSol_Content" style={{display:'flex'}}>
                    <div className="ourSol_TextContainer" style={{width:'50%', padding:'0 2em', margin:'4em 0'}}>
                        <div className="ourSol_Text" style={{width:'66%', padding:"2em 0"}}>
                            <p style={{fontSize:'1.6em', fontWeight:'600'}}>
                            <span className="blue">Devloping</span> Institutions for the Physically <span className="blue">Disabled</span> and <span className="blue">Handicapped</span>
                            </p>
                        </div>
                        <div style={{width:'80%'}}>
                            <p style={{fontSize:'1.2em', lineHeight:'150%'}}>{textA}</p>
                        </div>
                    </div>
                    <div className="ourSol_img" style={{width:'50%', height:'32.06em'}}>
                        <img style={{height:'100%', width:'100%', objectFit:'cover'}} src="/endeavours/D.png" alt="img"/>
                    </div>
                </div>
                        {/* Content B */}
                    <div className="ourSol_Content" style={{display:'flex', flexDirection:'row-reverse', justifyContent:'space-between'}}>
                    <div className="ourSol_TextContainer" style={{width:'40%', margin:'2em 0'}}>
                        <div className="ourSol_Text" style={{width:'62%', padding:"2em 0"}}>
                           <p style={{fontSize:'1.6em', fontWeight:'600'}}>
                                <span className="blue">Medical</span> and <span className="blue">Healthcare</span> Initiatives
                                </p>
                        </div>
                        <div style={{width:'80%'}}>
                            <p style={{fontSize:'1.2em', lineHeight:'150%'}}>{textB}</p>
                        </div>
                    </div>
                    <div className="ourSol_img" style={{width:'50%', height:'32.06em'}}>
                        <img style={{height:'100%', width:'100%', objectFit:'cover'}} src="/endeavours/E.png" alt="img"/>
                    </div>
                </div>
                    {/* contentC */}
                    <div className="ourSol_ContentAbsolute" style={{position:'relative', height:'80vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <div style={{position:'absolute', top:'0', left:'0', height:'100%', width:'100%', zIndex:'-100'}}><img style={{height:'100%', width:'100%', objectFit:'cover'}} src="/endeavours/F.png" alt="img" /></div>
                        <div className="" style={{zIndex:'100000', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                            <div style={{padding:'0'}}><p style={{fontSize:'1.6em', color:'#FFF', fontWeight:'600'}}>Yoga, Meditation and Nature Welfare</p></div>
                            <div style={{width:'70%', padding:'2em 0'}}><p style={{fontSize:'1.2em', lineHeight:'150%', textAlign:'center', color:'#FFF'}}>{textC}</p></div>
                        </div>
                    </div>
            </div>
        </section>
        </>
    )
}