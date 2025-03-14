import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Meal } from "../models/Meal";
import { fetchMealDetailsId } from "../services/meal.service";

export const useMealById = () => {
    const [meal, setMeal] = useState<Meal>({} as Meal);
    const { id } = useParams<{ id: string }>();
    const [loading, setLoading] = useState<boolean>(false);

    const getMealById = async () => {
        setLoading(true);
        const apiMeal = await fetchMealDetailsId(id);
        setLoading(false);
        setMeal(apiMeal);
    }

    useEffect(() => {
        getMealById();
    }, [])
    
    return {
        meal,
        loading,
    }
}