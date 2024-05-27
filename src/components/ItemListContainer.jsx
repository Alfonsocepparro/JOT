import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { pedirDatos } from "./PedirDatos";
const ItemListContainer = () =>{

    const [productos, setProductos] =useState ([]);

    useEffect(() =>{
        pedirDatos( ) 
            .then((res) => {setProductos(res);})
    }, []);

    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer;