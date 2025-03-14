
import { useMealByCategory } from "../../hooks/useMealByCategory"
import { CardLoader } from "../loaders/CardLoader";
import { Mealcard } from "./MealCard";

export const ListMealByCategory = () => {
    const { loading, meal, categories, setCategory, category } = useMealByCategory();
    
  return (
    <section className="flex flex-col gap-5">
        <h3 className="text-xl">All categories</h3>
        <ul className="flex flex-wrap gap-1">
            {categories?.map((c, index: number) => (
                <li className={`text-2xl p-3 rounded-md cursor-pointer ${category === c.category ? "bg-emerald-200" : ""}`}
                    onClick={() => setCategory(c.category)}
                    key={index}>{c.category}
                </li>
            ))}
        </ul>
        <div className="grid grid-cols-3 gap-4">
            {loading ? (
                Array(9).fill(0).map((_, index) => (
                    <CardLoader key={index} />
                  ))
            ) : (
                meal.map((meal) => (
                    <Mealcard key={meal.idMeal} meal={meal} />
                ))
            )}
        </div>
    </section>
  )
}
