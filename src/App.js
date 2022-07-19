import {Route, Switch, Redirect} from 'react-router-dom';
import Quotes from './pages/Quotes';
import QuoteDetail from './pages/QuoteDetail';
import AddQuote from './pages/AddQuote';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

//**CHANGES WITH REACT-ROUTER-6 (version 6)**
//'switch' is 'Routes' 

//Components arent child components of routes they belong in an 'elements' prop
//EX. Route path='/quotes' exact element={<Quotes />}

//exact is not needed its automatically applied if you define your path
//the route algorithm is better so it doesnt matter the order you define the routes in 

//'Redirect' is now 'Navigate'| it should also be passed in as an element and not a child comp
//however Navigate would just push to the redirect path to replace use the replace prop 
//EX <Route path="/" exact> element={<Navigate replace to="/quotes" />} />

//You can also define nested routes in this file by defining the Route as the child component 

function App() {
  return (
    <div>
      <main>
        <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <Quotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/add-quote" >
            <AddQuote />
          </Route>
          <Route path="*">
          <NotFound /> 
          </Route>
        </Switch>
        </Layout>
      </main>
    </div>
  );
}

export default App;
