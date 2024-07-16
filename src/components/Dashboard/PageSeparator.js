import React from 'react';
import { Column, Grid } from '@carbon/react';

const PageSeparator = (props) => {
  return (
    <Grid>
      <Column
        lg="16"
        md="8"
        sm="4"
        className="dashboard-page__separator"
        >
          <h4>{props.title}</h4>
      </Column>
    </Grid>
  );
};

export default PageSeparator;