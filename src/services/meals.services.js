import axios from 'axios'

class MealsService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/meals`
        })
    }

    getMeals() {
        return this.api.get('/getAllMeals')
    }

    getOneMeal(meal_id) {
        return this.api.get(`/getOneMeal/${meal_id}`)
    }

    addMeal(mealData) {
        return this.api.post('/addMeal', mealData)
    }

}

const mealsService = new MealsService()

export default mealsService