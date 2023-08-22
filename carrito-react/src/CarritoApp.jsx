import {Routes,Route, Navigate} from "react-router-dom"
import { NavBar } from "./componentes/NavBar"
import { ComprasPage } from "./pages/ComprasPage"
import { CarritoPage } from "./pages/CarritoPage"
import { ProductoProvider } from "./provider/ProductoProvider"
import { CarritoProvider } from "./provider/CarritoProvider"

export const CarritoApp = () => {
    
    return (
        <ProductoProvider>
            <CarritoProvider>
                <NavBar></NavBar>
                <div className="container">
                    <Routes>                    
                        <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
                        <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
                        <Route path="/*" element={<Navigate to="/" />}></Route>                                        
                    </Routes>       
                </div>           
           </CarritoProvider>       
        </ProductoProvider>
    )
}