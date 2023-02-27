import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {useDispatch, useSelector} from "react-redux";
import {loggedOut, setLang} from "../redux/authSlice";
import {getLoggedIn, getLang} from "../redux/selectors";
import {useNavigate} from "react-router-dom";
import {ReactComponent as UkrFlag} from '../img/ua.svg';
import {ReactComponent as EngFlag} from '../img/gb.svg';
import {useTranslation} from "react-i18next";

const pages = ['Main', 'News'];
const settings = ['Profile', 'Logout'];

function ResponsiveAppBar() {
    const dispatch = useDispatch();
    const isLogin = useSelector(getLoggedIn);
    const navigate = useNavigate();
    const {t, i18n} = useTranslation();
    const lang = useSelector(getLang);
    const [, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const setUkrLang = ()=>{
        if (lang === 'en'){
        dispatch(setLang({lang: 'ua'}))
        i18n.changeLanguage('ua')}
    }
    const setEngLang=()=>{
        if (lang === 'ua'){
        dispatch(setLang({lang: 'en'}))
        i18n.changeLanguage('en')}
    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = (e) => {
        setAnchorElNav(null);
        if (e.target.innerText === 'MAIN' || e.target.innerText === 'ГОЛОВНА') {
            navigate('/')
        }
        if (e.target.innerText === "NEWS" || e.target.innerText === "НОВИНИ") {
            navigate("/news")
        }
    };
    const handleCloseUserMenu = (e) => {
        setAnchorElUser(null);
        if (e.target.innerText === "Logout" || e.target.innerText ==="Вийти") {
            dispatch(loggedOut());
            navigate('/')
        }
        if (e.target.innerText === "Profile" || e.target.innerText === "Профіль") {
            navigate('/profile')
        }
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        AlterEgo
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                    </Box>

                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {t(page)}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{flexGrow: 0, paddingRight:'40px', display: {xs: 'none', md: 'flex'}}} >
                        <UkrFlag style={{width: "20px", cursor: 'pointer', marginRight:'15px'}} onClick={() => setUkrLang()}/>
                        <EngFlag style={{width: "20px", cursor: 'pointer'}} onClick={() => setEngLang()}/>
                    </Box>
                    <Box sx={{flexGrow: 0}}>
                        {isLogin ? <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu}  sx={{p: 0 }}>
                                    <Avatar>A</Avatar>
                                </IconButton>
                            </Tooltip> :
                            <Button variant="contained" color="secondary"
                                    onClick={() => navigate('/login')}>{t('Log In')}</Button>
                        }
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}

                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{t(setting)}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
