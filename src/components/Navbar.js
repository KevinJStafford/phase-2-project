import Searchbar from "./Searchbar";
import FilterToggle from "./FilterToggle";
import { Grid, Menu, Segment} from 'semantic-ui-react';
import {NavLink} from "react-router-dom"

function Navbar({ handleSearchChange, toggleCost }) {
  return (
    <Segment>
      <Grid columns={3}>
        <Grid.Column width={4}>
          <FilterToggle toggleCost={toggleCost} />
        </Grid.Column>
        <Grid.Column width={8} textAlign="center">
          <Searchbar handleSearchChange={handleSearchChange} />
        </Grid.Column>
        <Grid.Column width={4} textAlign="right">
          <Menu secondary>
            <Menu.Item position="right">
              <NavLink to="/" className="Nav-Link">
                Home
              </NavLink>
            </Menu.Item>
            <Menu.Item position="right">
              <NavLink to="/activities" className="Nav-Link">
                Activities
              </NavLink>
            </Menu.Item>
            <Menu.Item position="right">
              <NavLink to="/activities/form" className="Nav-Link">
                New Activity
              </NavLink>
            </Menu.Item>
            <Menu.Item position="right">
              <NavLink to="/activities/random" className="Nav-Link">
                Random
              </NavLink>
            </Menu.Item>
          </Menu>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

export default Navbar;