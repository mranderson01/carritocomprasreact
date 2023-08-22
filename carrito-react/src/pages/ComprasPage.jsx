import { Card } from "./../componentes/Card"
import { useContext} from "react"
import { ProductoContext } from "../context/ProductoContext"
import {CarritoContext} from "../context/CarritoContext"
export const ComprasPage = () => {

    const {productos}  = useContext(ProductoContext)
    const {
        listaCompras,
        agregarCompra,
        aumentarCantidad,
        disminuirCantidad,
        eliminarCompra} = useContext(CarritoContext)

    const handleAgregar = (producto)=>{
        agregarCompra(producto)
    }
    const handleQuitar = (id) => {
        eliminarCompra(id)
    }
    const handleAumentar = (id) => {

    }
    const handDisminuir = (id) => {
        
    } 

    return (
        
        <>
            <h1>Compras: </h1>
            <hr />
            {
                productos.map(producto=>(
                    <Card 
                        key={producto.id}
                        imagen={producto.image}
                        titulo={producto.title}
                        descripcion={producto.description}
                        precio={producto.price}
                        handlerAgregar={() => handleAgregar(producto)}
                        handlerQuitar={() => handleQuitar(producto.id)}
                    ></Card>
                ))
            }            
        </>
    )
}