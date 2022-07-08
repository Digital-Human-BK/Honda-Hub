import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getSearchResults } from '../../../services/forumService';
import { mapErrors } from '../../../helpers/mappers';

import './Search.css';
import Header from '../Header';
import ForumHeading from '../ForumHeading';
import PostCard from '../PostCard';
import LoadingSpinner from '../../Common/LoadingSpinner';
import Notification from '../../Common/Notification';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('term').trim();

  const [searchData, setSearchData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fecthSearchResults = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const searchResult = await getSearchResults(query);
        setSearchData(searchResult);
      } catch (err) {
        console.log(err);
        const error = mapErrors(err);
        setError(error[0].msg);
      } finally {
        setIsLoading(false);
      }
    };
    fecthSearchResults();
  }, [query]);

  const noResultsMsg = (
    <h3 className='no-result'>
      No results for{' '}
      <span className='no-result--accent'>&lsquo;{query}&rsquo;</span>
    </h3>
  );

  return (
    <>
      <Header value={query} />
      <section id='search'>
        <div className='inner-width'>
          <ForumHeading title={'Search results'} />
          {isLoading && <LoadingSpinner />}
          <ul className='posts-list'>
            {
              searchData &&
              searchData.length > 0 &&
              searchData.map((data) => <PostCard key={data._id} data={data} />)
            }

            {error && <Notification>{error}</Notification>}
            {!error && !isLoading && searchData.length === 0 && noResultsMsg}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Search;
