import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"

export const CarritoPage = () => {
    const {
        listaCompras, 
        aumentarCantidad,
        disminuirCantidad,
        eliminarCompra} = useContext(CarritoContext)

    const calcularTotal = () => {
        return listaCompras.reduce((total, item)=> total+item.price * item.cantidad,0).toFixed(2)
    }

    const handlerComprar = () => {
        print()
    }
    return (
        <>
            <h1>Carrito Page</h1>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaCompras.map(producto=>(
                            <tr key={producto.id}>
                                <th scope="row">{producto.title}</th>
                                <td>{producto.price}</td>
                                <td>
                                    <button 
                                    type="button"
                                    className="btn btn-outline-primary"
                                    onClick={()=>aumentarCantidad(producto.id)}>+</button>
                                    <button>{producto.cantidad}</button>
                                    <button 
                                    type="button"
                                    className="btn btn-outline-primary"
                                    onClick={()=>disminuirCantidad(producto.id)}>-</button>
                                </td>
                                <td>
                                    <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={()=>eliminarCompra(producto.id)}>Eliminar
                                    </button>
                                </td>
                            </tr> 
                        ))                        
                    }
                    <th><b>TOTAL:</b></th>  
                    <td></td>
                    <td>${calcularTotal()}</td>
                    <td></td>                                    
                </tbody>
            </table>
            <div className="d-grid gap-2">
                <button 
                className="btn btn-primary" 
                onClick={handlerComprar}
                disabled={listaCompras<1}>
                    Comprar
                </button>
            </div>
        </>
    )
}