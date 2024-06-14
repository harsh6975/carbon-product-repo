import { Col } from "@antd";
import React from 'react';
import { Grid } from '@carbon/react';

const PageSeparator = (props) => {
  return (
    <Grid>
      <Col
        lg="16"
        md="8"
        sm="4"
        className="dashboard-page__separator"
        >
          <h4>{props.title}</h4>
      </Col>
    </Grid>
  );
};

export default PageSeparator;