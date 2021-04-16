import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'grid',
    flexGrow: 1,
    padding: theme.spacing(3),
    width: '100%',
    backgroundColor: '0000'
  },
}));

function AppContainer() {
  const classes = useStyles();

  return (
    <div className="App-container">
      <div className={classes.content}>
        App Container
        App Container
        App Container
        App Container
        App Container
        App Container
        App Container
        App Container
        App Container
        App Container
        App Container
      </div>
    </div>
  );
}

export default AppContainer;
