
import { useMealById } from "../../hooks/useMealById";
import { SkeletonLoading } from "../loaders/SkeletonLoading";


export function MealInfo() {
    const { meal, loading } = useMealById();
    console.log(meal);
    
  return (
    <div className="mb-10">
      {loading ? <SkeletonLoading/> : (
        <>
            {/* Imagen y título */}
            <div className="text-center mt-6 ">
              <img
                src={meal.mealThumb}
                alt={meal.meal}
                className="w-full max-w-md mx-auto rounded-lg shadow-xl"
              />
              <h1 className="text-3xl font-bold mt-4">{meal.meal}</h1>
              <p className="text-gray-600 text-sm dark:text-gray-400">
                {meal.category} | {meal.area}
              </p>
            </div>

            {/* Instrucciones */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Instrucciones</h2>
              <p className="text-gray-700 whitespace-pre-line dark:text-gray-400">{meal.instructions}</p>
            </div>

            {/* Ingredientes */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Ingredientes</h2>
              <ul className="list-disc list-inside">
                {meal.ingredients?.map((ingredient, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-400">
                    {ingredient} - {meal.measures[index]}
                  </li>
                ))}
              </ul>
            </div>

            {/* Video de YouTube */}
            {meal.youtube && (
              <div className="mt-6 h-[400px]">
                <h2 className="text-xl font-semibold mb-2">Video</h2>
                <div className="aspect-w-16">
                  <iframe
                    src={`https://www.youtube.com/embed/${meal.youtube?.split("v=")[1]}`}
                    title={meal.meal}
                    allowFullScreen
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              </div>
            )}
        </>
      )}
    </div>
  )
}
