import {Fragment, useEffect} from 'react';
import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import {addQuote} from '../lib/api';

const AddQuote = () => {
    const {sendRequest, status} = useHttp(addQuote);

//the useHistory hook allows you to push the user to a different route and allow them to go back to the previous route with the back arrow in the browser
    const history = useHistory()

    useEffect(() => {
        if (status === 'completed') {
            history.push('/quotes')
        }
    }, [status, history])

    const addQuoteHandler = (quoteData) => {
        sendRequest(quoteData);
    }

  return (
    <Fragment> 
    <h1>Add Quotes</h1>
    <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
    </Fragment>
  )
}

export default AddQuote
