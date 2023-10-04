import axios from 'axios'

class RecipesService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/recipes`
        })
    }

    getRecipes() {
        return this.api.get('/getAllRecipes')
    }

    getOneRecipe(recipe_id) {
        return this.api.get(`/getOneRecipe/${recipe_id}`)
    }

    addMeal(recipeData) {
        return this.api.post('/addRecipe', recipeData)
    }

}

const recipesService = new RecipesService()

export default recipesService