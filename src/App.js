import './App.css';
import Landing from './components/Landing';
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from './Auth/Protected.route';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./components/Home'));

function App() {
  return (
    <div className="App">
      <h1>Protracted React Route</h1>
      <Suspense fallback={() => "404 NOT FOUND"}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <ProtectedRoute exact path="/home" component={Home} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Suspense>
    </div>
  );
}


export default App;
