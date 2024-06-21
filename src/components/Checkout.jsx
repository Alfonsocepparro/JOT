import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import '../App.css';

const Checkout = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    
    return (
        <div className="contact-form">
            <h2>Contáctanos</h2>
            <form id="whatsapp-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Teléfono:</label>
                    <input type="tel" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button className="submit-button" type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Checkout
