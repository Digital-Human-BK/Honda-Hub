import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getSearchResults } from '../../../services/forumService';

import './Search.css';
import Header from '../Header';
import ForumHeading from '../ForumHeading';
import Post from '../Posts';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('term').trim();

  const [searchData, setSearchData] = useState();

  useEffect(() => {
    const fecthResult = async () => {
      const searchResult = await getSearchResults(query);
      setSearchData(searchResult);
      console.log(searchResult);
    };
    fecthResult();
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
          <ul className='posts-list'>
            {searchData && searchData.length > 0
              ? searchData.map((data) => <Post key={data._id} data={data} />)
              : noResultsMsg}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Search;
