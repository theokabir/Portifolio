import { motion } from 'framer-motion'

const textVariant = {
  hidden: {
    height: 0,
    opacity: 0
  },
  show: {
    height: "100%",
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut"
    }
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
      <div className={`
      h-full w-full md:w-9/12 m-auto ${bg && "bg-yellow-400"} 
      rounded-xl p-6 text-center
      flex flex-col justify-center
      overflow-hidden
      `} >

        <h2 className={` text-3xl sm:text-6xl sm:mt-12  font-semibold ${!bg && "text-white"}`}>{content.title}</h2>

        <p className={
        `text-sm sm:text-lg font-medium 
        w-11/12 lg:w-6/12 
        m-auto
        ${!bg && "text-white"}`}
        style={{
          textAlign: "justify",
          textAlignLast: "center"
        }}
        >{content.content}</p>

      </div>
    </motion.div>
)
}