import { useEffect, useState } from "react";
import { CategoryAdap, MealSimpleAdap } from "../models/Meal";
import { fetchCategories, fetchMealDetailsCategory } from "../services/meal.service";

export const useMealByCategory = () => {
    const [meal, setMeal] = useState<MealSimpleAdap[]>([]);
    const [category, setCategory] = useState<string>("Beef");
    const [loading, setLoading] = useState<boolean>(false);
    const [categories, setCategories] = useState<CategoryAdap[]>([]);

    const getMealByCategory = async (category: string) => {
        setLoading(true);
        try {
            const apiMeal = await fetchMealDetailsCategory(category);
            setMeal(apiMeal);
        } catch (error) {
            console.error("Error fetching meals by category:", error);
        }finally {
            setLoading(false);
        }
    }
    
    const getCategories = async () => {
        const apiCategories = await fetchCategories();
        setCategories(apiCategories);
    }

    useEffect(() => {
        getCategories();
        getMealByCategory(category);
    }, [])

    useEffect(() => {
        if (category !== "Beef")
            getMealByCategory(category);
    }, [category])

    return {
        meal,
        loading,
        categories,
        setCategory,
        category,
        getMealByCategory,
    }
}