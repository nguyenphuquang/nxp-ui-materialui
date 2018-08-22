'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.breadCrumbIdToText = exports.withBreadCrumb = exports.urlDecode = exports.urlEncode = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ChevronRight = require('@material-ui/icons/ChevronRight');

var _ChevronRight2 = _interopRequireDefault(_ChevronRight);

var _reactRouterDom = require('react-router-dom');

var _base64Url = require('base64-url');

var _base64Url2 = _interopRequireDefault(_base64Url);

var _core = require('@material-ui/core');

var _reactRouterBreadcrumbsHoc = require('react-router-breadcrumbs-hoc');

var _reactRouterBreadcrumbsHoc2 = _interopRequireDefault(_reactRouterBreadcrumbsHoc);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
    return {
        breadCrumb: {
            display: 'block',
            background: '#fff',
            borderBottom: '#e9edf0 1px solid',
            marginTop: -24,
            marginLeft: -24,
            marginRight: -24,
            padding: '0.5em 24px',
            marginBottom: 24
        },
        item: {
            padding: 0,
            minWidth: 0
        }
    };
};

var urlEncode = exports.urlEncode = function urlEncode(data) {
    if ((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) === 'object') data = JSON.stringify(data);
    return _base64Url2.default.encode(data);
};

var urlDecode = exports.urlDecode = function urlDecode(data) {
    return _base64Url2.default.decode(data);
};

var withBreadCrumb = function withBreadCrumb() {
    var routes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return function (Elem) {
        return (0, _core.withStyles)(styles, { name: 'BreadCrumb' })((0, _reactRouterBreadcrumbsHoc2.default)(routes)(function (_ref) {
            var classes = _ref.classes,
                _ref$breadcrumbs = _ref.breadcrumbs,
                breadcrumbs = _ref$breadcrumbs === undefined ? [] : _ref$breadcrumbs,
                props = (0, _objectWithoutProperties3.default)(_ref, ['classes', 'breadcrumbs']);
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: classes.breadCrumb },
                    breadcrumbs.map(function (breadcrumb, index) {
                        return _react2.default.createElement(
                            _core.Button,
                            {
                                component: _reactRouterDom.Link,
                                className: classes.item,
                                key: breadcrumb.key,
                                to: breadcrumb.props.match.url,
                                color: 'primary'
                            },
                            _react2.default.createElement(
                                'span',
                                null,
                                breadcrumb
                            ),
                            index < breadcrumbs.length - 1 && _react2.default.createElement(_ChevronRight2.default, null)
                        );
                    })
                ),
                _react2.default.createElement(Elem, props)
            );
        }));
    };
};

exports.withBreadCrumb = withBreadCrumb;
var breadCrumbIdToText = exports.breadCrumbIdToText = function breadCrumbIdToText(resource, displayField) {
    // UserBreadcrumb.jsx
    var PureBreadcrumb = function PureBreadcrumb(_ref2) {
        var breadcrumbLabel = _ref2.breadcrumbLabel;
        return _react2.default.createElement(
            'span',
            null,
            breadcrumbLabel
        );
    };

    // find the user in the store with the `id` from the route
    var mapStateToProps = function mapStateToProps(state, props) {
        if ('create' == props.match.params.id) return { breadcrumbLabel: 'Create' };
        var items = state.admin.resources[resource];

        if (items) {
            var data = items.data;

            if (data) {
                var record = data[props.match.params.id];
                if (record) {
                    return { breadcrumbLabel: record[displayField] };
                }
            }
        }
        return { breadcrumbLabel: 'Update' };
    };

    return (0, _reactRedux.connect)(mapStateToProps)(PureBreadcrumb);
};