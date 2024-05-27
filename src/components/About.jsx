import "../App.css"
import jotblanco from '../assets/jotblanco.png';

const About = () => {
    return (
    <div>
        <div className="imgmain">
            <img className="imgjot" src={jotblanco} alt="jotblanco"/>
        </div>
        <section className="about">
            <div>
                <p className="text">A way of living.</p>
                <p className="text">Creamos jot porque admiramos a las mujeres que saben que su valor va mucho más allá de su apariencia física y queremos potenciar a las que todavía no están ahí. Jot es un estilo de vida.</p>
                <p className="text">Para las mujeres que se aman tal cual son, que se respetan, que creen en ellas. Mujeres que pisan fuerte, mujeres empecinadas en cumplir todo eso que desean, mujeres que saben que manifestar su vida ideal es cuestión de ir por ella.</p>
                <p className="text">Mujeres que empoderan a otras porque saben que posta, hay lugar para todas. Mujeres que saben que ser su versión más real y auténtica, es lo verdaderamente jot.</p>
                <p className="text">Todos los sets vienen disponibles en talle S, M y L.</p>
                <p className="text">Esperamos que los ames tanto como nos y sobre todo, te sientas segura, sexy y jot usándolos. Bienvenida!</p>
            </div>
        </section>
    </div>
    )
}

export default About;