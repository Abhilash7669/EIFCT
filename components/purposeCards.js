/* eslint-disable @next/next/no-img-element */


export default function PurposeCard({ data, style, className }){

    return(
        <div style={style} className={className}>
            <div className="purpose_Card_img">
                <img src={data.src} alt="image" />
            </div>
            <div className="purpose_Card_Text">
                <div className="purpose_Card_title">
                    <p>
                        {data.title}
                    </p>
                </div>
                <div className="purpose_Card_description">
                    <p>
                        {data.description}
                    </p>
                </div>
            </div>
        </div>
    )
}