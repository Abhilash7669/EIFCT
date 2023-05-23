/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useEffect, useRef, useState } from "react";


export default function Header(){

    const [openBurger, setOpenBurger] = useState(false)

    let navItem = [{item: 'Home', link: '/'},{item: 'About us', link:'/about-us'},{item: 'Endeavours', link:'/endeavours'},{item: 'Awards and Gallery', link:'/awards&gallery'},{item: 'Contact', link:'/contact'}];

    const navRef = useRef();

    useEffect(() => {

        let mobLogo = document.querySelector('.navMob_LogoContainer');
        let hamburger = document.querySelector('.hamburger');

        window.onscroll = () => {
            if(window.scrollY > 6) {
                navRef.current.style.background = 'none'
                mobLogo.style.opacity = '0'

                hamburger.style.background = 'rgba(255,255,255,0.3)'
            }
            else {
                navRef.current.style.background = 'rgba(255,255,255,1)'
                mobLogo.style.opacity = '1'
                hamburger.style.background = 'none'
            }
        }
    })

     //anim
     let quint = 'cubic-bezier(0.85, 0, 0.15, 1)';
     let quart = 'cubic-bezier(0.76, 0.00, 0.24, 1.00)';

    const hmbrgr = () => {
        let nav = document.querySelector(".nav");
        let lineA = document.querySelector('.line1')
        let lineC = document.querySelector('.line3')


        if (openBurger) {
            nav.style.transform = 'translateY(0)';
            lineA.style.transform = 'rotate(137deg)'
            lineA.style.margin = '0'
            lineC.style.margin = '0'

            lineC.style.transform = 'rotate(-137deg)'



        }
        else if(!openBurger) {
            lineA.style.margin = '0 0 1em 0'

            lineA.style.transform = 'rotate(0deg) '


            lineC.style.transform = 'rotate(0deg)'

            setTimeout(() => {
                nav.style.transform = 'translateY(-200%)';
            }, 500)

        }
        setOpenBurger(!openBurger)
    }
    
    return(
        <>
        <nav className="nav" style={{transition: `all 1.5s ${quint}`}}>
            <div className="nav_Container">
                <Link href={'/'} style={{cursor:'pointer'}} className="logo_Container">
                    <img 
                        style={{height:'100%', width:'100%', objectFit:'cover'}} 
                        src="/Landing/EIFCTLogo.svg" 
                        alt="EIFCT"/>
                </Link>
                <div className="nav_List">
                    {
                        navItem.map((data, i) => {

                            return(
                                <Link href={data.link} className="navItem grBold" key={i}>
                                    <p>{data.item}</p>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="nav_List mob">
                    {
                        navItem.map((data, i) => {

                            return(
                                <Link onClick={hmbrgr} href={data.link} className="navItem" key={i}>
                                    <p>{data.item}</p>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </nav>
        {/* mobile */}
        <nav ref={navRef} className="mobNav" style={{transition:`all 1s ${quart}`}}>
            <div className="navMob_LogoContainer" style={{ height:'20em', width:'20em', transition:`all 1s ${quart}`}}>
                <Link href={'/'} style={{cursor:'pointer'}}>
                    <img 
                        style={{height:'100%', width:'100%', objectFit:'cover'}} 
                        src="/Landing/EIFCTLogo.svg" 
                        alt="EIFCT"/>
                </Link>
            </div>
            <div className="hamburger"  onClick={hmbrgr} >
                    <div className="line1" style={{transition: `all 1s ${quint}`}}></div>
                    <div className="line3" style={{transition: `all 1s ${quint}`}}></div>
            </div>
        </nav>
        </>
    )
}