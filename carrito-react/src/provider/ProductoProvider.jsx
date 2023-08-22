import { useEffect, useState } from "react"
import { ProductoContext } from "../context/ProductoContext"

export const ProductoProvider = ({children}) => {

    const [productos, setProductos] = useState([])
 
    const urlProductos = "https://fakestoreapi.com/products"

    const fetchProductos = async () => {
        const response = await fetch(urlProductos)
        const dataProductos = await response.json()
        setProductos(dataProductos)
    }

    useEffect( () => {
        fetchProductos()
    },[])
 
    return (
        <>
            <ProductoContext.Provider value={{productos}}>
                {children}
            </ProductoContext.Provider>
        </>        
    )
}