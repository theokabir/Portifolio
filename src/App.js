import { useEffect, useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/home'
import HomeEn from './pages/homeEn'
import Resume from './pages/resume'
import ResumeEn from './pages/resumeEn'
import NotFound from './pages/404'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { lang } from './lang/lang'
import './index.css'

function App() {

  const [language, setLanguage] = useState(lang.ptBR)

  useEffect(() => {
    if (!window.localStorage.getItem("lang")){
      setLanguage(lang.ptBR)
      window.localStorage.setItem("lang", "pt")
    }else{
      if(window.localStorage.getItem("lang") === "pt"){
        setLanguage(lang.ptBR)
      }else{
        setLanguage(lang.enUS)
      }
    }
  },[])

  const changeLang = newLang => {
    if (newLang === "pt") {
      setLanguage(lang.ptBR)
      window.localStorage.setItem("lang", "pt")
    }
    else if (newLang === "en") {
      setLanguage(lang.enUS)
      window.localStorage.setItem("lang", "en")
    }
    else {
      console.error("não existe dados sobre essa língua")
      changeLang("pt")
    }
  }

  return (
    <Router>
      <Navbar language={language} setLanguage={changeLang} />
      <div className="min-h-full font-page">
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route path="/" exact>
              <Home language={language}/>
            </Route>
            <Route path="/resume" exact>
              <Resume language={language} />
            </Route>
            <Route path="/en">
              <HomeEn setLanguage={changeLang} />
            </Route>
            <Route path="/resume/en">
              <ResumeEn setLanguage={changeLang} />
            </Route>
            <Route path="/">
              <NotFound language={language} />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
      <Footer language={language} />
    </Router>
  );
}

export default App;
