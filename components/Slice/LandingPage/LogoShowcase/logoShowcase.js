/* eslint-disable @next/next/no-img-element */


export default function LogoShowcase() {

    let logo_Showcase_Description = 'is a powerful representation of supporting India and its growth in many aspects. The two hands supporting the Indian map signify the idea of supporting India in all ways possible. The top portion of the tree growing on top represents the growth and development of India in various areas, such as education, economy, and environment.'

    let textB = 'Planting trees across India is an essential step towards creating a sustainable environment ,reducing pollution and a remedy for global warming. Providing food, jobs, and homes for all Indians is crucial in ensuring the well-being and prosperity of the country"s citizens. Building educational institutions and providing quality education to all Indians is a significant step towards developing Indian culture and promoting innovation and progress.'
    
    let textC = 'Maintaining peace and harmony is essential for the growth and development of any country, and India, with its diverse culture and traditions, can serve as an example to the world. By supporting India in these various ways, we can contribute to the country"s growth and development and make it a better place for all its citizens.'

    let FoundersMessage = "Founder's message"

    return(
        <section className='logo_Showcase'>
            <div className='logo_Showcase_Container'>
                <div className='logo_Showcase_Content'>
                    <div className="Founders_Message">
                        <p>{FoundersMessage}</p>
                    </div>
                    <div className='logo_Showcase_Image'>
                        <img 
                            src='/Landing/EIFCTLogo.svg' 
                            alt='Logo'/>
                    </div>
                    <div className="logo_Showcase_Description">
                        <p>
                            The logo for <span className="green" style={{fontWeight:'600'}}>ENHANCE INDIA FOUNDATION CHARITABLE TRUST</span> { logo_Showcase_Description }<br /><br /> {textB}<br /><br />{textC}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}