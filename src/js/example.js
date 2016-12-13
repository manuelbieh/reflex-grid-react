import React from 'react';

import { Grid, Col } from './reflex';

export default function Example() {
    return (
        <Grid columnClassName="col">
            <Col mdOrder={3} lgOrder={1} sm="2" xs={12}>1</Col>
            <Col mdOrder={2} lgOrder={2} sm="auto">2</Col>
            <Col size="8" mdOrder={1} lgOrder={3} lg="2">3</Col>
            <Col size="8" mdOrder={1} lgOrder={3} lg="2">3</Col>
        </Grid>
    );
}
