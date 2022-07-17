import {Fragment} from 'react'
import QuoteForm from '../components/quotes/QuoteForm';

const AddQuote = () => {

    const addQuoteHandler = (quoteData) => {
        console.log(quoteData);
    }

  return (
    <Fragment> 
    <h1>Add Quotes</h1>
    <QuoteForm onAddQuote={addQuoteHandler} />
    </Fragment>
  )
}

export default AddQuote