import React from 'react';
import Loader from './component/Loader'
import ExpenseSheet from './component/ExpenseSheet'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Loader}></Route>
        <Route exact path="/expensesheet" component={ExpenseSheet}></Route>
        <Route render = {() => <h1>404 Not Found !</h1>} />
      </Switch>
      </BrowserRouter>
    );
    
  }
}

export default App;
