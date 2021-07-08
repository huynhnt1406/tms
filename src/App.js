import 'antd/dist/antd.css';
import OrderDetail from "./components/OrderDetail";
import {BrowserRouter as Router , Route ,Switch} from 'react-router-dom'
import SignIn from "./components/SignIn";
function App() {
  return (
    <Router>
    <Switch>
      <div>
          <Route exact path="/">
            <OrderDetail/>
          </Route>
          <Route path="/login">
            <SignIn/>
          </Route>
      </div>
      </Switch>
    </Router>
  );
}

export default App;
