/* eslint-disable @next/next/no-img-element */


export default function Header(){

    let navItem = [{item: 'About us', link:'/about-us'},{item: 'Endeavours', link:'/'},{item: 'Awards and Gallery', link:'/'}];

    return(
        <nav className="nav">
            <div className="nav_Container">
                <div onClick={() => window.location.href='/'} style={{cursor:'pointer'}} className="logo_Container">
                    <img 
                        style={{height:'100%', width:'100%', objectFit:'cover'}} 
                        src="/Landing/EIFCTLogo.svg" 
                        alt="EIFCT"/>
                </div>
                <div className="nav_List">
                    {
                        navItem.map((item, i) => {
                            return(
                                <div onClick={() => window.location.href=item.link} className="navItem" key={i}>
                                    <p>{item.item}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </nav>
    )
}