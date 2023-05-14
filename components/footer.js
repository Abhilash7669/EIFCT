/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";


export default function Footer() {

    let footerItem = [
        {
            item: 'About us',
            link: '/about-us'
        },
        {
            item: 'Endeavours',
            link: '/endeavours'
        },
        {
            item: 'Awards & Gallery',
            link: '/awards&gallery'
        }
    ]

    let footerSocial = [
        {
            src: '/footer/ytIcon.svg',
            link:'https://www.youtube.com/'
        },
        {
            src: '/footer/instaIcon.svg',
            link:'https://www.instagram.com/'
        },
        {
            src: '/footer/fbIcon.svg',
            link:'https://www.facebook.com/'
        },
    ]

    return(
        <>
        <footer className="footer">
            <div className="footerContainer">
                <div onClick={() => window.location.href='/'} className="footerLogo" style={{background:'#FFFF', width:'fit-content', borderRadius:'0.75em', display:'flex' ,alignItems:'center', justifyContent:'center'}}>
                    <Image height={200} width={200} src="/Landing/EIFCTLogo.svg" alt="EIFCT" />
                </div>
                <div className="footerInfo_Container">
                    <div className="footerInfo">
                        <div className="footerInfo_Header"><p>Navigation</p></div>
                        <div className="footerInfoItems">
                            {
                                footerItem.map((data, i) => {
                                    return(
                                        <div className="footerItem" key={i}>
                                            <Link className="footerItemText" href={data.link}><p>{data.item}</p></Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="footerSocial">
                        <div className="footerInfo_Header"><p>Social</p></div>
                        <div className="footerSocialItems">
                            {
                                footerSocial.map((data, i) => {
                                    return(
                                        <Link href={data.link} className="footerSocialItem" key={i}>
                                            <img src={data.src} alt="socials" />
                                        </Link>
                                    )
                                })
                            }
                        </div>  
                    </div>
                    <div className="footerContact">
                        <div className="footerInfo_Header"><p>Contact</p></div>
                        <div className="footerAdddress_Items">
                            {[{
                                address:'ENHANCE INDIA FOUNDATION CHARITABLE TRUST,M&S TOWERS, PERINGALA POST, COCHIN,KERALA STATE, INDIA. PIN - 683565',
                                mail: 'enhanceindiafoundation@gmail.com',
                                mailLink: 'mailto: enhanceindiafoundation@gmail.com',
                                tel: '+918086333033',
                                telLink:'tel: +918086333033'
                            }].map((data, i) => {
                                return(
                                    <div className="footerAddress_Item" key={i}>
                                        <div className="footerAddress"><p>{data.address}</p></div>
                                        <div className="footerMail"><a href={data.mailLink}>{data.mail}</a></div>
                                        <div className="footerTel"><a href={data.telLink}>{data.tel}</a></div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}