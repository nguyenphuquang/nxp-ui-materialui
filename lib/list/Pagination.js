'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pagination = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Toolbar = require('@material-ui/core/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _styles = require('@material-ui/core/styles');

var _ChevronLeft = require('@material-ui/icons/ChevronLeft');

var _ChevronLeft2 = _interopRequireDefault(_ChevronLeft);

var _ChevronRight = require('@material-ui/icons/ChevronRight');

var _ChevronRight2 = _interopRequireDefault(_ChevronRight);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _raCore = require('ra-core');

var _PaginationLimit = require('./PaginationLimit');

var _PaginationLimit2 = _interopRequireDefault(_PaginationLimit);

var _Responsive = require('../layout/Responsive');

var _Responsive2 = _interopRequireDefault(_Responsive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    pageInfo: {
        padding: '1.2em'
    },
    desktopToolbar: {
        justifyContent: 'flex-end'
    },
    mobileToolbar: {
        justifyContent: 'center'
    },
    hellip: { padding: '1.2em' }
};

var Pagination = exports.Pagination = function (_Component) {
    (0, _inherits3.default)(Pagination, _Component);

    function Pagination() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Pagination);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call.apply(_ref, [this].concat(args))), _this), _this.prevPage = function (event) {
            event.stopPropagation();
            if (_this.props.page === 1) {
                throw new Error(_this.props.translate('ra.navigation.page_out_from_begin'));
            }
            _this.props.setPage(_this.props.page - 1);
        }, _this.nextPage = function (event) {
            event.stopPropagation();
            if (_this.props.page > _this.getNbPages()) {
                throw new Error(_this.props.translate('ra.navigation.page_out_from_end'));
            }
            _this.props.setPage(_this.props.page + 1);
        }, _this.gotoPage = function (event) {
            event.stopPropagation();
            var page = event.currentTarget.dataset.page;
            if (page < 1 || page > _this.getNbPages()) {
                throw new Error(_this.props.translate('ra.navigation.page_out_of_boundaries', {
                    page: page
                }));
            }
            _this.props.setPage(page);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Pagination, [{
        key: 'range',
        value: function range() {
            var input = [];
            var _props = this.props,
                page = _props.page,
                perPage = _props.perPage,
                total = _props.total;

            if (isNaN(page)) return input;
            var nbPages = Math.ceil(total / perPage) || 1;

            // display page links around the current page
            if (page > 2) {
                input.push('1');
            }
            if (page === 4) {
                input.push('2');
            }
            if (page > 4) {
                input.push('.');
            }
            if (page > 1) {
                input.push(page - 1);
            }
            input.push(page);
            if (page < nbPages) {
                input.push(page + 1);
            }
            if (page === nbPages - 3) {
                input.push(nbPages - 1);
            }
            if (page < nbPages - 3) {
                input.push('.');
            }
            if (page < nbPages - 1) {
                input.push(nbPages);
            }

            return input;
        }
    }, {
        key: 'getNbPages',
        value: function getNbPages() {
            return Math.ceil(this.props.total / this.props.perPage) || 1;
        }
    }, {
        key: 'renderPageNums',
        value: function renderPageNums() {
            var _this2 = this;

            var _props$classes = this.props.classes,
                classes = _props$classes === undefined ? {} : _props$classes;


            return this.range().map(function (pageNum, index) {
                return pageNum === '.' ? _react2.default.createElement(
                    'span',
                    { key: 'hyphen_' + index, className: classes.hellip },
                    '\u2026'
                ) : _react2.default.createElement(
                    _Button2.default,
                    {
                        className: (0, _classnames2.default)('page-number', classes.button),
                        color: pageNum === _this2.props.page ? 'default' : 'primary',
                        key: pageNum,
                        'data-page': pageNum,
                        onClick: _this2.gotoPage
                    },
                    pageNum
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                _props2$classes = _props2.classes,
                classes = _props2$classes === undefined ? {} : _props2$classes,
                className = _props2.className,
                ids = _props2.ids,
                isLoading = _props2.isLoading,
                page = _props2.page,
                perPage = _props2.perPage,
                setPage = _props2.setPage,
                setPerPage = _props2.setPerPage,
                total = _props2.total,
                translate = _props2.translate,
                rest = (0, _objectWithoutProperties3.default)(_props2, ['classes', 'className', 'ids', 'isLoading', 'page', 'perPage', 'setPage', 'setPerPage', 'total', 'translate']);


            if (!isLoading && (total === 0 || ids && !ids.length)) {
                return _react2.default.createElement(_PaginationLimit2.default, { total: total, page: page, ids: ids });
            }

            var offsetEnd = Math.min(page * perPage, total);
            var offsetBegin = Math.min((page - 1) * perPage + 1, offsetEnd);
            var nbPages = this.getNbPages();

            return _react2.default.createElement(_Responsive2.default, {
                small: _react2.default.createElement(
                    _Toolbar2.default,
                    (0, _extends3.default)({
                        className: className,
                        classes: { root: classes.mobileToolbar }
                    }, (0, _raCore.sanitizeListRestProps)(rest)),
                    page > 1 && _react2.default.createElement(
                        _IconButton2.default,
                        { color: 'primary', onClick: this.prevPage },
                        _react2.default.createElement(_ChevronLeft2.default, null)
                    ),
                    _react2.default.createElement(
                        _Typography2.default,
                        {
                            variant: 'body1',
                            className: 'displayed-records'
                        },
                        translate('ra.navigation.page_range_info', {
                            offsetBegin: offsetBegin,
                            offsetEnd: offsetEnd,
                            total: total
                        })
                    ),
                    page !== nbPages && _react2.default.createElement(
                        _IconButton2.default,
                        { color: 'primary', onClick: this.nextPage },
                        _react2.default.createElement(_ChevronRight2.default, null)
                    )
                ),
                medium: _react2.default.createElement(
                    _Toolbar2.default,
                    (0, _extends3.default)({
                        className: (0, _classnames2.default)(className, classes.desktopToolbar)
                    }, (0, _raCore.sanitizeListRestProps)(rest)),
                    _react2.default.createElement(
                        _Typography2.default,
                        {
                            variant: 'body1',
                            className: 'displayed-records'
                        },
                        translate('ra.navigation.page_range_info', {
                            offsetBegin: offsetBegin,
                            offsetEnd: offsetEnd,
                            total: total
                        })
                    ),
                    nbPages > 1 && [page > 1 && _react2.default.createElement(
                        _Button2.default,
                        {
                            color: 'primary',
                            key: 'prev',
                            onClick: this.prevPage,
                            className: 'previous-page'
                        },
                        _react2.default.createElement(_ChevronLeft2.default, null),
                        translate('ra.navigation.prev')
                    ), this.renderPageNums(), page !== nbPages && _react2.default.createElement(
                        _Button2.default,
                        {
                            color: 'primary',
                            key: 'next',
                            onClick: this.nextPage,
                            className: 'next-page'
                        },
                        translate('ra.navigation.next'),
                        _react2.default.createElement(_ChevronRight2.default, null)
                    )]
                )
            });
        }
    }]);
    return Pagination;
}(_react.Component);

Pagination.propTypes = {
    classes: _propTypes2.default.object,
    className: _propTypes2.default.string,
    ids: _propTypes2.default.array,
    isLoading: _propTypes2.default.bool,
    page: _propTypes2.default.number,
    perPage: _propTypes2.default.number,
    setPage: _propTypes2.default.func,
    setPerPage: _propTypes2.default.func,
    translate: _propTypes2.default.func.isRequired,
    total: _propTypes2.default.number
};

var enhance = (0, _compose2.default)(_pure2.default, _raCore.translate, (0, _styles.withStyles)(styles));

exports.default = enhance(Pagination);