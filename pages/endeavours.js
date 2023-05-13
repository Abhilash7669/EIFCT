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
                    <div className="pHouseContainer">
                        <div className="pHouseTitle">
                            <p style={{color:'#000'}}>A Power House of Solutions</p>
                        </div>
                        <div className="pHouseDescript">
                            <p style={{color:'#000'}}>
                                {phouseDescript}
                            </p>
                        </div>
                    </div>
                    <div className="ourSol_Content">
                        <div className="ourSol_TextContainer">
                            <div className="ourSol_Text">
                                <p>
                                <span className="blue">Devloping</span> Institutions for the Physically <span className="blue">Disabled</span> and <span className="blue">Handicapped</span>
                                </p>
                            </div>
                                <div className="ourSol_img mob">
                                    <img src="/endeavours/A.png" alt="img"/>
                                </div>
                            <div className="ourSol_Descript">
                                <p>{textA}</p>
                            </div>
                        </div>
                        <div className="ourSol_img">
                            <img src="/endeavours/A.png" alt="img"/>
                        </div>
                    </div>
                        {/* Content B */}
                    <div className="ourSol_Content reverse" >
                        <div className="ourSol_TextContainer setB">
                            <div className="ourSol_Text setBtext ">
                            <p>
                                    <span className="blue">Medical</span> and <span className="blue">Healthcare</span> Initiatives
                                    </p>
                            </div>
                            <div className="ourSol_img mob">
                                <img src="/endeavours/A.png" alt="img"/>
                            </div>
                            <div className="ourSol_Descript">
                                <p>{textB}</p>
                            </div>
                        </div>
                        <div className="ourSol_img">
                            <img src="/endeavours/A.png" alt="img"/>
                        </div>
                    </div>
                    {/* contentC */}
                    <div className="ourSol_ContentAbsolute">
                        <div className="ourSol_AbsoluteContent">
                            <div className="ourSol_AbsoluteTitle"><p>Yoga, Meditation and Nature Welfare</p></div>
                            <div className="ourSol_AbsoluteDescript"><p  >{textC}</p></div>
                        </div>
                    </div>
                    {/* secondSet */}
                    {/* contentA */}
                    <div className="ourSol_Content">
                        <div className="ourSol_TextContainer">
                            <div className="ourSol_Text">
                                <p>
                                <span className="blue">Developing</span> Institutions for the Physically <span className="blue">Disabled</span> and <span className="blue">Handicapped</span>
                                </p>
                            </div>
                            <div className="ourSol_img mob">
                                <img src="/endeavours/D.png" alt="img"/>
                            </div>
                            <div className="ourSol_Descript">
                                <p>{textA}</p>
                            </div>
                        </div>
                        <div className="ourSol_img">
                            <img src="/endeavours/D.png" alt="img"/>
                        </div>
                    </div>
                        {/* Content B */}
                    <div className="ourSol_Content reverse">
                        <div className="ourSol_TextContainer setB">
                            <div className="ourSol_Text setBtext">
                            <p>
                            <span className="blue">Medical</span> and <span className="blue">Healthcare</span> Initiatives
                            </p>
                            </div>
                            <div className="ourSol_img mob">
                                <img src="/endeavours/E.png" alt="img"/>
                            </div>
                            <div className="ourSol_Descript">
                                <p>{textB}</p>
                            </div>
                        </div>
                        <div className="ourSol_img">
                            <img src="/endeavours/E.png" alt="img"/>
                        </div>
                    </div>
                    {/* contentC */}
                    <div className="ourSol_ContentAbsolute C" >
                        <div className="ourSol_AbsoluteContent">
                            <div className="ourSol_AbsoluteTitle"><p>Yoga, Meditation and Nature Welfare</p></div>
                            <div className="ourSol_AbsoluteDescript"><p>{textC}</p></div>
                        </div>
                    </div>
            </div>
        </section>
        </>
    )
}