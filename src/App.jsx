import { Navbar, Footer } from './Components'
import { AllRoutes } from './Routes/AllRoutes';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Preloader } from './Components/Preloder/Preloder';

import './Style/Primary.css';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          // const LocomotiveScroll = (await import('locomotive-scroll')).default
          // const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (
    <>      
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </>
  )
}

export default App;