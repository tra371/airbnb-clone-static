import './Card.css'


function Card(props) {
    return (
        <div className="card">
            <div className="card-container">
                <img src={props.img} className="card-pic"/>
                {props.availability && <p className="card-text">{props.availability}</p>}
            </div>
            <p><span className="icon-rating"><i class="fa-solid fa-star"></i></span>{props.rating} <span className="grey-text">({props.reviewCount}) &bull; {props.country}</span></p>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / person</p>
        </div>
    )
}

export default Card