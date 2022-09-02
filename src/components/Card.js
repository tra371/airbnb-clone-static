import './Card.css'


function Card(props) {
    // console.log(props.item)
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    } else {
        badgeText = ""
    }
    return (
        <div className="card">
            <div className="card-container">
                <img src={`../images/${props.img}`} className="card-pic"/>
                {badgeText && <p className="card-badge">{badgeText}</p>}
            </div>
            <p><span className="icon-rating"><i className="fa-solid fa-star"></i></span>{props.stats.rating} <span className="grey-text">({props.stats.reviewCount}) &bull; {props.location}</span></p>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / person</p>
        </div>
    )
}

export default Card