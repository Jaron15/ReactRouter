import {Fragment, useEffect} from 'react'
import {useParams, Route, Link, useRouteMatch} from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import {getSingleQuote} from '../lib/api';

//REACT-ROUTER-6 CHANGES 
//When using nested routes in v6 you have to wrap any Route in a Routes component
//any route path that is going to contain nested route must be defined with a /* at the end 
//EX. (in app.js) <Route path='/quotes/:quoteId/*' .../>

//the nested route would then not need to define the first part of the path just the variable at the end
//EX. <Route path="comments" .../>

//if you decide to write the nested route in the app.js with the other routes,
//you can render that nested route in your JSX with the 'Outlet' component 

const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();
//you want to be as specific as you can when using this as a dependency therefore we destructure the id out of params
//if you just do params.quoteId the effect would run everytime the params changed at all
    const {quoteId} = params;

    //pull out the function to request a single quote and the status/data/error props of it 
    const {sendRequest, status, data: loadedQuote, error} = 
    useHttp(
      getSingleQuote,
      true);

//the first time this is rendered it will send a request so get a single quote using the quoteId
//it will only rerun if the quoteId changes
    useEffect(() => {
      sendRequest(quoteId);
    }, [sendRequest, quoteId])


    if (status === 'pending') {
      return (
        <div className='centered'>
          <LoadingSpinner />
        </div>
      )
    }

    if (error) {
      return <p className='centered'>{error}</p>
    }
    if (!loadedQuote.text) {
      return <p>No Quote Found</p>
    }
   
  return (
    <Fragment>
    <HighlightedQuote 
    text={loadedQuote.text}
    author={loadedQuote.author}  
    />

    <Route path={match.path} exact>
    <div className='centered'>
    <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
    </div>
    </Route>
    <Route path={`${match.path}/comments`}>
       <Comments />
    </Route>
    </Fragment>
  )
}

export default QuoteDetail

//we use a nested route here to bring up the comments button only if the exact path that doesnt have 'comments' in it is active
//once you click the comments button it changes the link to include comments which takes the button out 