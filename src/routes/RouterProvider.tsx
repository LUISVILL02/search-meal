import {
    createBrowserRouter,
    RouterProvider as ReactRouterProvider
} from "react-router";
import App from "../App";
import { routes } from "./routes";
import { Layaut } from "../pages/Layaut";
import { MealInfo } from "../components/meals/MealInfo";

const router = createBrowserRouter([{
    path: routes.HOME,
    element: <Layaut/>,
    errorElement: <h1>404</h1>,
    children: [
        {
            path: routes.HOME,
            element: <App/>
        },
        {
            path: routes.MEAL_DETAILS,
            element: <MealInfo/>
        }
    ]
}])

const RouterProvider = () => <ReactRouterProvider router={router} />

export default RouterProvider;