'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListView = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = require('@material-ui/core/Card');

var _Card2 = _interopRequireDefault(_Card);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('@material-ui/core/styles');

var _Header = require('../layout/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Title = require('../layout/Title');

var _Title2 = _interopRequireDefault(_Title);

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

var _BulkActions = require('./BulkActions');

var _BulkActions2 = _interopRequireDefault(_BulkActions);

var _ListActions = require('./ListActions');

var _ListActions2 = _interopRequireDefault(_ListActions);

var _raCore = require('ra-core');

var _defaultTheme = require('../defaultTheme');

var _defaultTheme2 = _interopRequireDefault(_defaultTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
var styles = {
    root: {},
    actions: {
        zIndex: 2,
        display: 'flex',
        justifyContent: 'flex-end',
        flexWrap: 'wrap'
    },
    header: {},
    noResults: { padding: 20 }
};

var sanitizeRestProps = function sanitizeRestProps(_ref) {
    var actions = _ref.actions,
        basePath = _ref.basePath,
        bulkActions = _ref.bulkActions,
        changeListParams = _ref.changeListParams,
        children = _ref.children,
        classes = _ref.classes,
        className = _ref.className,
        crudGetList = _ref.crudGetList,
        currentSort = _ref.currentSort,
        data = _ref.data,
        defaultTitle = _ref.defaultTitle,
        displayedFilters = _ref.displayedFilters,
        exporter = _ref.exporter,
        filter = _ref.filter,
        filterDefaultValues = _ref.filterDefaultValues,
        filters = _ref.filters,
        filterValues = _ref.filterValues,
        hasCreate = _ref.hasCreate,
        hasEdit = _ref.hasEdit,
        hasList = _ref.hasList,
        hasShow = _ref.hasShow,
        hideFilter = _ref.hideFilter,
        history = _ref.history,
        ids = _ref.ids,
        isLoading = _ref.isLoading,
        locale = _ref.locale,
        location = _ref.location,
        match = _ref.match,
        onSelect = _ref.onSelect,
        onToggleItem = _ref.onToggleItem,
        onUnselectItems = _ref.onUnselectItems,
        options = _ref.options,
        page = _ref.page,
        pagination = _ref.pagination,
        params = _ref.params,
        permissions = _ref.permissions,
        perPage = _ref.perPage,
        push = _ref.push,
        query = _ref.query,
        refresh = _ref.refresh,
        resource = _ref.resource,
        selectedIds = _ref.selectedIds,
        setFilters = _ref.setFilters,
        setPage = _ref.setPage,
        setPerPage = _ref.setPerPage,
        setSelectedIds = _ref.setSelectedIds,
        setSort = _ref.setSort,
        showFilter = _ref.showFilter,
        sort = _ref.sort,
        theme = _ref.theme,
        title = _ref.title,
        toggleItem = _ref.toggleItem,
        total = _ref.total,
        translate = _ref.translate,
        version = _ref.version,
        rest = (0, _objectWithoutProperties3.default)(_ref, ['actions', 'basePath', 'bulkActions', 'changeListParams', 'children', 'classes', 'className', 'crudGetList', 'currentSort', 'data', 'defaultTitle', 'displayedFilters', 'exporter', 'filter', 'filterDefaultValues', 'filters', 'filterValues', 'hasCreate', 'hasEdit', 'hasList', 'hasShow', 'hideFilter', 'history', 'ids', 'isLoading', 'locale', 'location', 'match', 'onSelect', 'onToggleItem', 'onUnselectItems', 'options', 'page', 'pagination', 'params', 'permissions', 'perPage', 'push', 'query', 'refresh', 'resource', 'selectedIds', 'setFilters', 'setPage', 'setPerPage', 'setSelectedIds', 'setSort', 'showFilter', 'sort', 'theme', 'title', 'toggleItem', 'total', 'translate', 'version']);
    return rest;
};

var ListView = function ListView(_ref2) {
    var _ref2$actions = _ref2.actions,
        actions = _ref2$actions === undefined ? _react2.default.createElement(_ListActions2.default, null) : _ref2$actions,
        filters = _ref2.filters,
        _ref2$bulkActions = _ref2.bulkActions,
        bulkActions = _ref2$bulkActions === undefined ? _react2.default.createElement(_BulkActions2.default, null) : _ref2$bulkActions,
        _ref2$pagination = _ref2.pagination,
        pagination = _ref2$pagination === undefined ? _react2.default.createElement(_Pagination2.default, null) : _ref2$pagination,
        children = _ref2.children,
        className = _ref2.className,
        _ref2$classes = _ref2.classes,
        classes = _ref2$classes === undefined ? {} : _ref2$classes,
        exporter = _ref2.exporter,
        title = _ref2.title,
        rest = (0, _objectWithoutProperties3.default)(_ref2, ['actions', 'filters', 'bulkActions', 'pagination', 'children', 'className', 'classes', 'exporter', 'title']);
    var defaultTitle = rest.defaultTitle,
        version = rest.version;

    var controllerProps = (0, _raCore.getListControllerProps)(rest);
    var titleElement = _react2.default.createElement(_Title2.default, { title: title, defaultTitle: defaultTitle });
    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
            className: (0, _classnames2.default)('list-page', classes.root, className)
        }, sanitizeRestProps(rest)),
        _react2.default.createElement(
            _Card2.default,
            null,
            _react2.default.createElement(_Header2.default, {
                className: classes.header,
                title: titleElement,
                actions: _react2.default.cloneElement(actions, (0, _extends3.default)({}, controllerProps, {
                    className: classes.actions,
                    bulkActions: bulkActions,
                    exporter: exporter,
                    filters: filters
                }))
            }),
            filters && _react2.default.cloneElement(filters, (0, _extends3.default)({}, controllerProps, {
                context: 'form'
            })),
            _react2.default.createElement(
                'div',
                { key: version },
                children && _react2.default.cloneElement(children, (0, _extends3.default)({}, controllerProps, {
                    hasBulkActions: !!bulkActions
                })),
                pagination && _react2.default.cloneElement(pagination, controllerProps)
            )
        )
    );
};

