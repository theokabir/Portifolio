import Profile from "../components/resume/Profile";
import Body from "../components/resume/Body";
import bg from './../assets/space_wpp.jpg'
import { motion } from 'framer-motion'

const resumeVariant = {
  show: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
}

const Resume = ({ language }) => {
  return ( 
    <div className="
    w-full
    bg-cover bg-fixed bg-center bg-no-repeat
    " 
    style={{
      backgroundImage: `url(${bg})`,
    }}
    >
      <motion.div className="
      w-full lg:w-9/12 mx-auto py-8
      md:grid md:grid-cols-3 grid-cols-1 font-page text-white
      overflow-hidden
      "
      style={{
        backgroundColor: "rgba(51, 65, 85, 0.8)"
      }}
      variants={resumeVariant}
      initial="hidden"
      animate="show"
      >
        <Profile language={language} />
        <Body language={language} />
      </motion.div>
    </div>
  );
}
 
export default Resume;                                  