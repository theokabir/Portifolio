import Parallax from "./../components/home/Parallax"
import { AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import InfoBox from "../components/home/InfoBox"
import TechOptions from "../components/home/TechOptions"
import { useHistory } from 'react-router-dom'


const Home = ({ language, en, setLanguage }) => {

  const [infoBox, setInfoBox] = useState("none")
  const history = useHistory()

  const infoChange = (e, newInfo) => {
    e.preventDefault()
    if (infoBox === newInfo) {
      setInfoBox("none")
    } else {
      setInfoBox(newInfo)
    } 

  }

  useEffect(() => {
    if(en) {
      setLanguage('en')
      history.push('/')
    }
  });

  return ( 
    <div className="font-page mb-4">

      <div className="overflow-hidden">
        <Parallax language={language} />
      </div>

      <h2 className="text-center pt-5 text-4xl font-semibold text-white">
        {language.home.title1}
      </h2>

      <div>

        <div className="mt-4 border-b border-white sm:col-span-1 text-white">

          <TechOptions infoChange={infoChange} />

        </div>

        <div className="sm:col-span-5 h-96 sm:h-auto">

          <div className="overflow-hidden">

            <div className="h-96 md:h-card">
              <AnimatePresence exitBeforeEnter>

                {infoBox === "react" ? (
                  <InfoBox key="react" content={language.home.react || {title: "No Text"}} bg={true} />
                ): infoBox === "next" ? (
                  <InfoBox key="next" content={language.home.next || {title: "No Text"}} bg={true} />
                ): infoBox === "express" ? (
                  <InfoBox key="express" content={language.home.express || {title: "No Text"}} bg={true} />
                ): infoBox === "tailwind" ? (
                  <InfoBox key="tailwind" content={language.home.tailwind || {title: "No Text"}} bg={true} />
                ):(
                  <InfoBox key="noInfo" content={language.home.noInfo || {title: "No Text"}} />
                )}

              </AnimatePresence>
            </div>

          </div>
          
        </div>

      </div>

    </div>
   );
}
 
export default Home;