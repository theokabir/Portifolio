import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import NavList from './NavList'

const button =  {
  hover: {
    color: "#0D9488",
    scale: 1.1,
    transition: {
      type: "tween",
      duration: .1,
      ease: "easeOut"
    }
  }
}

const dropMenu = {
  hidden: {
    height: 0
  },

  show: {
    height: 'auto'
  },

  exit: {
    height: 0
  }
}

const Navbar = ({ language, setLanguage }) => {

  const [navDropped, setNavDropped] = useState(false)


  const handleDropNav = e => {
    e.preventDefault()
    setNavDropped(!navDropped)
  }

  return ( 
    <nav className="
    bg-blueGray-900 text-white 
    font-page
    p-4 sm:pr-8
    sm:flex sm:justify-between sm:items-center
    ">
      <h1 className="
      text-4xl 
      flex justify-between
      sm:block
      ">
        <Link to="/">Théo Kabir</Link>
        <FontAwesomeIcon icon={faBars} 
        onClick={e => handleDropNav(e)}
        className="
        sm:hidden
        "/>
      </h1>
      {/* TODO: Melhorar sistema de drop down do menu com framer-motion */}
      <div className="sm:hidden">
        <AnimatePresence>
          {navDropped && (
            <NavList 
            language={language}
            vMenu={dropMenu}
            vBtn={button}
            navDropped={navDropped}
            overflowClass={"overflow-hidden"}
            lanChange={setLanguage}
            />
            
          )}
        </AnimatePresence>
      </div>
      <div className="hidden sm:block">
        <NavList 
          language={language}
          vMenu={dropMenu}
          vBtn={button}
          navDropped={navDropped}
          overflowClass=""
          lanChange={setLanguage}
        />
      </div>
    </nav>
   );
}
 
export default Navbar;