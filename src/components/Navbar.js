import Searchbar from "./Searchbar";
import FilterToggle from "./FilterToggle";

function Navbar({handleSearchChange}) {

    return (
        <div class="ui four column grid container">
        <div class="column">
            <Searchbar handleSearchChange={handleSearchChange} />
            <FilterToggle />
            <button>Activities</button>
            <button>Randomizer</button>
            <button>Add Activity!</button>
        </div>
        </div>
    )
}

export default Navbar;















// export default Navbar;