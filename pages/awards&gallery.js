/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import "swiper/css/free-mode";
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 

import Head from 'next/head'


//gsap
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger)


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
    let cDescD = 'Overall, Chittar Presannan"s life and work exemplify a deep commitment to social justice and community service. His entrepreneurial success and charitable work have made him an inspiration to many and a role model for those who seek to make a positive impact on the world around them.'

    let carouselImg = [
         {
            src: '/awards/neem/neemA.png'
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
        {
            src: '/awards/neem/neemA.png'
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

    let gridB = [
        {
            src:'/awards/grid/girdA/imgA.png'
        },
        {
            src:'/awards/grid/girdA/imgB.png'
        },
        {
            src:'/awards/grid/girdA/imgC.png'
        },
        {
            src:'/awards/grid/girdA/imgD.png'
        },
        {
            src:'/awards/grid/girdA/imgE.png'
        },
        {
            src:'/awards/grid/girdA/imgF.png'
        },
    ]

    let gridA = [
        {
            src:'/awards/grid/gridB/imgA.png'
        },
        {
            src:'/awards/grid/gridB/imgB.png'
        },
        {
            src:'/awards/grid/gridB/imgC.png'
        },
        {
            src:'/awards/grid/gridB/imgD.png'
        },
        {
            src:'/awards/grid/gridB/imgE.png'
        },
        {
            src:'/awards/grid/gridB/imgF.png'
        },
    ]

    let gridC = [
        {
            src:'/awards/grid/gridC/imgA.png'
        },
        {
            src:'/awards/grid/gridC/imgB.png'
        },
        {
            src:'/awards/grid/gridC/imgC.png'
        },
        {
            src:'/awards/grid/gridC/imgD.png'
        },
        {
            src:'/awards/grid/gridC/imgE.png'
        },
        {
            src:'/awards/grid/gridC/imgF.png'
        },
    ]

    let gridD = [
        {
            src:'/awards/grid/gridD/imgA.png'
        },
        {
            src:'/awards/grid/gridD/imgB.png'
        },
        {
            src:'/awards/grid/gridD/imgC.png'
        },
        {
            src:'/awards/grid/gridD/imgD.png'
        },
        {
            src:'/awards/grid/gridD/imgE.png'
        },
        {
            src:'/awards/grid/gridD/imgF.png'
        },
    ]

    //anim
    let quint = 'cubic-bezier(0.85, 0, 0.15, 1)';
    let quart = 'cubic-bezier(0.76, 0.00, 0.24, 1.00)';
    

    useEffect(() => {

        gsap.to('.awrdsTitle', {
            scrollTrigger: {
                trigger: '.awrdsTitle',
                start: 'top bottom',
            },
             y: 0,
            duration: 0.2,
        })

        gsap.to('.awardDesc', {
            scrollTrigger: {
                trigger: '.awardDesc',
                start: 'top bottom',
            },
             y: 0,
            duration: 0.6,
        })
        
        gsap.to('.honr', {
            scrollTrigger: {
                trigger: '.honr',
                start: 'top bottom',
            },
             y: 0,
            duration: 0.3,
        })

        gsap.to('.honorsShowcase', {
            scrollTrigger: {
                trigger: '.honorsShowcase',
                start: 'top bottom',
            },
             opacity: 1,
            duration: 1,
        })

        gsap.to('.hnrDesc', {
            scrollTrigger: {
                trigger: '.hnrDesc',
                start: 'top bottom',
            },
             y: 0,
            duration: 0.3,
        })

        gsap.to('.chartImg', {
            scrollTrigger: {
                trigger: '.charitableA',
                start: 'top bottom',
            },
             y: 0,
            duration: 0.3,
        })

        gsap.to('.charttTitle', {
            scrollTrigger: {
                trigger: '.charitableB',
                start: 'top bottom',
            },
             y: 0,
            duration: 0.3,
        })

        gsap.to('.chartDesccc', {
            scrollTrigger: {
                trigger: '.charitableDescript',
                start: 'top bottom',
            },
             x: 0,
            duration: 0.3,
        })


        // NEEM
        gsap.to('.nemTit', {
            scrollTrigger: {
                trigger: '.nemTit',
                start: 'top bottom',
            },
             y: 0,
            duration: 0.3,
        })

        gsap.to('.carouselContainer', {
            scrollTrigger: {
                trigger: '.carouselContainer',
                start: 'top bottom',
            },
             x: 0,
            duration: 0.3,
        })

        gsap.to('.chartDesc', {
            scrollTrigger: {
                trigger: '.chartDesc',
                start: 'top bottom',
            },
             y: 0,
            duration: 0.3,
        })

        // effort
        
        gsap.to('.effrtTit', {
            scrollTrigger: {
                trigger: '.effrtTit',
                start: 'top bottom',
            },
             y: 0,
            duration: 0.3,
        })

         gsap.to('.gridCont', {
             scrollTrigger: {
                 trigger: '.gridCont',
                 start: 'top bottom',
             },
              opacity: 1,
              scale: 1,
             duration: 0.3,
         })

    })

    return(
        <>
        <Head>
            {/* <!-- Primary Meta Tags --> */}
            <title>EnhanceIndiaFoundation</title>
            <meta name="title" content="EnhanceIndiaFoundation" />
            <meta name="description" content="We believe that every person deserves the opportunity to live a life of dignity and purpose, and it is our goal to help make this a reality for as many people as possible." />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://metatags.io" />
            <meta property="og:title" content="EnhanceIndiaFoundation" />
            <meta property="og:description" content="We believe that every person deserves the opportunity to live a life of dignity and purpose, and it is our goal to help make this a reality for as many people as possible." />
            <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://metatags.io" />
            <meta property="twitter:title" content="EnhanceIndiaFoundation" />
            <meta property="twitter:description" content="We believe that every person deserves the opportunity to live a life of dignity and purpose, and it is our goal to help make this a reality for as many people as possible." />
            <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"></meta>

            {/* favicon */}
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest"></link>
        </Head>
        <main className="awardsHero">
            <div className="awards_TextContainer">
                <div className="awards_Title grBold ofh">
                    <p className='awrdsTitle' style={{transform:'translateY(150%)', transition: `all 0.6s ${quint}`}}>Awards & Gallery</p>
                </div>
                <div className="awards_Descript ofh">
                    <p className='awardDesc' style={{transform:'translateY(150%)', transition: `all 0.6s ${quint}`}}>{text}</p>
                </div>
            </div>
        </main>

        {/* honors */}
        <section className="honors">
            <div className="honorsContainer">
                <div className="honorsWrapper">
                    <div className="honorsWrapperTitle grBold ofh">
                        <p className='honr' style={{transform:'translateY(200%)', transition: `all 0.6s ${quint}`}}>Honors & Achievements</p>
                    </div>
                    <div className="honorsShowcase" style={{opacity:'0', transition: `all 0.6s ${quint}`}}>
                        <div className="honorsImgShowcase" style={{height:'100%', width: '100%'}}>
                            <img style={{borderRadius:'.4em'}} src="/awards/honorsShowcase.png" alt="image" />
                        </div>
                    </div>
                    <div className="honorsDescript ofh">
                        <p className='hnrDesc' style={{transform:'translateY(200%)', transition: `all 0.6s ${quint}`}}>{showcaseDescript}</p>
                    </div>
                </div>
            </div>
        </section>
        {/* charitable Builder */}
        <section className="charitableMain" >
            <div className="charitable">
                <div className="charitableContainer">
                    <div className="charitableA ofh">
                        <div className='chartImg' style={{height:'100%', width:'100%', transform:'translateY(200%)', transition: `all 0.6s ${quint}`}}>
                            <img style={{height:'100%', width:'100%', objectFit:'contain'}} src="/awards/CHARITABLEbuilder.png"  alt="image"/>
                        </div>
                        {/* mobile-title */}
                        <div className="charitableTitle mob grBold ofh">
                            <p className='charttTitle' style={{transform:'translateY(200%)', transition: `all 0.6s ${quint}`}}>{charitableTitle}</p>
                        </div>
                        {/* ---- */}
                    </div>
                    <div className="charitableB">
                        <div className="charitableTitle grBold ofh">
                            <p className='charttTitle' style={{transform:'translateY(200%)', transition: `all 0.6s ${quint}`}} >{charitableTitle}</p>
                        </div>
                        {/* mobile-img */}
                        <div className="charitableA mob ofh">
                            <div className='chartImg' style={{height:'100%', width:'100%', transform:'translateY(200%)', transition: `all 0.6s ${quint}`}}><img style={{height:'100%', width:'100%', objectFit:'contain'}} src="/awards/CHARITABLEbuilder.png"  alt="image"/></div>
                        </div>
                        {/* ----- */}
                        <div className="charitableDescript ofh">
                            <p className='chartDesccc' style={{transform:'translateX(200%)', transition: `all 0.6s ${quint}`}}>{cDescA} <br /> <br />{cDescB} <br /><br />{cDescC} <br /><br />{cDescD}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="neemMain" style={{background:'#224435'}}>
            <div className="neem">
                <div className="neemContainer">
                    <div className="neemA">
                        <div className="neemTitle grBold ofh" style={{padding:'2em 0 4em 0'}}>
                            <p className='nemTit' style={{color:'#FFF',transform:'translateY(200%)', transition: `all 0.6s ${quint}`}}>{neemTitle}</p>
                        </div>
                        {/* carousel */}
                        <div className="carouselContainer" style={{display:'flex', alignItems:'center', width:'100%', overflow:'hidden', flexWrap:'nowrap', whiteSpace:'nowrap', transform:'translateX(120%)', transition: `all 0.6s ${quint}`}}>
                            {
                                carouselImg.map((data, i) => {
                                    return(
                                        <div className="neemAnim" key={i}>
                                            <img style={{height:'100%', width:'100%', objectFit:'cover'}} src={data.src} alt="img" />
                                        </div>
                                      
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="charitableB">
                        <div className="charitableDescript ofh" style={{padding:'4em 0'}}>
                            <p className='chartDesc' style={{textAlign:'center', color:'#FFF', transform:'translateY(200%)', transition: `all 0.6s ${quint}`}}>Neem sapling, the first of over 100 saplings planted on Pathanamthitta Ring Road, 4 images through different growth periods</p>
                            {/* <p style={{color:'#FFF'}}>{neemDescA} <br /><br />{neemDescB}</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* video */}
        {/* <div className='videoContainer' style={{display:"flex", flexDirection:'column', alignItems:'center', justifyContent:'center', background:'#224435'}}>
                <div style={{padding:'0 0 4em 0'}}><p style={{fontSize:'2.4em', textTransform:'uppercase', fontWeight:'600', color:'#FFF'}}>Agenda</p></div>
                <div style={{height:'26em', width:'50em'}}>
                    <video style={{height:'100%', width:'100%', borderRadius:'0.4em'}} src="/awards/wOCvid.mp4" type="video/mp4" playsInline="true" controls="controls"/>
                </div>
            </div> */}
        <section style={{padding:'2em'}}>


            {/* grid swiper */}
            <div className='gridSwiper'>
                <div className='gridSwiperWrap' style={{display:'flex', alignItems:'center', justifyContent:'center'}}><div className='gridSwiperTitle grBold ofh'><p className='effrtTit' style={{transform:'translateY(100%)',  transition: `all 0.6s ${quint}`}}>Our Efforts</p></div></div>
                <div className='gridCont' style={{opacity:'0', scale:'0', transition: `all 0.6s ${quint}`}}>
                    <Swiper className="gridSwiperContainer" style={{cursor:'grab',scrollSnapType:'x mandatory',scrollPadding:'0 24px',
                            "--swiper-navigation-size":'2rem'}} 
                            spaceBetween={20}
                            speed={1000}
                            navigation={true}
                            modules={[Navigation]}
                            slidesPerView={1}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}>
                        {/* gridA */}
                        <SwiperSlide className="gridA" style={{display:'flex', flexWrap:'wrap'}}>
                            {
                                gridC.map((data, i) => {
                                    return(
                                        <div key={i} style={{height:'20em', width:'33.33%', margin:'1em 0'}}>
                                            <img style={{height:'100%', width:'100%', objectFit:'contain'}} src={data.src} alt="image" />
                                        </div>
                                    )
                                })
                            }
                        </SwiperSlide>
                        {/* gridB */}
                        <SwiperSlide className="gridA" style={{display:'flex', flexWrap:'wrap'}}>
                            {
                                gridB.map((data, i) => {
                                    return(
                                        <div key={i} style={{height:'20em', width:'33.33%', margin:'1em 0'}}>
                                            <img style={{height:'100%', width:'100%', objectFit:'contain'}} src={data.src} alt="image" />
                                        </div>
                                    )
                                })
                            }
                        </SwiperSlide>
                        <SwiperSlide className="gridA" style={{display:'flex', flexWrap:'wrap'}}>
                            {
                                gridD.map((data, i) => {
                                    return(
                                        <div key={i} style={{height:'20em', width:'33.33%', margin:'1em 0'}}>
                                            <img style={{height:'100%', width:'100%', objectFit:'contain'}} src={data.src} alt="image" />
                                        </div>
                                    )
                                })
                            }
                        </SwiperSlide>
                        <SwiperSlide className="gridA" style={{display:'flex', flexWrap:'wrap'}}>
                            {
                                gridA.map((data, i) => {
                                    return(
                                        <div key={i} style={{height:'20em', width:'33.33%', margin:'1em 0'}}>
                                            <img style={{height:'100%', width:'100%', objectFit:'contain'}} src={data.src} alt="image" />
                                        </div>
                                    )
                                })
                            }
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            {/* grid mob */}
            <div className='gridSwiper mob'>
                <div className='gridSwiperWrap' style={{display:'flex', alignItems:'center', justifyContent:'center'}}><div className='gridSwiperTitle'><p>Our Efforts</p></div></div>
                <div className='gridCont' style={{opacity:'0', scale:'0', transition: `all 0.6s ${quint}`}}>
                <Swiper className="gridSwiperContainer" style={{cursor:'grab',scrollSnapType:'x mandatory',scrollPadding:'0 24px',"--swiper-pagination-bottom": "0px", padding:'0 0 4em 0',
                        "--swiper-navigation-size":'2rem'}} 
                        spaceBetween={20}
                        speed={1000}
                        pagination={true}
                        modules={[Pagination]}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}>
                    {/* gridA */}
                    <SwiperSlide className="gridA" style={{display:'flex', flexWrap:'wrap'}}>
                        {
                            gridC.map((data, i) => {
                                return(
                                    <div key={i} style={{height:'20em', width:'45%', margin:'1em 1em'}}>
                                        <img style={{height:'100%', width:'100%', objectFit:'contain'}} src={data.src} alt="image" />
                                    </div>
                                )
                            })
                        }
                    </SwiperSlide>
                    {/* gridB */}
                    <SwiperSlide className="gridA" style={{display:'flex', flexWrap:'wrap'}}>
                        {
                            gridB.map((data, i) => {
                                return(
                                    <div key={i} style={{height:'20em', width:'45%', margin:'1em 1em'}}>
                                        <img style={{height:'100%', width:'100%', objectFit:'contain'}} src={data.src} alt="image" />
                                    </div>
                                )
                            })
                        }
                    </SwiperSlide>
                    <SwiperSlide className="gridA" style={{display:'flex', flexWrap:'wrap'}}>
                        {
                            gridD.map((data, i) => {
                                return(
                                    <div key={i} style={{height:'20em', width:'45%', margin:'1em 1em'}}>
                                        <img style={{height:'100%', width:'100%', objectFit:'contain'}} src={data.src} alt="image" />
                                    </div>
                                )
                            })
                        }
                    </SwiperSlide>
                    <SwiperSlide className="gridA" style={{display:'flex', flexWrap:'wrap'}}>
                        {
                            gridA.map((data, i) => {
                                return(
                                    <div key={i} style={{height:'20em', width:'45%', margin:'1em 1em'}}>
                                        <img style={{height:'100%', width:'100%', objectFit:'contain'}} src={data.src} alt="image" />
                                    </div>
                                )
                            })
                        }
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
            
        </section>
        </>
    )
}