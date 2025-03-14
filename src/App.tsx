
import { Search } from "./components/search/Search"
import { Meal } from "./pages/Meal"

function App() {
  return (
    <>
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-2xl mt-22">Encuentra en segundos la receta perfecta para cualquier ocasión. Busca por ingredientes, 
          categorías o ingrediente principal y descubre nuevas formas de disfrutar cada comida. 
        </h1>
        <Search />
        <Meal />
      </div>
    </>
  )
}

export default App
