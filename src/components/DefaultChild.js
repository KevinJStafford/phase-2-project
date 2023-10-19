import {Grid} from "semantic-ui-react";

function DefaultChild() {
    return (
        <Grid>
          <Grid.Column textAlign="center">
            <div className="childtitle">
              <h1 className="sitetitle">Welcome to Family Fun Helper!</h1>
            </div>
          </Grid.Column>
        </Grid>
      );
    }

export default DefaultChild;