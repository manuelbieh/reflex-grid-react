import React from 'react';

import styles from 'reflex-grid/css/reflex.css';

export default class Grid extends React.Component {

    static propTypes = {
        el: React.PropTypes.string,
        children: React.PropTypes.any,
        columnClassName: React.PropTypes.string,
        columnPadding: React.PropTypes.string,
        className: React.PropTypes.string,
        style: React.PropTypes.object,
        noWrap: React.PropTypes.bool,
        wrap: React.PropTypes.bool,
        wrapReverse: React.PropTypes.bool,
        align: React.PropTypes.string,
        justify: React.PropTypes.string,
    };

    static childContextTypes = {
        columnClassName: React.PropTypes.string,
        columnPadding: React.PropTypes.string
    };
    
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    getChildContext() {
        return {
            columnClassName: this.props.columnClassName,
            columnPadding: this.props.columnPadding
        };
    }

    render() {

        const { el, children, className, style } = this.props;

        const classes = [
            styles.grid, 
            className,
            styles[`grid--align-${this.props.align}`],
            styles[`grid--justify-${this.props.justify}`],
            this.props.noWrap && styles['grid--no-wrap'],
            this.props.wrap && styles['grid--wrap'],
            this.props.wrapReverse && styles['grid--wrap-reverse']
        ]
        .filter((value) => typeof value !== 'undefined')
        .join(' ');

        const Tag = el || 'div';

        return (
            <Tag className={ classes } style={ style }>
                { children }
            </Tag>
        );

    }

}

Grid.propTypes = {

};