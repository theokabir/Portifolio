import { motion } from 'framer-motion'

const textVariant = {
  hidden: {
    height: 0,
    opacity: 0
  },
  show: {
    height: "100%",
    opacity: 1
  },
  exit: {
    y: "100vh"
  }
}

export default function InfoBox({content, bg}) {
  return (
    <motion.div
    className="p-4 h-full w-full overflow-hidden"
    variants={textVariant} 
    initial="hidden" 
    animate="show" 
    exit="exit"
    >
      <div className={`h-full w-full ${bg && "bg-yellow-200"} rounded-xl p-6`} >

        {content}

      </div>
    </motion.div>
)
}