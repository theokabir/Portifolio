import { Icon } from '@iconify/react'
import html5Icon from '@iconify/icons-simple-icons/html5'
import css3Icon from '@iconify/icons-simple-icons/css3'
import javascriptIcon from '@iconify/icons-simple-icons/javascript'
import reactIcon from '@iconify/icons-cib/react'
import nextJs from '@iconify/icons-cib/next-js'
import expressIcon from '@iconify/icons-simple-icons/express'
import mongodbIcon from '@iconify/icons-simple-icons/mongodb'
import csharpIcon from '@iconify/icons-simple-icons/csharp'
import dartIcon from '@iconify/icons-simple-icons/dart'
import javaIcon from '@iconify/icons-simple-icons/java'
import phpIcon from '@iconify/icons-simple-icons/php'
import mysqlIcon from '@iconify/icons-fontisto/mysql'
import vueFill from '@iconify/icons-akar-icons/vue-fill'
import pythonFill from '@iconify/icons-akar-icons/python-fill'
import microsoftwordIcon from '@iconify/icons-simple-icons/microsoftword'
import microsoftpowerpointIcon from '@iconify/icons-simple-icons/microsoftpowerpoint'
import englishIcon from '@iconify/icons-icon-park-outline/english'
import { motion } from 'framer-motion'

const bodyVariant = {
  hidden: {
    x: 10,
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

export default function Body({ language }){
  return(
    <motion.div className="md:col-span-2 p-4">
      <motion.div variants={bodyVariant}>
        <h4 className="text-xl mb-2 titles">Sobre mim</h4>
        <p style={{textIndent: 20}} className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam similique nulla! Assumenda officiis inventore alias cupiditate rerum natus obcaecati repellat minima ipsam ex distinctio veritatis, porro tempore ipsa ad? Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, architecto officia ut veritatis labore ab amet esse distinctio illum totam excepturi possimus dolorum, nihil eius, iste praesentium quaerat vel. Omnis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt quas voluptas, rerum reiciendis impedit excepturi asperiores dignissimos veritatis aspernatur officia, possimus deleniti, et harum illum similique sed vero eum facere.</p>
      </motion.div>
      <motion.div variants={bodyVariant}>
        <h4 className="text-xl mt-4 mb-2 titles">Experiência proficional</h4>
        <ul className="list-disc list-inside">
          <li>Nenhuma experiência profissional até o momento</li>
        </ul>
      </motion.div>
      <div>
        <motion.h4 className="text-xl mt-4 mb-2 titles" variants={bodyVariant}>Habilidades</motion.h4>
        <div className="md:grid grid-cols-2 justify-between">
          <div>
            <motion.div variants={bodyVariant}>
              <h5 className="titles">Tecnológicas</h5>
              <ul className="list-inside">
                <li><Icon icon={html5Icon} inline={true} className="bodyIcon" />HTML 5</li>
                <li><Icon icon={css3Icon} inline={true} className="bodyIcon" />CSS 3</li>
                <li><Icon icon={javascriptIcon} inline={true} className="bodyIcon" />Javascript</li>
                <li><Icon icon={reactIcon} inline={true} className="bodyIcon" />ReactJS</li>
                <li><Icon icon={nextJs} inline={true} className="bodyIcon" />NextJS</li>
                <li><Icon icon={expressIcon} inline={true} className="bodyIcon" />Express</li>
                <li><Icon icon={mongodbIcon} inline={true} className="bodyIcon" />MongoDB</li>
              </ul>
            </motion.div>
            <motion.div variants={bodyVariant}>
              <h5 className="titles">Básico</h5>
              <ul className="list-inside">
                <li><Icon icon={csharpIcon} inline={true} className="bodyIcon" />C#</li>
                <li><Icon icon={dartIcon} inline={true} className="bodyIcon" />Dart</li>
                <li><Icon icon={javaIcon} inline={true} className="bodyIcon" />Java</li>
                <li><Icon icon={phpIcon} inline={true} className="bodyIcon" />PHP</li>
                <li><Icon icon={mysqlIcon} inline={true} className="bodyIcon" />MySQL</li>
                <li><Icon icon={vueFill} inline={true} className="bodyIcon" />VueJS</li>
                <li><Icon icon={pythonFill} inline={true} className="bodyIcon" />Python</li>
              </ul>
            </motion.div>
          </div>
          <motion.div variants={bodyVariant}>
            <h5 className="titles">Outras</h5>
            <ul className="list-inside">
              <li><Icon icon={microsoftwordIcon} inline={true} className="bodyIcon" />Word: Intermediário</li>
              <li><Icon icon={microsoftpowerpointIcon} inline={true} className="bodyIcon" />power Point: Intermediário</li>
              <li><Icon icon={englishIcon} inline={true} className="bodyIcon" />Inglês: Intermediário</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}