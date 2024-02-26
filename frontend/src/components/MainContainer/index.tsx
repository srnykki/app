import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(({
    mainContainer: {
        flex: 1,
        // padding: theme.spacing(2),
        height: `calc(100% - 48px)`,
        padding: 0,
        //height: '100vh',
    },

    contentWrapper: {
        height: "100%",
        overflowY: "hidden",
        display: "flex",
        flexDirection: "column",
    },
}));

const MainContainer = ({ children }: any) => {
    const classes = useStyles()
    return (
        <Container className={classes.mainContainer} maxWidth={false}>
            <div className={classes.contentWrapper}>{children}</div>
        </Container>
    );
};

export default MainContainer;
