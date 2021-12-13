import HomePage from './pages/homepage/homepage.component.jsx';
import Header from './compo/header/header.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx';

function App() {
  return (
    <div>
    <Header>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
      </Switch>
    </Header>
    </div>
  );
}

export default App;
