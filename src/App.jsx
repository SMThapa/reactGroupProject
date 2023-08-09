import { Navbar, Footer } from './Components'
import { AllRoutes } from './Routes/AllRoutes';
import './Style/Primary.css';
import './Style/hero.css';

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