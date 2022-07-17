import {Fragment} from 'react'
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Max', text: 'Learning React is fun!'},  
    {id: 'q2', author: 'Bob', text: 'Learning React is great!'},  
] 

const Quotes = () => {

  return (
    <Fragment>
    <QuoteList quotes={DUMMY_QUOTES}/>
    </Fragment>
  )
}

export default Quotes