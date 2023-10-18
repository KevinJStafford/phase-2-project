import React from 'react'

function Searchbar({handleSearchChange}) {

    return (
        <div className="search">
          <input onChange={handleSearchChange} type="text" className="searchTerm" placeholder="Search" />
        </div>
    )
}

export default Searchbar;


















// export default Searchbar;