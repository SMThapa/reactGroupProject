import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import navStyle from '../Style/ComponentStyle/Navbar/NavBar.module.scss';
import { motion } from "framer-motion";

export const Navbar = () => {

  const [openMenu, setOpen] = useState(false)
  const handleClick = () =>{
    setOpen(!openMenu)
  }

  const [currentPosition, setCurrentPositon] = useState(0)
  const [previousPosition, setPreviousPosition] = useState(0)
  const [hidenav, setHideNav] = useState(false)

  window.addEventListener('scroll', ()=>{
    setCurrentPositon(window.pageYOffset)
    if(currentPosition > previousPosition){
      setPreviousPosition(currentPosition)
      setHideNav(true)
    }else{
      setHideNav(false)
    }

    // console.log(currentPosition, previousPosition)
  })

  const navigate = useNavigate()

  return (
    <motion.div className={`${navStyle.navBar}`} >
      <div className={navStyle.navItems}>
        <p onClick={()=> navigate('/')} style={{zIndex:"100", cursor:"pointer"}}> CodTrees</p>
        <div className= {`${navStyle.menu} ${openMenu ? navStyle.openMenu : navStyle}`}>
          <div className={navStyle.menuItems}>
            <div className={navStyle.navMenu}>
              <NavLink onClick={() =>setOpen(false)} to='/'>HOME</NavLink>
              <NavLink onClick={() =>setOpen(false)} to='/projects'>PROJECT</NavLink>
              <NavLink onClick={() =>setOpen(false)} to='/about'>ABOUT US</NavLink>
              <NavLink onClick={() =>setOpen(false)} to='/contact'>CONTACT</NavLink>
            </div>

            <div className={navStyle.hiddenRegister}>
              <div className={navStyle.hiddenRegisterItems}>
                <NavLink onClick={() =>setOpen(false)} to='/login'>Login</NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className={navStyle.register}>
          <NavLink to='/login'>Login</NavLink>
        </div>

        <div className={navStyle.hamburgerButton}>
            <div className={navStyle.bar}>
                <button onClick={handleClick} className={`${navStyle.menuButton} ${openMenu ? navStyle.opened: navStyle}`}>
                    <svg width="40" height="40" viewBox="0 0 100 100">
                    <path className={`${navStyle.line} ${navStyle.line1}`} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path className={`${navStyle.line} ${navStyle.line2}`} d="M 20,50 H 80" />
                    <path className={`${navStyle.line} ${navStyle.line3}`} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                    </svg>
                </button>
            </div>
        </div>
      </div>
      <div className={`${navStyle.background} ${openMenu? navStyle.opened: ''}`}></div>
    </motion.div>
  )
}
