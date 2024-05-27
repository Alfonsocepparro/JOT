const ItemCount = ({quantity, handleSumar, handleRestar, handleAgregar} ) => {

    return (
        <div>
    
            <div className="item-count">
                <button onClick={handleRestar}>-</button>
                <p>{quantity}</p>
                <button onClick={handleSumar}>+</button>
            </div>
            <button className="agregarcarrito" onClick={handleAgregar}>Agregar al carrito</button>
        </div>
    )
}
export default ItemCount