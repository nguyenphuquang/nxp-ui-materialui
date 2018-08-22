import React from 'react';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';
import base64url from 'base64-url';
import { withStyles, Button } from '@material-ui/core';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import { connect } from 'react-redux';

const styles = theme => ({
    breadCrumb: {
        display: 'block',
        background: '#fff',
        borderBottom: '#e9edf0 1px solid',
        marginTop: -24,
        marginLeft: -24,
        marginRight: -24,
        padding: '0.5em 24px',
        marginBottom: 24,
    },
    item: {
        padding: 0,
        minWidth: 0,
    },
});

export const urlEncode = function(data) {
    if (typeof data === 'object') data = JSON.stringify(data);
    return base64url.encode(data);
};

export const urlDecode = function(data) {
    return base64url.decode(data);
};

export const withBreadCrumb = (routes = []) => Elem =>
    withStyles(styles, { name: 'BreadCrumb' })(
        withBreadcrumbs(routes)(({ classes, breadcrumbs = [], ...props }) => (
            <div>
                <div className={classes.breadCrumb}>
                    {breadcrumbs.map((breadcrumb, index) => (
                        <Button 
                            component={Link}
                            className={classes.item}
                            key={breadcrumb.key}
                            to={breadcrumb.props.match.url}
                            color="primary"
                        >
                            <span>{breadcrumb}</span>
                            {index < breadcrumbs.length - 1 && <ChevronRight />}
                        </Button>
                    ))}
                </div>
                <Elem {...props} />
            </div>
        ))
    );

export const breadCrumbIdToText = (resource, displayField) => {
    // UserBreadcrumb.jsx
    let PureBreadcrumb = ({ breadcrumbLabel }) => <span>{breadcrumbLabel}</span>;

    // find the user in the store with the `id` from the route
    let mapStateToProps = (state, props) => {
        if ('create' == props.match.params.id) return {breadcrumbLabel: 'Create'};
        let {admin: {resources: {[resource]: items}}} = state;
        if (items) {
            let {data} = items;
            if (data) {
                let record = data[props.match.params.id];
                if (record) {
                    return {breadcrumbLabel: record[displayField]};
                }
            }
        }
        return {breadcrumbLabel: 'Update'};
    };

    return connect(mapStateToProps)(PureBreadcrumb);
}