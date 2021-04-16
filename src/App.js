import AppContainer from './AppContainer';
import Header from './Header';

import { makeStyles } from '@material-ui/core/styles';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faIdCard, faCogs } from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faIdCard, faCogs);

const useStyles = makeStyles((theme) => ({
  appContainer: {
    margin: '50px 50px 50px 100px',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Header></Header>
      <div className={classes.appContainer}>
        <AppContainer></AppContainer>
      </div>
    </div>
  );
}

export default App;
