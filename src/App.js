import { Home } from './pages/home/Home'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Info } from './pages/info/Info'
import { Navbar } from './nav/Navbar'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/about'} component={Info} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
