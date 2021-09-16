import profilePic from '../../assets/profile.png'
import { motion } from 'framer-motion'

const profVariant = {
  hidden: {
    x: -10,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut"
    }
  }
}

export default function Profile({ language }){
  return (
    <motion.div className="md:col-span-1 border-b md:border-b-0 md:border-r p-4"
    transition={{
      when: "beforeChildren",
      staggerChildren: .02,
      type: "tween",
      ease: "easeOut"
    }}
    >
      <motion.div variants={profVariant}>
        <div className="w-32 h-32 rounded-full overflow-hidden m-auto">
          <img src={profilePic} alt="Minha imagem" className="object-cover" />
        </div>
        <div className="my-4 border-b-2 border-white pb-4">
          <p>Théo Kabir Novais de Carvalho</p>
          <p>Email: <a href="mailto:theokabir3003@gmail.com" className="text-blue-400 hover:underline">theokabir3003@gmail.com</a></p>
          <p>GitHub: <a target="_blank" rel="noreferrer" href="https://github.com/theokabir" className="text-blue-400 hover:underline">github.com/theokabir</a></p>
        </div>
      </motion.div>
      <motion.div variants={profVariant}>
        <h4 className="font-titles">Escolaridade</h4>
        <ul className="list-disc list-inside">
          <li>Cursando Ensino médio técnico em desenvolvimento de sistemas na Etec da Zona Leste</li>
        </ul>
      </motion.div>
    </motion.div>
  )
}