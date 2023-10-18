import Searchbar from "./Searchbar";
import FilterToggle from "./FilterToggle";

function Navbar({handleSearchChange}) {

    return (
        <div class="ui grid container">
        <div class="ui four column grid container" className="nav-area">
            <Searchbar class="column" className="column" handleSearchChange={handleSearchChange} />
            <FilterToggle class="column" />
            <button>Activities</button>
            <button>Randomizer</button>
            <button>Add Activity!</button>
        </div>
        </div>
    )
}

export default Navbar;















// export default Navbar;