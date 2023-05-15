/* eslint-disable @next/next/no-img-element */


export default function Stats(){

    let statData = [
        {
            title: '2000+',
            description: 'Institutions Built and others under progress',
            src: '/Landing/stats/Institutions.png'
        },
        {
            title: '1000+',
            description: 'Women Empowered',
            src: '/Landing/stats/wEmpower.png'
        },
        {
            title: '10,000+',
            description: 'Homes Built',
            src: '/Landing/stats/homesBuilt.png'
        },
    ]

    return(
        <section className="stats">
            <div className="stats_Container">
                <div className="stats_Content">
                    {
                        statData.map((data, i) => {
                            return(
                                <div className="stat_Item" key={i}>
                                    <div className="stat_Img" style={{position:'absolute', top:'0', left:'0'}} >
                                        <img 
                                            style={{height:'100%', width:'100%', objectFit:'cover'}} 
                                            src={ data.src } alt="image" />
                                    </div>
                                    <div className="stat_Info">
                                        <div className="statA">
                                            <p>
                                                { data.title }
                                            </p>
                                        </div>
                                        <div className="stat_Descript" style={{textAlign:'center'}}>
                                            <p>{ data.description }</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}