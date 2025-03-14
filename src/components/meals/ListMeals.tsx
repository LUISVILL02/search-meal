import { useMealStore } from "../../hooks/useMeal";
import { CardLoader } from "../loaders/CardLoader";
import { Mealcard } from "./MealCard";

export const ListMeals = () => {
  const { meals, loading, error } = useMealStore();
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-3 gap-4">
      {loading ? (
            Array(9).fill(0).map((_, index) => (
              <CardLoader key={index} />
            ))
        ) : error ? (
            <p className="col-span-3 text-center text-red-500">{error}</p>
        ) : (
            meals.map((meal) => (
                <Mealcard key={meal.idMeal} meal={meal} />
            ))
        )}
      </div>
    </div>
  )
}
