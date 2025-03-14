import { Link } from "react-router"
import { MealSimpleAdap } from "../../models/Meal";

interface MealcardProps {
    meal: MealSimpleAdap;
}

export const Mealcard = ({meal}: MealcardProps) => {
  return (
    <div className="flex flex-col items-center gap-3 w-full transform transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg 
    shadow-lg">
        <p className="text-xl">{meal.meal}</p>
        <Link to={`/meal/${meal.idMeal}`} className="cursor-pointer">
            <img className="w-full h-full object-cover rounded-b-lg" src={meal.mealThumb} alt={meal.meal} />
        </Link>
    </div>
  )
}