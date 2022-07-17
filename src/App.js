import {Route} from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
      <Route path="/welcome">
      <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/product-detail/:productId">
        <ProductDetail />
      </Route>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome page
// our-domain.com/products => Products page
// our-domain.com/product-detail/a-book (the : is a dynamic path)