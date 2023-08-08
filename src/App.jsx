import { Navbar, Footer } from './Components'
import { AllRoutes } from './Routes/AllRoutes';
import './Style/Primary.css';

function App() {
  return (
    <>      
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </>
  )
}

export default App;