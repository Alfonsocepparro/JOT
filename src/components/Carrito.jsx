import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import '../App.css';
import { Link } from "react-router-dom";
import tachito from "../assets/contenedor-de-basura.png"
const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito, eliminarProducto } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }
    const handleEliminarProducto = (id) => {
        eliminarProducto(id);
    }

    return (
    <div className="container">
        <h1 className="main-title">Carrito:</h1>

        {
            carrito.map((prod) => (
                <div key={prod.id} className='prodCarrito'>
                    <br />
                    <h3>{prod.title}</h3>
                    <div className='infoCarrito'>
                        <p>Cant: {prod.cantidad}</p>
                        <p>Precio unit: ${prod.precio}</p>
                        <p>Precio total: ${prod.precio * prod.cantidad}</p>
                        <img className='logo' src={tachito} alt="tachito" 
                                onClick={() => handleEliminarProducto(prod.id)} 
                                style={{ cursor: 'pointer' }}
                            />
                    </div>
                    <br />
                </div>  
            ))
            
        }

        {  
            carrito.length > 0 ?
            <>
                <h2 className='preciototal'>Precio total: ${precioTotal()}</h2>
                <div className='botones'>
                    <button className="agregar-al-carrito" onClick={handleVaciar}>Vaciar carrito</button>
                    <button className="agregar-al-carrito">
                        <Link to= '/checkout'>Terminar compra</Link>
                    </button>
                    <button className="agregar-al-carrito"><Link to='/sets'>Volver a Sets</Link></button>
                </div>
            </> :
            <h2 className='carritoV'>El carrito está vacío :(</h2>
        }

    </div>
    )
}

export default Carrito