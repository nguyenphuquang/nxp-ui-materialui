'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _onlyUpdateForKeys = require('recompose/onlyUpdateForKeys');

var _onlyUpdateForKeys2 = _interopRequireDefault(_onlyUpdateForKeys);

var _CardActions = require('@material-ui/core/CardActions');

var _CardActions2 = _interopRequireDefault(_CardActions);

var _raCore = require('ra-core');

var _button = require('../button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Actions = function Actions(_ref) {
    var bulkActions = _ref.bulkActions,
        currentSort = _ref.currentSort,
        className = _ref.className,
        resource = _ref.resource,
        filters = _ref.filters,
        displayedFilters = _ref.displayedFilters,
        exporter = _ref.exporter,
        filterValues = _ref.filterValues,
        hasCreate = _ref.hasCreate,
        basePath = _ref.basePath,
        selectedIds = _ref.selectedIds,
        onUnselectItems = _ref.onUnselectItems,
        showFilter = _ref.showFilter,
        rest = (0, _objectWithoutProperties3.default)(_ref, ['bulkActions', 'currentSort', 'className', 'resource', 'filters', 'displayedFilters', 'exporter', 'filterValues', 'hasCreate', 'basePath', 'selectedIds', 'onUnselectItems', 'showFilter']);
    return _react2.default.createElement(
        _CardActions2.default,
        (0, _extends3.default)({
            className: className,
            disableActionSpacing: true
        }, (0, _raCore.sanitizeListRestProps)(rest)),
        bulkActions && (0, _react.cloneElement)(bulkActions, {
            basePath: basePath,
            filterValues: filterValues,
            resource: resource,
            selectedIds: selectedIds,
            onUnselectItems: onUnselectItems
        }),
        filters && (0, _react.cloneElement)(filters, {
            resource: resource,
            showFilter: showFilter,
            displayedFilters: displayedFilters,
            filterValues: filterValues,
            context: 'button'
        }),
        hasCreate && _react2.default.createElement(_button.CreateButton, { basePath: basePath }),
        _react2.default.createElement(_button.ExportButton, {
            resource: resource,
            sort: currentSort,
            filter: filterValues,
            exporter: exporter
        }),
        _react2.default.createElement(_button.RefreshButton, null)
    );
};

Actions.propTypes = {
    bulkActions: _propTypes2.default.node,
    basePath: _propTypes2.default.string,
    className: _propTypes2.default.string,
    currentSort: _propTypes2.default.object,
    displayedFilters: _propTypes2.default.object,
    exporter: _propTypes2.default.func,
    filters: _propTypes2.default.element,
    filterValues: _propTypes2.default.object,
    hasCreate: _propTypes2.default.bool,
    resource: _propTypes2.default.string,
    onUnselectItems: _propTypes2.default.func.isRequired,
    selectedIds: _propTypes2.default.arrayOf(_propTypes2.default.any),
    showFilter: _propTypes2.default.func
};

Actions.defaultProps = {
    selectedIds: []
};

exports.default = (0, _onlyUpdateForKeys2.default)(['resource', 'filters', 'displayedFilters', 'filterValues', 'selectedIds'])(Actions);
module.exports = exports['default'];