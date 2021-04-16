import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TranslateIcon from '@material-ui/icons/Translate';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  userName: {
      marginLeft: 10,
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <header className="app-header">
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        YOUR SITE TITLE
                    </Typography>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Language">
                        <TranslateIcon />
                    </IconButton>                    
                    <IconButton className={classes.menuButton} color="inherit" aria-label="User">
                        <AccountCircleIcon />
                        <span className={classes.userName}>User Name</span>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    </header>
  );
}

export default Header;
