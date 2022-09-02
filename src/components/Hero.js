import './Hero.css'
import heropic from '../images/hero_pic.png'

function Hero() {
    return (
        <section>
            <img src={heropic} className="hero-pic"/>
            <div className="hero-text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
            </div>
        </section>
    )
}

export default Hero