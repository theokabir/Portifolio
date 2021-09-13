import { motion } from 'framer-motion'
import Space from './../../assets/space_wpp.jpg'


export default function Parallax(){
  return(
    <div
    className="
    relative flex items-center justify-center
    bg-cover bg-fixed bg-center bg-no-repeat
    "
    style={{
      backgroundImage: `url(${Space})`,
      height: "80vh"
    }}
    >
      <motion.div className="text-white text-5xl sm:text-6xl font-page"
      initial={{
        opacity: 0,
        scale: 1.2
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        delay: 1,
        duration: .8,
        ease: "easeInOut"
      }}
      >
        <h2>Lorem Ipsum</h2>
      </motion.div>
    </div>
  )
}