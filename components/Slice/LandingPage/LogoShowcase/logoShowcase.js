/* eslint-disable @next/next/no-img-element */


export default function LogoShowcase() {

    let logo_Showcase_Description = 'is a powerful representation of supporting India and its growth in many aspects. The two hands supporting the Indian map signify the idea of supporting India in all ways possible. The top portion of the tree growing on top represents the growth and development of India in various areas, such as education, economy, and environment.'

    return(
        <section className='logo_Showcase'>
            <div className='logo_Showcase_Container'>
                <div className='logo_Showcase_Content'>
                    <div className='logo_Showcase_Image'>
                        <img 
                            src='/Landing/EIFCTLogo.svg' 
                            alt='Logo'/>
                    </div>
                    <div className="logo_Showcase_Description">
                        <p>
                            The logo for <span className="green" style={{fontWeight:'600'}}>ENHANCE INDIA FOUNDATION CHARITABLE TRUST</span> { logo_Showcase_Description }
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}