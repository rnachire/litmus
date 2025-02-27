import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  horizontalLine: {
    background: theme.palette.border.main,
  },
  root: {
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
    padding: theme.spacing(0, 2),
    margin: '0 auto',
    width: '98%',
    height: '100%',
    flexDirection: 'column',
    [theme.breakpoints.up('lg')]: {
      width: '99%',
    },
  },

  // Inner Container
  innerContainer: {
    margin: theme.spacing(4, 'auto'),
    width: '95%', // Inner width of the container
  },

  suHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  headerText: {
    fontWeight: 700,
    fontSize: '1.2rem',
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.4rem',
    },
  },
  description: {
    marginTop: theme.spacing(3.25),
    marginBottom: theme.spacing(7.5),
    fontSize: '1rem',
  },
  bfinIcon: {
    width: '7rem',
    height: '6.31rem',
  },
  summaryWrapper: {
    padding: theme.spacing(2, 0),
  },
  itemWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(2, 0),
  },
  verticalAlign: {
    display: 'table-cell',
    verticalAlign: 'middle',
    fontSize: '1rem',
  },
  left: {
    width: '20%',
    display: 'table-cell',
    verticalAlign: 'middle',
    color: theme.palette.highlight,
    fontSize: '1rem',
  },
  leftFlex: {
    display: 'flex',
    width: '20%',
    verticalAlign: 'middle',
    color: theme.palette.highlight,
    fontSize: '1rem',
  },
  right: {
    width: '75%',
    display: 'flex',
  },
  rightColumn: {
    width: '75%',
  },
  iconBtn: {
    padding: theme.spacing(0, 1),
  },
  sumText: {
    width: '100%',
    margin: theme.spacing(2, 0),
    fontWeight: 700,
    fontSize: '1.2rem',
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.4rem',
    },
  },
  subject: {
    alignContent: 'center',
    color: theme.palette.highlight,
    fontSize: '1rem',
    paddingTop: theme.spacing(1.25),
    verticalAlign: 'middle',
  },
  subjectDesc: {
    fontSize: '0.75rem',
  },
  editIcon: {
    color: theme.palette.text.primary,
    height: '0.8rem',
  },
  spacingHorizontal: {
    margin: theme.spacing(0, 1),
  },
  errorText: {
    color: theme.palette.error.main,
    fontWeight: 700,
    fontSize: '1rem',
  },
  progress: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 1,
  },
  closeBtn: {
    color: theme.palette.secondary.contrastText,
    marginTop: theme.spacing(-6),
    marginRight: theme.spacing(-2.5),
  },
  verifyYAMLButton: {
    width: '40%',
  },

  // Modal
  modal: {
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(10),
    },
    padding: theme.spacing(3),
  },
  heading: {
    fontSize: '2rem',
    textalign: 'center',
    marginTop: theme.spacing(3),
    color: theme.palette.text.primary,
  },
  headWorkflow: {
    fontsize: '2rem',
    textalign: 'center',
    color: theme.palette.text.primary,
    marginTop: theme.spacing(3),
  },
  button: {
    color: theme.palette.text.primary,
    textAlign: 'center',
    marginTop: theme.spacing(5),
  },
  closeButton: {
    borderColor: theme.palette.border.main,
  },
  successful: {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    margin: theme.spacing(2, 0),
  },
  bold: {
    fontWeight: 700,
  },
}));
export default useStyles;
