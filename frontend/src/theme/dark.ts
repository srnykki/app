import {createTheme } from "@mui/material"
const darkTheme = createTheme({
    
  
        // MuiPaper: {
        //   styleOverrides: {
        //     root: {
              
        //       backgroundColor: '#101214',
             
        //     },
        //   },
        // },

        
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
                              backgroundColor: "#45458114",
                          },
                      }
                  },
              }
          },
          MuiOutlinedInput: {
              styleOverrides: {
                  notchedOutline: {
                      borderColor: "#8696A01F",
                  },
                  root: {
                      '& .MuiSvgIcon-root': {
                          color: "#A7B2B9",
                      },
                  },
              },
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
          // MuiCard: {
          //     styleOverrides: {
          //         rounded:{
          //             borderRadius: 12,
          //             boxShadow:`0 0.5rem 1.25rem ${alpha('#7352C7', .175)}`
          //         },
          //     },
          // },

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
                    outlined:{
                        color:"#6876d9",
                        borderColor:"#6876d9"
                    },
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




          // deixar
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
                  }
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
              main: '#3647bf',
              light: '#454581',
              dark: '#161e54',
              contrastText: '#FFF'
          },
          secondary: {
              main: '#E44A77',
              light: '#FF7EA6',
              dark: '#DF295E',
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
              light: '#26324D',
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
              primary: '#C5CDE6',
              secondary: '#C5CDE6',
              disabled: '#A2B2C3',
          },
          // divider: alpha('#FFFFFF', 0.1),
          background: {          
              paper: '#26324D',
              default: '#19243B',
          },
          action: {
              active: '#C5CDE6',
              hover: '#323b4f',
              disabled: '#8595A6',
              disabledBackground: '#8595A6'
          },  
           // deixar
      },

       
      
    
})

export default darkTheme