import Searchbar from "./Searchbar";
import FilterToggle from "./FilterToggle";
import {Grid, Segment} from 'semantic-ui-react';

function Navbar({handleSearchChange}) {

    return (
        <div class="ui equal width grid">
          <div class="eight wide column">
            <div class="ui segment"><Searchbar handleSearchChange={handleSearchChange} />
            </div>
        </div>
        <div class="column">
            <div class="ui segment"><FilterToggle />
            </div>
            </div>
            <div class="column">
                <div class="ui segment"><button>Activities</button><button>Randomizer</button><button>Add Activity!</button>
                </div>
                </div>
                </div>
    )
}

export default Navbar;















// export default Navbar;