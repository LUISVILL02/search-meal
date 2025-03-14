import { Outlet } from "react-router"
import { Navbar } from "../components/navbar/Navbar"


export const Layaut = () => {
  return (
    <>
        <Navbar />
        <main>
            <Outlet />
        </main>
    </>
  )
}
