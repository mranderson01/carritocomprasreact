import { useState } from "react"

// eslint-disable-next-line react/prop-types
export const Card = ({ 
    imagen, 
    titulo, 
    descripcion, 
    precio,
    handlerAgregar,
    handlerQuitar,
    handlerAumentar,
    handlerDisminuir}) => {

    const [added, setAdded] = useState(false)

    const handleAgregar = () => {  
        handlerAgregar()
        setAdded(true)
    }

    const handleQuitar = () => { 
        handlerQuitar()
        setAdded(false)
    }    
    return (
        <>
            <div className="tarjeta">
                <img 
                    src={imagen} 
                    alt={titulo} 
                    className="tarjeta-imagen"
                />
                <div className="tarjeta-contenido">
                    <h3 className="tarjeta-titulo">
                        {titulo}
                    </h3>
                    <p className="tarjeta-descripcion">
                        {descripcion}
                    </p>
                    <p className="tarjeta-precio">
                        {precio}
                    </p>
                    {
                        added
                        ?   <button 
                                type="button" 
                                className="boton-quitar"
                                onClick={handleQuitar}
                                >Quitado del Carrito
                            </button>
                        :   <button 
                                type="button" 
                                className="boton-agregar"
                                onClick={handleAgregar}
                                >Agregado al Carrito
                            </button>
                    }
                </div>                
            </div>            
        </>
    )
}