import { Routes, Route} from "react-router-dom"
import { SinglePage, About, Projects, Contact, LoginPage, RegisterPage, CaseStudy } from "../Pages"

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<SinglePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>

        <Route path="/project/:id" element={<CaseStudy/>}/>

        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
    </Routes>
  )
}
