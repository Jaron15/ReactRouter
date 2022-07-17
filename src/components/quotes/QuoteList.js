import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';


import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

//here we pull out the search prop of the 'location' accessed with useLocation which returns our search params (sort: asc or desc)
  const queryParams = new URLSearchParams(location.search);

//checks if the obj w/ the 'sort' key is asc 
  const isSortingAscending = queryParams.get('sort') ==='asc';

//pass the quotes from props and the isSortingAscending boolean to the sort helper function
  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending)

//set the query params to whatever the opposite is when the button is clicked (desc if its on asc and asc if its already on desc) 
  const changeSortingHandler = () => {
    history.push('/quotes?sort=' + (isSortingAscending ? 'desc' : 'asc'));
  }
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort {isSortingAscending ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
