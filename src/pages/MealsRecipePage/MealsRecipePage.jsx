import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import mealsService from "../../services/meals.services"

const MealsRecipePage = () => {

    const [meals, setMeals] = useState({})

    const { meals_id } = useParams()

    useEffect(() => {
        mealsService
            .getOneMeal(meals_id)
            .then(({ data }) => setMeals(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <Container>
            <h1 className="mb-4">Receta de {meals.nombre}</h1>
            <hr />
            <Row>
                <Col md={{ span: 6, offset: 1 }}>
                    <h3>Tipo: {meals.tipo}</h3>
                    <ul>
                        <li>Ingredientes: {meals.ingredientes}</li>
                        <li>Paso a Paso: {meals.receta}</li>
                    </ul>
                    <hr />
                    <Link to="/comidas">
                        <Button variant="dark" as="div"> Volver a galería</Button>
                    </Link>
                </Col>
                <Col md={{ span: 4 }}>
                    <img src={meals.imageUrl} style={{ width: '100%' }} />
                </Col>
            </Row>
        </Container>
    )
}

export default MealsRecipePage