/**
 * Created by Aaron on 12/21/2015.
 */

import * as React from 'react';

//Algorithm described here: https://cgd.io/2008/using-javascript-to-scroll-to-a-specific-elementobject/
function findPos( element ) {
    var curtop = 0;

    if( element.offsetParent ) {
        do {
            curtop += element.offsetTop;
        } while( element = element.offsetParent );

        return [curtop];
    }
}

class ScrollToElement extends React.Component {
    static displayName = 'ScrollToElement';

    static propTypes = {
        id:        React.PropTypes.string.isRequired,
        component: React.PropTypes.node
    };

    static defaultProps = {
        component: 'div'
    };

    scroll() {
        let ref = this.refs['scroll'];

        let element = React.findDOMNode( ref );

        if( typeof element.scrollIntoView === 'function' ) {
            element.scrollIntoView( true );

        } else {
            const pos = this.findPos( element );

            window.scroll( 0, pos );
        }
    }

    render() {
        const {id, component, children} = this.props;

        return React.createElement( component, {...this.props, id, ref: 'scroll'}, children );
    }
}

export default ScrollToElement;
