/****
 * The MIT License (MIT)
 * 
 * Copyright (c) 2015 Aaron Trent
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 * 
 ****/
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _react = require('react');

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Aaron on 12/21/2015.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

//Algorithm described here: https://cgd.io/2008/using-javascript-to-scroll-to-a-specific-elementobject/
function findPos(element) {
    var curtop = 0;

    if (element.offsetParent) {
        do {
            curtop += element.offsetTop;
        } while (element = element.offsetParent);

        return [curtop];
    }
}

var ScrollToElement = (function (_React$Component) {
    _inherits(ScrollToElement, _React$Component);

    function ScrollToElement() {
        _classCallCheck(this, ScrollToElement);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    ScrollToElement.prototype.scroll = function scroll() {
        var ref = this.refs['scroll'];

        var element = React.findDOMNode(ref);

        if (typeof element.scrollIntoView === 'function') {
            element.scrollIntoView(true);
        } else {
            var pos = this.findPos(element);

            window.scroll(0, pos);
        }
    };

    ScrollToElement.prototype.render = function render() {
        var _props = this.props;
        var id = _props.id;
        var component = _props.component;
        var children = _props.children;

        return React.createElement(component, _extends({}, this.props, { id: id, ref: 'scroll' }), children);
    };

    return ScrollToElement;
})(React.Component);

ScrollToElement.displayName = 'ScrollToElement';
ScrollToElement.propTypes = {
    id: React.PropTypes.string.isRequired,
    component: React.PropTypes.node
};
ScrollToElement.defaultProps = {
    component: 'div'
};
exports.default = ScrollToElement;
