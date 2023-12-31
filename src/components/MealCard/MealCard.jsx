import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"


function MealCard({ nombre, tipo, imageUrl, _id }) {

    return (
        <Link to={`/comidas/${_id}`}>
            <Card>
                <Card.Img variant="top" src={imageUrl}></Card.Img>
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>{tipo}</Card.Text>
                    <Button variant="dark">Detalles</Button>
                </Card.Body>

            </Card>
        </Link>
    )
}

export default MealCard