import { useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/home'
import Resume from './pages/resume'
import NotFound from './pages/404'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { lang } from './lang/lang'
import './index.css'

function App() {

  const [language, setLanguage] = useState(lang.ptBR)

  const changeLang = newLang => {
    if (newLang === "pt") setLanguage(lang.ptBR)
    else if (newLang === "en") setLanguage(lang.enUS)
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
            <Route path="/resume">
              <Resume language={language} />
            </Route>
            <Route path="/en">
              <Home language={language} en={true} setLanguage={changeLang} />
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
