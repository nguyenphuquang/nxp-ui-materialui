export default {
    palette: {
        secondary: {
            light: '#5f5fc4',
            main: '#317eeb',
            dark: '#001064',
            contrastText: '#fff',
        },
        primary: {
            dark: '#208690',
            light: '#42d3e1',
            main: '#2ea4af',
            contrastText: '#fff',
        },
    },
    typography: {
        fontSize: 13,
        fontFamily: 'Open Sans, Roboto',
        fontWeight: 300,
    },
    overrides: {
        MuiDrawer: {
            docked: {
                backgroundColor: '#35414f',
            },
            paperAnchorDockedLeft: {
                '@media (min-width: 960px)': {
                    marginTop: '9em !important',
                },
            },
        },
        MuiAppBar: {
            colorSecondary: {
                backgroundColor: '#2a3642',
            },
        },
        MenuItemLink: {
            root: {
                color: '#7fa4ac',
            },
            active: {
                background: '#3e4b5c center right no-repeat url(/left-arrow.png)',
                color: '#edf8f4',
                borderLeft: '#36c5d3 3px solid',
            },
        },
        Layout: {
            appFrame: {
                minHeight: '100vh',
                backgroundColor: '#eef1f6',
            },
            content: {
                '@media (min-width: 0px)': {
                    paddingLeft: 24,
                },
            },
        },
    },
};
