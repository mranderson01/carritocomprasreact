import { useReducer } from "react"
import {CarritoContext} from "../context/CarritoContext"

const initialState = []

export const CarritoProvider = ({children}) => {

    const carritoReducer = (state = initialState, action={}) => {
        switch (action.type) {
            case "[CARRITO] Agregar compra":   
                return [...state,action.payload] 
            case "[CARRITO] Aumentar cantidad compra":
                return state.map((producto)=>{
                    if (producto.id === action.payload) {
                        const cantidad = producto.cantidad + 1;
                        return {...producto, cantidad:cantidad}
                    }
                    return producto
                })                                         
            case "[CARRITO] Disminuir cantidad compra":                
                return state.map((producto) => {
                    if( producto.id === action.payload 
                        && producto.cantidad > 1 ) {                        
                        const cantidad = producto.cantidad - 1;
                        return {...producto, cantidad:cantidad}
                    }
                    return producto
                })     
            case "[CARRITO] Eliminar compra":                
                return state.filter(producto => producto.id !==action.payload)
            default:
                return state
        }
    }

    const [listaCompras, dispatch] = useReducer(carritoReducer,initialState)

    const agregarCompra = (producto) => {
        producto.cantidad = 1
        const action = {
            type: "[CARRITO] Agregar compra",
            payload: producto
        }
        dispatch(action)
    }

    const aumentarCantidad = (id) => {
        const action = {
            type: "[CARRITO] Aumentar cantidad compra",
            payload:id
        }
        dispatch(action)
    }

    const disminuirCantidad = (id) => {
        const action = {
            type: "[CARRITO] Disminuir cantidad compra",
            payload:id
        }
        dispatch(action)
    }

    const eliminarCompra = (id) => {
        const action = {
            type: "[CARRITO] Eliminar compra",
            payload:id
        }  
        dispatch(action)
    } 

    

    return (
        <CarritoContext.Provider value={{
            listaCompras,
            agregarCompra,
            aumentarCantidad,
            disminuirCantidad,
            eliminarCompra}}>
            {children}
        </CarritoContext.Provider>
    )

}