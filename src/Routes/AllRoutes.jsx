import { Routes, Route} from "react-router-dom"
import { SinglePage, About, Projects, Contact, LoginPage, RegisterPage } from "../Pages"

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<SinglePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
    </Routes>
  )
}
