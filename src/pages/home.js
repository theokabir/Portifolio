import Parallax from "./../components/home/Parallax"
import { Icon } from '@iconify/react'
import nextJs from '@iconify/icons-cib/next-js'
import expressIcon from '@iconify/icons-simple-icons/express'
import tailwindcssIcon from '@iconify/icons-simple-icons/tailwindcss'
import reactIcon from '@iconify/icons-cib/react'
import { AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import InfoBox from "../components/home/InfoBox"


const Home = ({ language, en, setLanguage }) => {

  const [infoBox, setInfoBox] = useState("none")

  const infoChange = (e, newInfo) => {
    e.preventDefault()
    if (infoBox === newInfo) {
      setInfoBox("none")
    } else {
      setInfoBox(newInfo)
    } 

  }

  useEffect(() => {
    if(en) setLanguage('en')
  }, [en, setLanguage]);

  return ( 
    <div className="font-page bg-blueGray-800">
      <div className="overflow-hidden">
        <Parallax />
      </div>
      <h2 className="
      text-center pt-5 text-4xl font-semibold text-white
      ">{language.home.title1}</h2>

      <div className="
      sm:grid grid-cols-5 mt-4
      ">

      <div className="border-r border-black sm:col-span-1 text-white">

        <div class="grid grid-cols-4 sm:grid-cols-1">

          <div className="text-8xl" onClick={ e => infoChange(e, "react") }>
            <Icon className="hover:text-blue-600 btn-tech-hover" icon={reactIcon} />
          </div>
          
          <div className="text-8xl">
            <Icon className="hover:text-black btn-tech-hover" icon={nextJs} />
          </div>
          
          <div className="text-8xl">
            <Icon className="hover:text-yellow-600 btn-tech-hover" icon={expressIcon} />
          </div>
          
          <div className="text-8xl">
            <Icon className="hover:text-blue-400 btn-tech-hover" icon={tailwindcssIcon} />
          </div>

        </div>

      </div>

      <div className="
      sm:col-span-4 h-96 sm:h-auto
      ">

        <div className="overflow-hidden h-full w-full">
          <AnimatePresence exitBeforeEnter>

            {infoBox === "react" ? (
              <InfoBox key="react" content={language.home.react} bg={true} />
            ):(
              <InfoBox key="noInfo" content={language.home.noInfo} />
            )}

          </AnimatePresence>
        </div>
        
      </div>

      </div>
    </div>
   );
}
 
export default Home;