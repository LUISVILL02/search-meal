import { Link } from "react-router";
import { useMealStore } from "../../hooks/useMeal";
import { routes } from "../../routes/routes";
import ThemeToggle from "../toggle/ThemeToggle";

export const Navbar = () => {
  const getMeal = useMealStore((state) => state);
  const handleDefaultMeal = () => {
    getMeal.getMeal();
  }

  return (
    <nav className="flex justify-center items-center h-36 bg-secondary pb-10 shadow-xl">
      <ul>
        <li 
          className="cursor-pointer text-2xl font-bold">
          <Link
                to={routes.HOME} 
                onClick={handleDefaultMeal}
            >
                <span className="text-5xl">ChefExplorer</span>
          </Link>
        </li>
      </ul>
      <ThemeToggle/>
    </nav>
  )
}
