import "../App.css"
import jot2 from '../assets/jot_2.jpg';
import jot1 from '../assets/jot_1.jpg';
import jot4 from '../assets/jot_4.jpg';
import jotblanco from '../assets/jotblanco.png';
import insta from '../assets/insta.png';
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <section className="inicio">
            <div className="jotmain-container">
                <img className="jotmain" src={jotblanco} alt="Jot Blanco" />
            </div>
            <div className="cardContainermain">
                    <img className="imgCard" src={jot1} alt="" />
                    <img className="imgCard" src={jot2} alt=""/>
                    <img className="imgCard" src={jot4} alt=""/>
            </div>
            <Link to="/sets"><h2>Meet them all!</h2></Link>
            <section className="banner">
            <a href="https://www.instagram.com/wearejot_/"><img src={insta} alt="insta" /></a>
            <p>follow us for more daily jot content @wearejot</p>
        </section>
        </section>
        
    )
}

export default Home
