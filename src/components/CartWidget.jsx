import { Link } from "react-router-dom";
import carrito from "../assets/carrito-de-compras.png";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () =>{
    
    const { cantidadEnCarrito } = useContext(CartContext);

    return(
    <div className="contenedor-nav">
        <button><Link to= "/carrito">
            <img className="carrito" src={carrito} alt="./carrito-de-compras.png" />
            <span className="numerito">{cantidadEnCarrito()}</span>
        </Link></button>
    </div>
        
    )
}
export default CartWidget;