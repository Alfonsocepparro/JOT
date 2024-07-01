import wasap from '../assets/whatsapp.png';
import insta from '../assets/insta.png';

const Footer = () => {
    return (
        <footer>
            <section className="banner">
                <a href="https://www.instagram.com/wearejot_/"><img src={insta} alt="insta" /></a>
                <p>follow us for more daily jot content @wearejot</p>
            </section>
            <section className='futer'>
                <div className="info">
                    <h3>CONTACTANOS</h3>
                    <div className="contact-details">
                        <div className="contact-item">
                        <a href=""><img src={wasap} alt="wasap" /></a>
                            <span className="text">get your set here</span>
                        </div>
                        <div className="contact-item">
                            <span className="text">wearejot@gmail.com</span>
                        </div>
                        <div className="contact-item">
                            <span className="text">Madrid, España</span>
                        </div>
                    </div>
                </div>
                <div className="redes">
                    <h3>REDES SOCIALES</h3>
                    <a href="https://www.instagram.com/wearejot_/"></a>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
