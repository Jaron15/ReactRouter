import {Fragment, useEffect} from 'react'
import QuoteList from '../components/quotes/QuoteList';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const Quotes = () => {
//pull out the getAllQuotes function and its props from the http hook using the getAllQuotes reducer function
    const { sendRequest, status, data: loadedQuotes, error } = useHttp(
        getAllQuotes,
        true
      );
        
//send getAllQuotes request (doesnt req args)
      useEffect(() => {
        sendRequest();
      }, [sendRequest]);
      console.log(loadedQuotes);

//give the loadingSpinner if its pending
        if (status === 'pending') {
            return (
            <div className='centered'>
                <LoadingSpinner />
            </div>)
        }
//give an error if there is one
        if (error) {
            return (
            <p className='centered focused'>{error}</p>)
        }
//if its completed but there is no quotes give the NoQuotesFoundComponent
        if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
            return <NoQuotesFound />
        }
  return (
    <Fragment>
    <QuoteList quotes={loadedQuotes} />
    </Fragment>
  )
}

export default Quotes