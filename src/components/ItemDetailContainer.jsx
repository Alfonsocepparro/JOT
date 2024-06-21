import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import {doc, getDoc} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase';

const ItemDetailContainer = () => {

    const [item,setItem] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();


    useEffect(()=>{

        const docRef = doc(db, "productos", id);
        getDoc(docRef).then((resp)=>{
            setItem({
                ...resp.data(), id: resp.id})
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
