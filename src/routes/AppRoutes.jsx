import { Routes, Route } from "react-router-dom"
import MealsListPage from "../pages/MealsListPage/MealsListPage"


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<p>Inicio</p>} />
            <Route path='/galeria' element={<MealsListPage />} />
            <Route path='/crear' element={<p>Crear</p>} />
            <Route path='/detalles/:meals_id' element={<p>Detalles</p>} />
            <Route path='/registro' element={<p>Registro</p>} />
            <Route path='/iniciar-sesion' element={<p>Login</p>} />
            <Route path='*' element={<p>404</p>} />

        </Routes>
    )
}

export default AppRoutes