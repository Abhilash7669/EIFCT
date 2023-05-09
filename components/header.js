/* eslint-disable @next/next/no-img-element */


export default function Header(){

    let navItem = [{item: 'About us'},{item: 'Endeavours'},{item: 'Awards and Gallery'}];

    return(
        <nav className="nav">
            <div className="nav_Container">
                <div className="logo_Container">
                    <img 
                        style={{height:'100%', width:'100%', objectFit:'cover'}} 
                        src="/EIFCTLogo.svg" 
                        alt="EIFCT"/>
                </div>
                <div className="nav_List">
                    {
                        navItem.map((item, i) => {
                            return(
                                <div className="navItem" key={i}>
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