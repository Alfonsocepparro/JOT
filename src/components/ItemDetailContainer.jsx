import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { getProductoId } from './PedirDatos';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [item,setItem] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();


    useEffect(()=>{
        setError(null);
        getProductoId(Number(id))
        .then((res)=>{
            setItem(res);
        })
    }, [id])    
    return (
        <div>
            {error ? (
                <div>{error}</div>
            ) : (
                item && <ItemDetail item={item} />
            )}
        </div>
    )
}

export default ItemDetailContainer
