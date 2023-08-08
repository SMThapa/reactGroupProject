import { useTitle } from '../Hooks/useTitle'
import { Hero , About, Projects, Contact} from './index'

export const SinglePage = () => {

  useTitle('Company name with slogan.')

  return (
    <>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  )
}
