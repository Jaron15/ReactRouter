import {Fragment} from 'react'
import QuoteItem from '../components/quotes/QuoteItem';
import {useParams, Route} from 'react-router-dom';
import Comments from '../components/comments/Comments'

const QuoteDetail = () => {
    const params = useParams();

  return (
    <Fragment>
    <h1>Quote Detail</h1>
    <p>{params.quoteId}</p>
    {/* <QuoteItem /> */}
    <Route path="/quotes/:quoteId/comments">
       <Comments />
    </Route>
    </Fragment>
  )
}

export default QuoteDetail