import { useContext, useState } from "react";
import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    return (
        <div className="productodetalle">
            <img className="img" src={item.img} alt={item.title} />
            <div className="info">
                <h2 className="titulo">{item.title}</h2>
                <p className="descripcion">{item.descripcion}</p>
                <p>{item.categoria}</p>
                <p className="precio">Precio: ${item.precio}</p>
                <p className="stock">Stock: {item.stock}</p>
                <ItemCount />   
            </div>
        </div>
    )
}

export default ItemDetail
