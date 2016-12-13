import React from 'react';
import { render } from 'react-dom';

import Example from './example';

render(
    <Example />,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
}
