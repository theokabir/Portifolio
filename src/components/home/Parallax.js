import { motion } from 'framer-motion'
import Space from './../../assets/space_wpp.jpg'


export default function Parallax({ language }){
  return(
    <div
    className="
    relative flex items-center justify-center
    bg-cover bg-fixed bg-center bg-no-repeat bg-black
    "
    style={{
      backgroundImage: `url(${Space})`,
      height: "80vh"
    }}
    >
      <motion.div className="text-white font-page text-center"
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
        <h2 className="text-5xl sm:text-6xl font-home font-light">{language.home.parallax.title}</h2>
        <p className="text-md mt-8 w-full m-0">{language.home.parallax.text}</p>
      </motion.div>
    </div>
  )
}