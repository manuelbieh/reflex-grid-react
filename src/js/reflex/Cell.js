import React from 'react';

import styles from 'reflex-grid/css/reflex.css';

export default function Cell({ el, children, padding }) {
    
    const classes = [
        styles.grid__cell,
        styles[`grid__cell--padding-${padding}`]
    ]
    .filter((value) => typeof value !== 'undefined')
    .join(' ');

    const Tag = el || 'div';

    return (
        <Tag className={ classes }>
            { children }
        </Tag>
    );
}

Cell.propTypes = {
    el: React.PropTypes.string,
    children: React.PropTypes.any,
    padding: React.PropTypes.oneOf([
        'sm', 'md', 'lg'
    ])
};
