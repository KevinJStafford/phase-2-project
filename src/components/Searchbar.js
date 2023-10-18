import React from 'react'

function Searchbar({handleSearchOnChange}) {

    return (
        <div className="search">
          <input onChange={handleSearchOnChange} type="text" className="searchTerm" />
        </div>
    )
}

export default Searchbar;


















// export default Searchbar;