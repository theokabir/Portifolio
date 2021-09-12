import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import chevronRight from '@iconify/icons-akar-icons/chevron-right'

export default function NavList({ language, vMenu, vBtn, overflowClass, lanChange }) {

  return (
    
    <motion.div 
    variants={vMenu}
    initial="hidden"
    animate="show"
    exit="exit"
    className={`h-5 ${overflowClass}`}
    >
      <ul
      className="
      text-xl
      flex justify-around
      sm:flex
      mt-8 sm:mt-0
      ">
        <motion.li
        variants={vBtn}
        whileHover="hover"
        >
          <Link to="/">{language.navbar.home}</Link>
        </motion.li>

        <motion.li className="pl-6"
        variants={vBtn}
        whileHover="hover"
        >
          <Link to="/resume">{language.navbar.resume}</Link>
        </motion.li>
        <motion.li className="pl-6"
        variants={vBtn}
        whileHover="hover"
        >
          <button onClick={() => lanChange(language.ol)} className="border-l-2 border-r-2 border-white px-4">
            {language.lang}<span> <Icon icon={chevronRight} className="inline" /> </span>{language.opt}
          </button>
        </motion.li>
        </ul>
    </motion.div>
  )
}