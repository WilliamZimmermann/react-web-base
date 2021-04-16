import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import UserMenu from './UserMenu';
import LanguageMenu from './LanguageMenu';
import SearchBar from './SearchBar';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import applications from './fake-data/applications.json';

const drawerWidth = 240;
const headerBarHeight = 49;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], 
        {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
      drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9) + 1,
        },
      },
      toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(0, 1),
        minHeight: headerBarHeight,
      },
      toolbarLeft: {
        alignSelf: 'flex-start',
        display: 'flex',
        alignItems: 'center',
      },
      toolbarRight: {
          alignSelf: 'flex-end',
          display: 'flex'
      },
      logo: {
        display: 'flex',
        height: headerBarHeight,
        marginLeft: 20,
        alignItems: 'center'
      },
      menuButton: {
        marginLeft: 0,
      },
      topMenu: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
      },
      sideBarMenuIcon: {
        marginRight: 33,
        fontSize: 20,
        color: 'darkblue',
      },
}));

function Header(props) {
  const classes = useStyles();
  
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(props.searchValue);
  const [appsList, setAppList] = useState(applications.apps);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function handleSearchBarChange(evt){
    setSearchValue(evt.target.value);
    setAppList(applications.apps.filter(app => app.appName.includes(evt.target.value)));
  }

  return (
    <header className="Header">
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
                })}
            >
                <Toolbar className={classes.toolbar}>
                    <div className={classes.toolbarLeft}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap className={classes.logo}>
                            TICKET MASTER
                        </Typography>
                    </div>
                    <div className={classes.toolbarRight}>
                        <LanguageMenu></LanguageMenu>
                        <UserMenu></UserMenu>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
                })}
                classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
                }}
            >
                <div className={classes.topMenu}>
                    <SearchBar onSearchValueChange={handleSearchBarChange} searchValue={props.searchValue}></SearchBar>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                {appsList.map((content, index) => (
                    <ListItem button key={content.appName}>
                      <div className={classes.sideBarMenuIcon}><FontAwesomeIcon icon={content.iconClass} /></div>
                      <ListItemText primary={content.appName} />
                    </ListItem>
                ))}
                </List>
            </Drawer>
        </div>
    </header>
  );
}

export default Header;
