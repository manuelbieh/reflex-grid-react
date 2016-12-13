import React from 'react';

import styles from 'reflex-grid/css/reflex.css';

export default function Col({ el, size, padding, className, children, ...props}, { columnClassName, columnPadding }) {

    const sizeClasses = ['xs', 'sm', 'md', 'lg', 'xlg'].map((size) => {
        return props[size] && styles[`grid__col-${size}-${props[size]}`];
    }).concat(
        styles[`grid__col-${size}`],
        // add padding is padding was defined
        padding && styles[`grid__cell--padding-${padding}`],
        // inherit padding, but only if no padding was specified explicitly
        columnPadding && !padding && styles[`grid__cell--padding-${columnPadding}`]
    );

    const orderClasses = ['xs', 'sm', 'md', 'lg', 'xlg'].map((size) => {
        const value = props[`${size}Order`];
        console.log(`${size}Order`, value);
        return value && styles[`grid--order-${value}-${size}`];
    });

    const classes = [].concat(sizeClasses, orderClasses, columnClassName, className)
    .filter((value) => typeof value !== 'undefined')
    .join(' ');

    const Tag = el || 'div';

    return (
        <Tag className={ classes }>
            { children }
        </Tag>
    );
}

Col.contextTypes = {
    columnClassName: React.PropTypes.string,
    columnPadding: React.PropTypes.string
};

Col.propTypes = {
    el: React.PropTypes.string,
    children: React.PropTypes.any,
    className: React.PropTypes.string,
    style: React.PropTypes.object,
    size: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string,
    ]),
    xs: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string,
    ]),
    sm: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string,
    ]),
    md: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string,
    ]),
    lg: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string,
    ]),
    xlg: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string,
    ]),    
    xsOrder: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string,
    ]),
    smOrder: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string,
    ]),
    mdOrder: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string,
    ]),
    lgOrder: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string,
    ]),
    xlgOrder: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string,
    ]),
    padding: React.PropTypes.oneOf([
        'sm', 'md', 'lg'
    ]),
};
