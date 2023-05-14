/* eslint-disable @next/next/no-img-element */

import Link from "next/link";


export default function Header(){

    let navItem = [{item: 'Home', link: '/'},{item: 'About us', link:'/about-us'},{item: 'Endeavours', link:'/endeavours'},{item: 'Awards and Gallery', link:'/awards&gallery'}];

    return(
        <nav className="nav">
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
                                <Link href={data.link} className="navItem" key={i}>
                                    <p>{data.item}</p>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </nav>
    )
}