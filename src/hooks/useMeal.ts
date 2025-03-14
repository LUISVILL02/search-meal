import { MealSimpleAdap } from "../models/Meal";
import { fetchMealDetails, fetchMealDetailsName } from "../services/meal.service";
import { create } from "zustand";

interface MealStore {
    meals: MealSimpleAdap[];
    loading: boolean;
    error: string | null;
    getMeal: (ingredient?: string) => Promise<void>;
    getMealByName: (name: string) => Promise<void>;
    getMealByPIngredient: (ingredient: string) => Promise<void>;
}

export const useMealStore = create<MealStore>((set) => ({
    meals: [],
    loading: false,
    error: null,

    // Función para obtener comidas por el ingrediente tomate por defecto
    getMeal: async (ingredient = "tomato") => {
        set({ loading: true, error: null });
        try {
            const apiMeal = await fetchMealDetails(ingredient);
            set({ meals: apiMeal });
        } catch (error) {
            console.error("Error fetching meals:", error);
            set({ error: "Error fetching meals" });
        } finally {
            set({ loading: false });
        }
    },

    // Función para obtener comidas por nombre
    getMealByName: async (name: string) => {
        set({ loading: true, error: null });
        try {
            const apiMeal = await fetchMealDetailsName(name);
            set({ meals: apiMeal });
        } catch (error) {
            console.error("Error fetching meals by name:", error);
            set({ error: "Error fetching meals by name" });
        } finally {
            set({ loading: false });
        }
    },

    // Función para obtener comidas por ingrediente principal
    getMealByPIngredient: async (ingredient: string) => {
        set({ loading: true, error: null });
        try {
            const apiMeal = await fetchMealDetails(ingredient);
            set({ meals: apiMeal });
        } catch (error) {
            console.error("Error fetching meals by principal ingredient:", error);
            set({ error: "Error fetching meals by principal ingredient" });
        } finally {
            set({ loading: false });
        }
    }
}));

useMealStore.getState().getMeal();
