import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    input: {
        border: 'none',
        '&:-webkit-autofill': {
            WebkitBoxShadow: 'inset -10px -10px 10px rgba(255, 255, 255, 0.7), inset 10px 10px 10px rgba(174, 174, 192, 0.2)',
            borderRadius: '13px',
        },
        '&:autofill': {
            WebkitBoxShadow: 'inset -10px -10px 10px rgba(255, 255, 255, 0.7), inset 10px 10px 10px rgba(174, 174, 192, 0.2)',
            borderRadius: '13px',
        }
    },
    inputFile: {
        display: 'none',
    },
    centerGridItem: {
        textAlign: 'center'
    },
    dialog: {
        backgroundColor: '#f0f0f3'
    },
    select: {
        backgroundColor: '#f0f0f3'
    },
    gridMarginBottom: {
        marginBottom: '10px'
    },
    popper: {
        backgroundColor: '#f0f0f3'
    },
    paddingPaper: {
        padding: '3em',
    },
    uploadButton: {
        borderRadius: '5px',
        marginTop: '15px',
    },
    fileViewer: {
        height: '700px',
        width: '700px',
    },
    adminTables: {
        height: '500px',
        width: '100%',
        marginBottom: '60px'
    },
    adminLoginPaper: {
        marginTop: theme.spacing(15),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    adminLoginTypography: {
        display: "flex",
        justifyContent: "center",
    },
    conversationsPanel: {
        boxShadow: "-10px -10px 10px rgba(255, 255, 255, 0.7), 10px 10px 10px rgba(174, 174, 192, 0.2)",
        borderRadius: "20px",
        height: "600px",
        maxHeight: "600px",
        minWidth: "80px"
    },
    ownMessage: {
        backgroundColor: "#ff5039",
        color: "#f0f0f3",
        borderRadius: "20px",
        padding: "7px 20px"
    },
    otherMessage: {
        boxShadow: "-10px -10px 10px rgba(255, 255, 255, 0.7), 10px 10px 10px rgba(174, 174, 192, 0.2)",
        backgroundColor: "#f0f0f3",
        borderRadius: "20px",
        padding: "7px 20px"
    }
}));

export default useStyles;