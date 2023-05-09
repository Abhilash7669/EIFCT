

export default function ShowcaseA(){

    let description = 'Through our efforts to build homes for the homeless, orphans, and elderly, and our commitment to planting ayurvedic plants and building medical institutions, we are working to create a better future for all. Join us in making a positive impact on the world'

    return(
        <section className="showcaseA">
            <div className="showcaseA_Container">
                <div className="showcaseA_Content">
                    <p>
                        { description }
                    </p>
                </div>
            </div>
        </section>
    )
}