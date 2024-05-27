import { Link } from 'react-router-dom';
import '../App.css';

const Item = ({producto}) => {
    return (  
    <div className="producto" >
        <img src={producto.img} alt="" />
        <div className='info'>
            <h3>{producto.title}</h3>
            <p>Precio: ${producto.precio}</p>
            <button className='ver-mas'>
                <Link to={`/item/${producto.id}`}>Ver más</Link>
            </button>
        </div>
        
    </div>
    )
}

export default Item;

