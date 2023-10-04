import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"


function RecipeCard({ nombre, tipo, ingredientes, pasos, imageUrl, _id, owner }) {

    return (
        <Link to={`/recetas/${_id}`}>
            <Card>
                <Card.Img variant="top" src={imageUrl}></Card.Img>
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>{tipo}</Card.Text>
                    <Card.Text>{ingredientes}</Card.Text>
                    <Card.Text>{pasos}</Card.Text>
                    <Button variant="dark">Detalles</Button>
                </Card.Body>

            </Card>
        </Link>
    )
}

export default RecipeCard