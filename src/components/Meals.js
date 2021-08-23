import React from "react";


import MealCard from "./MealCard";

const Meals = (props)=>
{

    return(
        <div className="container">
            <div className="row">
                {props.meals.map((meal)=>
                    <MealCard key={meal.idMeal} meal={meal}/>
                )}
            </div>

        </div>
    )
}


export default Meals