import ItemCount from "./ItemCount"


const ItemDetail = ({item}) => {
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
