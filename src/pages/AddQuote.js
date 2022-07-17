import {Fragment} from 'react'
import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom'

const AddQuote = () => {
//the useHistory hook allows you to push the user to a different route and allow them to go back to the previous route with the back arrow in the browser
    const history = useHistory()

    const addQuoteHandler = (quoteData) => {
        console.log(quoteData);

        history.push('/quotes')
    }

  return (
    <Fragment> 
    <h1>Add Quotes</h1>
    <QuoteForm onAddQuote={addQuoteHandler} />
    </Fragment>
  )
}

export default AddQuote
