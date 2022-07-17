import {Route, Switch, Redirect} from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
      <Switch>
        <Route path='/' exact>
          <Redirect to="/welcome"/>
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
      </Switch>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome page
// our-domain.com/products => Products page
// our-domain.com/product-detail/a-book (the : is a dynamic path)
// Switch makes it so that it stops routing once one of the results is hit instead of rendering multiple paths 
// the exact keyword makes it so that the it will only go to that route if the path is exactly as defined (especially useful if chainging routes)