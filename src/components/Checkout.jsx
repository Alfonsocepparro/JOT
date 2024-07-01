import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/firebase';

const Checkout = () => {

    
    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })

    }
    const enviar = (data) => {
        const numeroTelefono = "34672265869"; 
        const mensaje = `Hola, mi nombre es ${data.nombre}. Mi correo electrónico es ${data.email}. ${data.mensaje}.`;
        const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
        
        window.location.href = urlWhatsApp;
    }

    if (pedidoId) {
        return (
            <div className="checkout">
                <h1 className="main-title">Muchas gracias por tu compra!</h1>
                <p className='npedido'>Tu número de pedido es: {pedidoId}</p>
                <button className="submit-button" type="submit">Seguir por Whatsapp</button>
            </div>
        )
    }

    return (
    <div className="contact-form">
        <h1 className="main-title">Finalizar compra</h1>
        <form className="form-group" onSubmit={handleSubmit(comprar)}>

            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

            <button className="enviar" type="submit">Comprar</button>

        </form>
    </div>
    )
}

export default Checkout