export interface MealAPi {
    idMeal: string;
    strMeal: string;
    strMealAlternate: string | null;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string;
    strYoutube: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strIngredient11: string;
    strIngredient12: string;
    strIngredient13: string; 
    strIngredient14: string; 
    strIngredient15: string; 
    strIngredient16?: string | null; 
    strIngredient17?: string | null; 
    strIngredient18?: string | null; 
    strIngredient19?: string | null; 
    strIngredient20?: string | null; 
    strMeasure1: string; 
    strMeasure2: string; 
    strMeasure3: string; 
    strMeasure4:string;  
    strMeasure5:string;  
    strMeasure6:string;  
    strMeasure7:string;  
    strMeasure8:string;  
    strMeasure9:string;  
    strMeasure10:string;  
    strMeasure11:string;  
    strMeasure12:string;  
    strMeasure13:string ;   
    strMeasure14:string ;   
    strMeasure15:string ;   
    strMeasure16?:string|null ;   
    strMeasure17?:string|null ;   
    strMeasure18?:string|null ;   
    strMeasure19?:string|null ;   
    strMeasure20?:string|null ;   
    strSource?:string|null ;
    dateModified?:string | null;
    strImageSource?: string | null;
  }

  export interface Meal {
    idMeal: string;
    meal: string;
    mealAlternate: string | null;
    category: string;
    area: string;
    instructions: string;
    mealThumb: string;
    tags: string;
    youtube: string;
    ingredients: string[]; 
    measures: string[];   
    source?: string | null;
    dateModified?: string | null;
    imageSource?: string | null;
}

export interface MealSimple {
    strMeal: string
    strMealThumb: string
    idMeal: string
}
export interface MealSimpleAdap {
    meal: string;        
    mealThumb: string;   
    idMeal: string;      
}

export const adaptMeal = (meal: MealAPi): Meal => {
    const ingredients = [
        meal.strIngredient1,
        meal.strIngredient2,
        meal.strIngredient3,
        meal.strIngredient4,
        meal.strIngredient5,
        meal.strIngredient6,
        meal.strIngredient7,
        meal.strIngredient8,
        meal.strIngredient9,
        meal.strIngredient10,
        meal.strIngredient11,
        meal.strIngredient12,
        meal.strIngredient13,
        meal.strIngredient14,
        meal.strIngredient15,
        meal.strIngredient16,
        meal.strIngredient17,
        meal.strIngredient18,
        meal.strIngredient19,
        meal.strIngredient20,
    ].filter((ingredient): ingredient is string => Boolean(ingredient));

    const measures = [
        meal.strMeasure1,
        meal.strMeasure2,
        meal.strMeasure3,
        meal.strMeasure4,
        meal.strMeasure5,
        meal.strMeasure6,
        meal.strMeasure7,
        meal.strMeasure8,
        meal.strMeasure9,
        meal.strMeasure10,
        meal.strMeasure11,
        meal.strMeasure12,
        meal.strMeasure13,
        meal.strMeasure14,
        meal.strMeasure15,
        meal.strMeasure16,
        meal.strMeasure17,
        meal.strMeasure18,
        meal.strMeasure19,
        meal.strMeasure20,
    ].filter((measure): measure is string => Boolean(measure));

    return {
        idMeal: meal.idMeal,
        meal: meal.strMeal,
        mealAlternate: meal.strMealAlternate,
        category: meal.strCategory,
        area: meal.strArea,
        instructions: meal.strInstructions,
        mealThumb: meal.strMealThumb,
        tags: meal.strTags,
        youtube: meal.strYoutube,
        ingredients: ingredients,
        measures: measures,
        source: meal.strSource,
        dateModified: meal.dateModified,
        imageSource: meal.strImageSource,
    };
}

export interface CategoryApi {
    strCategory: string
}
export interface MealsC {
    meals: MealAPi[]
}
export interface CategoryAdap {
    category: string
}

