import { createTheme } from "@mui/material"

const lightTheme = createTheme({

    typography: {

        fontFamily: 'NoirPro, Arial',
        fontSize: 14,

        // h1: {
        //     fontSize: '1.5rem',
        //     lineHeight: 1.2,
        //     fontWeight: 400,
        //     color: '#37373C',
        //     margin: '0 0 .5rem'
        // },
        // h2: {
        //     fontSize: '1.4rem',
        //     lineHeight: 1.2,
        //     fontWeight: 400,
        //     color: '#37373C',
        //     margin: '0 0 .5rem'
        // },
        // h3: {
        //     fontSize: '1.25rem',
        //     lineHeight: 1.2,
        //     fontWeight: 400,
        //     color: '#37373C',
        //     margin: '0 0 .5rem'
        // },
        // h4: {
        //     fontSize: '1.1rem',
        //     lineHeight: 1.2,
        //     fontWeight: 400,
        //     color: '#37373C',
        //     margin: '0 0 .5rem'
        // },
        // h5: {
        //     fontSize: '1rem',
        //     lineHeight: 1.2,
        //     fontWeight: 400,
        //     color: '#37373C',
        //     margin: '0 0 .5rem'
        // },
        // h6: {
        //     fontSize: '.875rem',
        //     lineHeight: 1.2,
        //     fontWeight: 400,
        //     color: '#37373C',
        //     margin: '0 0 .5rem'
        // },
        body1: {
            fontSize: '.875rem',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {

                "::-webkit-scrollbar": {
                    width: "6px",
                    height: "6px",
                    padding: "10px"
                },

                "::-webkit-scrollbar-track": {
                    background: "transparent",
                },

                "::-webkit-scrollbar-thumb": {
                    background: "#8696a0",
                    borderRadius: "50px",
                    border: "1px solid transparent",
                    backgroundClip: "padding-box",
                },

                "::-webkit-scrollbar-thumb:hover": {
                    background: "#5d6469",
                    border: 0
                },
                "*": {
                    fontFamily: '"NoirPro", Arial',
                    fontWeight: 300
                },
                "strong": {
                    fontWeight: 500
                },
            },
        },
        /* MuiIconButton: {
            styleOverrides: {
                root: {
                    color: 'inherit',
                    background: '#FFFFFF',
                    '&:hover': {
                        background: '#FFFFFF',
                    }
                }
            },
        }, */
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&.mainListItems': {
                        borderLeft: "5px solid transparent",
                        padding: "2px 13px",
                        margin: "2px 0px",
                        marginRight: "5px",
                        borderRadius: "8px 50px 50px 8px",
                        "&:hover": {
                            borderLeft: "5px solid #454581b4"
                        },
                        '&.Mui-selected': {
                            borderLeft: "5px solid #454581",
                            backgroundColor: "#45458114"
                        }
                    }
                }
            }
        },
      

        MuiTextField: {
            defaultProps: {
                size: 'small', // Define o tamanho small como padrão
            },
        },
        MuiFormControl: {
            defaultProps: {
                size: 'small', // Define o tamanho small como padrão
            },
        },
        MuiPaper: {
            defaultProps: {
                //variant:"outlined",
                elevation: 0
            },
            styleOverrides: {
                rounded: {
                    borderRadius: 12,
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    minHeight: 'auto',
                },
            },
        },


        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: 24
                },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    padding: '18px 24px'
                },
                title: {
                    //fontSize: '1.1rem',
                    marginBottom: 0
                },
                subheader: {
                    margin: '4px 0 0'
                },
                action: {
                    margin: 0
                }
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: '8px 24px'
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                sizeSmall: {
                    height: 22,
                    fontSize: 12,
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 400,
                    letterSpacing: 1
                },
                sizeSmall: {
                    fontSize: '12px'
                }
            }
        },
        MuiPopover: {
            styleOverrides: {
                paper: {
                    borderRadius: 8
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    fontSize: 18
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    padding: '16px 24px'
                },

            }
        },
        MuiAvatarGroup: {
            styleOverrides: {
                avatar: {
                    backgroundColor: '#757575',
                    fontSize: 16
                }
            }
        }
    },
    palette: {
        primary: {
            main: '#21499b',
            light: '#f0f0f0',
            dark: '#21499b',
            contrastText: '#FFF'
        },
        secondary: {
            main: '#ff5151',
            light: '#ff867e',
            dark: '#c50b28',
            contrastText: '#FFF'
        },
        error: {
            main: '#E73145',
            light: '#FF6A70',
            dark: '#AD001E',
            contrastText: '#FFF'
        },
        warning: {
            main: '#F39711',
            light: '#FFC84C',
            dark: '#BB6900',
            contrastText: '#FFF'
        },
        info: {
            main: '#2EB5C9',
            light: '#a7accc',
            dark: '#008598',
            contrastText: '#FFF'
        },
        success: {
            main: '#3BD2A2',
            light: '#78FFD3',
            dark: '#00A073',
            contrastText: '#FFF'
        },
        text: {
            primary: '#242C30',
            secondary: '#21499b',
            disabled: '#A2B2C3',
        },
        // shadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
        // divider: '#475259',

        background: {
            paper: "#ffffff",
            default: "#f2f4f5",
        },
        action: {
            active: '#475259',
            hover: '#F5F7FA',
        },
    },

})

export default lightTheme


// background: {          
//             //   paper: '#f2f4f5',
//               default: '#f2f4f5',
//           },