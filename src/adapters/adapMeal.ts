import { CategoryAdap,  MealsC, MealSimple, MealSimpleAdap } from "../models/Meal";

export const transformMealData = (apiMeal: MealSimple[]): MealSimpleAdap[] => {
    console.log(apiMeal);
    return apiMeal.map((meal) => {
        return {
          idMeal: meal.idMeal,
          meal: meal.strMeal,
          mealThumb: meal.strMealThumb,
        };
      });
  };

export const tranformCategoryData = (apiCategory: MealsC): CategoryAdap[] => {
  console.log(apiCategory);
    return apiCategory?.meals.map((category) => {
        return {
          category: category.strCategory,
        };
    });
}