import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
  const {query, setQuery, isError} = useGlobalContext();
  return (
  <section className='search-section'>
    <h2>Search Your Favourite Movie..</h2>
    <form action ="#" onSubmit={(e)=> e.preventDefault()} >
      <div>
        <input type='text' placeholder='Search here..' value={query} onChange={(e)=> setQuery(e.target.value)}/>
      </div>


    </form>
    {isError.show && (
        <div className="card-error">
          <p>{isError.msg}</p>
        </div>
      )}


    </section>

   
  )
}

export default Search