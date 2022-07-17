import {Fragment} from 'react'
import {useParams, Route, Link} from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';


const DUMMY_QUOTES = [
    {id: 'q1', author: 'Max', text: 'Learning React is fun!'},  
    {id: 'q2', author: 'Bob', text: 'Learning React is great!'},  
] 


const QuoteDetail = () => {
    const params = useParams();

    const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId)

    if (!quote) {
        return <p>No Quote Found</p>
    }
  return (
    <Fragment>
    <HighlightedQuote 
    text={quote.text}
    author={quote.author}  
    />

    <Route path={`/quotes/${params.quoteId}`} exact>
    <div className='centered'>
    <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link>
    </div>
    </Route>
    <Route path={`/quotes/${params.quoteId}/comments`}>
       <Comments />
    </Route>
    </Fragment>
  )
}

export default QuoteDetail

//we use a nested route here to bring up the comments button only if the exact path that doesnt have 'comments' in it is active
//once you click the comments button it changes the link to include comments which takes the button out 