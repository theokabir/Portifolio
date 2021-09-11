import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/home'
import Resume from './pages/resume'
import NotFound from './pages/404'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar />
    <AnimatePresence exitOnEnter>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </AnimatePresence>
    </>
  );
}

export default App;
