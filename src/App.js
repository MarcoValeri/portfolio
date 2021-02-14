import { Switch, Route } from 'react-router-dom';
import './App.css';

// Components
import Home from './pages/home/home';
import Portfolio from './pages/portfolio/portfolio';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
    </Switch>
  )
}

export default App;
