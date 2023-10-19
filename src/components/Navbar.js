import Searchbar from "./Searchbar";
import FilterToggle from "./FilterToggle";
import {Grid, Header, Segment} from 'semantic-ui-react';
import {NavLink} from "react-router-dom"

function Navbar({handleSearchChange}) {

    return (
    <Segment>
        <Header as='h3' textAlign='right'>
            <nav class="ui equal width grid container" >
            <NavLink
                to= "/"
                className= "Nav-Link"
                > Home </NavLink>
                <NavLink
                to= "/activities"
                className= "Nav-Link"
                > Activities </NavLink>
                <NavLink
                to="/activities/form"
                className= "Nav-Link"
                > New Activity </NavLink>
                <NavLink 
                to='/activities/random'
                className="Nav-Link"
                >Random</NavLink>
                <div class="ui segment">
                    <Searchbar handleSearchChange={handleSearchChange} />
                </div>
                <div class="column">
                    <div class="ui segment">
                        <FilterToggle />
                    </div>    
                </div>
            </nav>
        </Header>
    </Segment>
    )
}

export default Navbar;        