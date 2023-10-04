import { Container } from 'react-bootstrap'
import RecipesList from '../../components/RecipesList/RecipesList'


const RecipesListPage = () => {

    return (
        <Container>
            <h1>Listado de Recetas</h1>
            <hr />
            <RecipesList />
        </Container>
    )
}

export default RecipesListPage