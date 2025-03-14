import { tranformCategoryData, transformMealData } from "../adapters/adapMeal";
import { adaptMeal, CategoryAdap, Meal, MealSimpleAdap } from "../models/Meal";

export const fetchMealDetails = async (ingredient: string): Promise<MealSimpleAdap[]> => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    const apiMeal = data.meals;
    return transformMealData(apiMeal);
};

export const fetchMealDetailsId = async (id?: string): Promise<Meal> => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    const apiMeal = data.meals[0];
    return adaptMeal(apiMeal);
};

export const fetchMealDetailsName = async (name: string): Promise<MealSimpleAdap[]> => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const data = await response.json();
    const apiMeal = data.meals;
    return transformMealData(apiMeal);
}

export const fetchCategories = async (): Promise<CategoryAdap[]> => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
    const data = await response.json();
    return tranformCategoryData(data);
}

export const fetchMealDetailsCategory = async (category: string): Promise<MealSimpleAdap[]> => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json();
    const apiMeal = data.meals;
    return transformMealData(apiMeal);
}

export const getIngredientPrincipal = async (ingredient: string): Promise<MealSimpleAdap[]> => {
    const response = await fetch(`www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    const api = data.meals[0].strMeal;
    return transformMealData(api);
}