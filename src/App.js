import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import AddClient from './components/dashboard/AddClient';
import ClientDetail from './components/dashboard/ClientDetail';
import SignIn from './components/auth/SignIn';
import Home from './components/dashboard/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/add-client" component={AddClient} />
          <Route path="/client/:id" component={ClientDetail} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
