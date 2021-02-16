import { Switch, Route } from 'react-router-dom';
import './App.css';

// Components
import Home from './pages/home/home';
import Portfolio from './pages/portfolio/portfolio';
import About from './pages/about/about';
import Contact from './pages/contact/contact';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  )
}

export default App;
