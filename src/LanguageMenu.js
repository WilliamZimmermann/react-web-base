import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import TranslateIcon from '@material-ui/icons/Translate';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
    languageName: {
        marginLeft: 5,
        fontSize: 14,
    },
}));


function LanguageMenu() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    
  return (
    <div className="Language-menu">
        <IconButton
            aria-label="system language"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
        >
            <TranslateIcon />
            <span className={classes.languageName}>English</span>
        </IconButton>
        <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={open}
            onClose={handleCloseMenu}
            >
            <MenuItem onClick={handleCloseMenu}>English</MenuItem>
            <MenuItem onClick={handleCloseMenu}>French</MenuItem>
        </Menu>
    </div>
  );
}

export default LanguageMenu;
