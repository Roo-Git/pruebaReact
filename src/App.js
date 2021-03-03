import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Profile from './containers/Profile/Profile';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
        <BrowserRouter>

          <Header/>

          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/profile" exact component={Profile}></Route>
          </Switch>

        </BrowserRouter>
    </div>
  );
};

export default App;
