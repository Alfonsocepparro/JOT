import data from '../data/data.json';

export const pedirDatos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 500)
    })
}


export const getProductoId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const item = data.find((el) => el.id === id);

            if (item) { 
                resolve(item);
            } else {
                reject({
                    error: "Producto no encontrado",
                })
            }
        }, 500)
    });
}



export const getProductosPorCategoria = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria =data.filter(item => item.category === categoryId);
            resolve(productosCategoria);
    })}
    )}