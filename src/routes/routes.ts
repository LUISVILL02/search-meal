type Routes = {
    HOME: string;
    MEAL_DETAILS: string;
}

export const routes: Readonly<Routes> = Object.freeze({
    HOME: "/",
    MEAL_DETAILS: "/meal/:id"
})