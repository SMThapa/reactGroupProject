import { useTitle } from "../Hooks/useTitle"
import projectStyle from '../Style/ComponentStyle/Projects/Projects.module.css'

export const Projects = () => {

  useTitle('Projects page')

  return (
    <div className={projectStyle.Project}>
      <div className={projectStyle.headerSlogan}>
        <div className={projectStyle.slogan}>
          <h1>Discover the Projects that We Are Proud Of.</h1>
          <p>Aside from showing your experiance and skill, case studies give your potential client or employer an idea of how you  work and think.</p>
        </div>
      </div>
    </div>
  )
}
