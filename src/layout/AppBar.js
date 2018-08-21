import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import compose from 'recompose/compose';
import { toggleSidebar as toggleSidebarAction } from 'ra-core';

import LoadingIndicator from './LoadingIndicator';

const styles = theme => ({
    rootOpened: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
    },
    rootClosed: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        zIndex: 1300,
    },
    toolbar: {
        paddingRight: 24,
    },
    menuButton: {
        marginLeft: '0.5em',
        marginRight: '0.5em',
    },
    menuButtonIconClosed: {
        transition: theme.transitions.create(['transform'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        transform: 'rotate(0deg)',
    },
    menuButtonIconOpen: {
        transition: theme.transitions.create(['transform'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        transform: 'rotate(180deg)',
    },
    titleOpened: {
        display: 'block',
        overflow: 'hidden',
        width: 180,
        transition: theme.transitions.create(['width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    titleClosed: {
        display: 'block',
        overflow: 'hidden',
        width: 0,
        transition: theme.transitions.create(['width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    headerContent: {
        flex: 1,
    },
    loadingIndicator: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 1200,
        marginBottom: 14,
        marginTop: 14,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    logout: {
        color: theme.palette.secondary.contrastText,
    },
});

const AppBar = ({
    classes,
    className,
    logout,
    open,
    title,
    toggleSidebar,
    ...rest
}) => (
    <div className={classNames(open ? classes.rootOpened : classes.rootClosed)}>
        <MuiAppBar
            className={classNames(classes.appBar, className)}
            color="secondary"
            position="relative"
            elevation={0}
            {...rest}
        >
            <Toolbar disableGutters variant="dense" className={classes.toolbar}>
                <Typography
                    variant="title"
                    color="inherit"
                    className={open ? classes.titleOpened : classes.titleClosed}
                >
                    {typeof title === 'string' ? title : React.cloneElement(title)}
                </Typography>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleSidebar}
                    className={classNames(classes.menuButton)}
                >
                    <MenuIcon
                        classes={{
                            root: open
                                ? classes.menuButtonIconOpen
                                : classes.menuButtonIconClosed,
                        }}
                    />
                </IconButton>
                <div className={classes.headerContent}>&nbsp;</div>
                {logout &&
                    cloneElement(logout, {
                        className: classes.logout,
                    })}
            </Toolbar>
            <LoadingIndicator className={classes.loadingIndicator} />
        </MuiAppBar>
    </div>
);

AppBar.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    logout: PropTypes.element,
    open: PropTypes.bool,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        .isRequired,
    toggleSidebar: PropTypes.func.isRequired,
};

const enhance = compose(
    connect(
        state => ({
            locale: state.i18n.locale, // force redraw on locale change
        }),
        {
            toggleSidebar: toggleSidebarAction,
        }
    ),
    withStyles(styles, { name: 'AppBar' })
);

export default enhance(AppBar);
