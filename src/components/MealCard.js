import React from "react"
import { useHistory } from "react-router-dom"

const MealCard = ({meal})=>{
    let history = useHistory()

    const clickHandle=(event)=>{
        event.preventDefault()
        history.push(`/meal/${meal.idMeal}`)
    }
    return(

        <div className="col-md-4 mb-2">
            <div className="recipes__box">
                <img className="recipe__box-img" src={meal.strMealThumb} alt={meal.strMeal}/>
                <div className="recipe__text">
                    <h5 className="recipes__title">
                        {meal.strMeal.length < 20 ?`${meal.strMeal}` :`${meal.strMeal.substring(0, 25)}...`}
                    </h5>

                </div>
                <button className="recipe_buttons" onClick={clickHandle}>
                    View recipe
                </button>
            </div>
        </div>

    )
}
export default MealCard