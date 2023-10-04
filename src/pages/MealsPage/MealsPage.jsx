import { Container } from 'react-bootstrap'
import MealsList from '../../components/MealsList/MealsList'


const MealsListPage = () => {

    return (
        <Container>
            <h1>Listado de Comidas</h1>
            <hr />
            <MealsList />
        </Container>
    )
}

export default MealsListPage