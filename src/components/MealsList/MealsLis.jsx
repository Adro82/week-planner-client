import { useEffect, useState } from "react"
import { Col } from "react-bootstrap"
import mealsService from "../../services/meals.services"
import MealCard from "../MealCard/MealCard"



const MealsList = () => {

    const [meals, setMeals] = useState([])

    useEffect(() => {


        mealsService
            .getMeals()
            .then(({ data }) => setMeals(data))
            .catch(err => console.log(err))
    }, [])

    return (
        meals.map(elm => {
            return (
                <Col md={{ span: 3 }} key={elm._id}>
                    <MealCard {...elm} />
                </Col>
            )
        })
    )
}

export default MealsList