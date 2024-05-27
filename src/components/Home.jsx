import "../App.css"
import jot2 from '../assets/jot_2.jpg';
import jot1 from '../assets/jot_1.jpg';
import jot4 from '../assets/jot_4.jpg';
import jotblanco from '../assets/jotblanco.png';
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <section className="inicio">
            <div className="imgmain">
                <img className="imgjot" src={jotblanco} alt="Jot Blanco" />
            </div>
            <div className="cardContainermain">
                    <img className="imgCard" src={jot1} alt="" />
                    <img className="imgCard" src={jot2} alt=""/>
                    <img className="imgCard" src={jot4} alt=""/>
            </div>
            <Link to="/sets"><h2>Meet them all!</h2></Link>
        </section>
        
    )
}

export default Home
