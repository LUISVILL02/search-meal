import { ListMealByCategory } from "../components/meals/ListMealByCategory"
import { ListMeals } from "../components/meals/ListMeals"


export const Meal = () => {
  return (
    <div className="flex flex-col items-center gap-36">
        <ListMeals />
        <ListMealByCategory />
    </div>
  )
}
