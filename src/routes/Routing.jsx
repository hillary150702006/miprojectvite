import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import PagRegistro from "../pages/PagRegistro"
import PagInicio from "../pages/PagInicio"
import PagLogin from "../pages/PagLogin"
import Layout from "../components/Layout"

import Principal from "../pages/Principal"
import PagAdmin from "../pages/PagAdmin"
import Catalogo from "../components/Catalogopag"
import CarritoPago from "../pages/CarritoPago"
import PagPerfil from "../pages/PagPerfil"

function Routing() {
  return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<PagInicio/>}/>
                    <Route path="/registro" element={<PagRegistro/>}/>
                    <Route path="/login" element={<PagLogin/>}/>
                    <Route path="/inicio" element={<PagInicio/>}/>
                    <Route path="/Principal" element={<Principal/>}/>
                    <Route path="/PagAdmin" element={<PagAdmin/>}/>
                    <Route path="/catalogo" element={<Catalogo/>}/>
                    <Route path="/carrito-pago" element={<CarritoPago/>}/>
                    <Route path="/perfil" element={<PagPerfil/>}/>
                </Route>
            </Routes>
        </Router>
  )
}

export default Routing