exports.ListView = ListView;
ListView.propTypes = {
    actions: _propTypes2.default.element,
    basePath: _propTypes2.default.string,
    bulkActions: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.element]),
    children: _propTypes2.default.element,
    className: _propTypes2.default.string,
    classes: _propTypes2.default.object,
    currentSort: _propTypes2.default.shape({
        field: _propTypes2.default.string,
        order: _propTypes2.default.string
    }),
    data: _propTypes2.default.object,
    defaultTitle: _propTypes2.default.string,
    displayedFilters: _propTypes2.default.object,
    exporter: _propTypes2.default.func,
    filterDefaultValues: _propTypes2.default.object,
    filters: _propTypes2.default.element,
    filterValues: _propTypes2.default.object,
    hasCreate: _propTypes2.default.bool,
    hideFilter: _propTypes2.default.func,
    ids: _propTypes2.default.array,
    isLoading: _propTypes2.default.bool,
    onSelect: _propTypes2.default.func,
    onToggleItem: _propTypes2.default.func,
    onUnselectItems: _propTypes2.default.func,
    page: _propTypes2.default.number,
    pagination: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.element]),
    perPage: _propTypes2.default.number,
    refresh: _propTypes2.default.func,
    resource: _propTypes2.default.string,
    selectedIds: _propTypes2.default.array,
    setFilters: _propTypes2.default.func,
    setPage: _propTypes2.default.func,
    setPerPage: _propTypes2.default.func,
    setSort: _propTypes2.default.func,
    showFilter: _propTypes2.default.func,
    title: _propTypes2.default.any,
    total: _propTypes2.default.number,
    translate: _propTypes2.default.func,
    version: _propTypes2.default.number
};

/**
 * List page component
 *
 * The <List> component renders the list layout (title, buttons, filters, pagination),
 * and fetches the list of records from the REST API.
 * It then delegates the rendering of the list of records to its child component.
 * Usually, it's a <Datagrid>, responsible for displaying a table with one row for each post.
 *
 * In Redux terms, <List> is a connected component, and <Datagrid> is a dumb component.
 *
 * Props:
 *   - title
 *   - perPage
 *   - sort
 *   - filter (the permanent filter to apply to the query)
 *   - actions
 *   - filters (a React Element used to display the filter form)
 *   - pagination
 *
 * @example
 *     const PostFilter = (props) => (
 *         <Filter {...props}>
 *             <TextInput label="Search" source="q" alwaysOn />
 *             <TextInput label="Title" source="title" />
 *         </Filter>
 *     );
 *     export const PostList = (props) => (
 *         <List {...props}
 *             title="List of posts"
 *             sort={{ field: 'published_at' }}
 *             filter={{ is_published: true }}
 *             filters={<PostFilter />}
 *         >
 *             <Datagrid>
 *                 <TextField source="id" />
 *                 <TextField source="title" />
 *                 <EditButton />
 *             </Datagrid>
 *         </List>
 *     );
 */
var List = function List(props) {
    return _react2.default.createElement(
        _raCore.ListController,
        props,
        function (controllerProps) {
            return _react2.default.createElement(ListView, (0, _extends3.default)({}, props, controllerProps));
        }
    );
};

List.propTypes = {
    // the props you can change
    actions: _propTypes2.default.element,
    bulkActions: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.bool]),
    children: _propTypes2.default.node,
    classes: _propTypes2.default.object,
    className: _propTypes2.default.string,
    filter: _propTypes2.default.object,
    filterDefaultValues: _propTypes2.default.object,
    filters: _propTypes2.default.element,
    pagination: _propTypes2.default.element,
    perPage: _propTypes2.default.number.isRequired,
    sort: _propTypes2.default.shape({
        field: _propTypes2.default.string,
        order: _propTypes2.default.string
    }),
    title: _propTypes2.default.any,
    // the props managed by react-admin
    authProvider: _propTypes2.default.func,
    hasCreate: _propTypes2.default.bool.isRequired,
    hasEdit: _propTypes2.default.bool.isRequired,
    hasList: _propTypes2.default.bool.isRequired,
    hasShow: _propTypes2.default.bool.isRequired,
    location: _propTypes2.default.object.isRequired,
    match: _propTypes2.default.object.isRequired,
    path: _propTypes2.default.string,
    resource: _propTypes2.default.string.isRequired,
    theme: _propTypes2.default.object.isRequired
};

List.defaultProps = {
    filter: {},
    perPage: 10,
    theme: _defaultTheme2.default
};

exports.default = (0, _styles.withStyles)(styles)(List);