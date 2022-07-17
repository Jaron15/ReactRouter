import {Route, Switch, Redirect} from 'react-router-dom';
import Quotes from './pages/Quotes';
import QuoteDetail from './pages/QuoteDetail';
import AddQuote from './pages/AddQuote';

function App() {
  return (
    <div>
      <main>
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
        </Switch>
      </main>
    </div>
  );
}

export default App;
