import { Routes, Route } from "react-router-dom"
import MealsPage from "../pages/MealsPage/MealsPage"
import RecipesPage from "../pages/RecipesPage/RecipesPage"
import MealsRecipePage from "../pages/MealsRecipePage/MealsRecipePage"


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<p>Inicio</p>} />
            <Route path='/comidas' element={<MealsPage />} />
            <Route path='/comidas/:meals_id' element={<MealsRecipePage />} />
            <Route path='/crear/comida' element={<p>Crear</p>} />
            <Route path='/recetas' element={<RecipesPage />} />
            <Route path='/recetas/:recipes_id' element={<p>fffff</p>} />
            <Route path='/crear/receta' element={<p>lo que sea</p>} />
            <Route path='/registro' element={<p>Registro</p>} />
            <Route path='/iniciar-sesion' element={<p>Login</p>} />
            <Route path='*' element={<p>404</p>} />
        </Routes>
    )
}

export default AppRoutes