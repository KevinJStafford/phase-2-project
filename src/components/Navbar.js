import Searchbar from "./Searchbar";
import FilterToggle from "./FilterToggle";

function Navbar({handleSearchChange}) {

    return (
        <div className="nav-area">
            <Searchbar handleSearchChange={handleSearchChange} />
            <FilterToggle />
        </div>
    )
}

export default Navbar;















// export default Navbar;