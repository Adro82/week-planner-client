import { useEffect, useState } from "react"
import { Col } from "react-bootstrap"
import recipesService from "../../services/recipes.services"
import RecipeCard from "../RecipeCard/RecipeCard"



const RecipesList = () => {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {


        recipesService
            .getRecipes()
            .then(({ data }) => setRecipes(data))
            .catch(err => console.log(err))
    }, [])

    return (
        recipes.map(elm => {
            return (
                <Col md={{ span: 3 }} key={elm._id}>
                    <RecipeCard {...elm} />
                </Col>
            )
        })
    )
}

export default RecipesList