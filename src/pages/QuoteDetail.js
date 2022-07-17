import React from 'react'
import QuoteItem from '../components/quotes/QuoteItem';
import {useParams, Route} from 'react-router-dom';

const QuoteDetail = () => {
    const params = useParams();

    console.log(params.quoteId)
  return (
    <section>
    <h1>Quote Detail</h1>
    <p>{params.quoteId}</p>
    {/* <QuoteItem /> */}
    <Route path="/quotes/:quoteId/comments">
        <p>Comments </p>    
    </Route>
    </section>
  )
}

export default QuoteDetail