import { Link } from "react-router-dom";
import carrito from "./carrito-de-compras.png"

const CartWidget = () =>{
    return(
    <div className="contenedor-nav">
        <button><Link to= "/carrito"> <img className="carrito" src={carrito} alt="./carrito-de-compras.png" /></Link></button>
    </div>
        
    )
}
export default CartWidget;