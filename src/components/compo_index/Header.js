import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { logout, getUserName } from '../../model/mcookie';
import axios from '_axios@0.24.0@axios';
import { withRouter } from 'react-router';
const lightColor = 'rgba(255, 255, 255, 0.7)';

function Header(props) {


    const { onDrawerToggle, menu, chmenu, hvalue } = props;
    const [value, setValue] = React.useState(0);
    const baseUrl = window.config.baseUrl;
    const userName = getUserName();


    //向父组件传参
    const handleButtonClick = (event, index) => {
        setValue(index);
        props.getHeaderValue(index);

    };

    //注销
    const handleLogOut = (event) => {

        const _this = this;
        let Url = baseUrl + '/User/Logout'

        axios.post(Url, {
        })
            .then(function (response) {
                console.log(response.data.Result);
            })
            .catch(function (error) {
                console.log(error);
                alert("登录失败")
            })

        logout(props);

    }



    return (
        <React.Fragment>
            <AppBar color="primary" position="sticky" elevation={0}>
                <Toolbar>
                    <Grid container spacing={1} alignItems="center">
                        <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={onDrawerToggle}
                                edge="start"
                                style={{outline:'none'}}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs />

                        <Grid item>
                            <IconButton color="inherit" sx={{ p: 0.5 }} style={{outline:'none'}}>
                                <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Link
                                href="/"
                                variant="body2"
                                sx={{
                                    textDecoration: 'none',
                                    color: lightColor,
                                    '&:hover': {
                                        color: 'common.white',
                                    },
                                }}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                User {userName}
                            </Link>
                        </Grid>

                        <Grid item>
                            <Button
                                sx={{ borderColor: lightColor }}
                                variant="outlined"
                                color="inherit"
                                size="small"
                                onClick={(event) => { handleLogOut(event) }}
                                style={{outline:'none'}}
                            >
                                Sign Out
                            </Button>

                            
                        </Grid>

                    </Grid>
                </Toolbar>
            </AppBar>
            <AppBar
                component="div"
                color="primary"
                position="static"
                elevation={0}
                sx={{ zIndex: 0 }}
            >

                <Toolbar>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item xs>
                            {menu.map(({ id: menuID }) => (
                                <Typography color="inherit" variant="h5" component="h1">
                                    {menuID}
                                </Typography>
                            ))}

                        </Grid>

                        <Grid item>
                            <Tooltip title="Help">
                                <IconButton color="inherit">
                                    <HelpIcon />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
                {/* 为了使每次切换navigator目录时能把header切换回首个选项，所以需要读取父组件的值 */}
                <Tabs value={hvalue === 0 ? hvalue : value} textColor="inherit"
                    onChange={(event, newvalue) => handleButtonClick(event, newvalue)}
                    sx={{ outline: 0 }} >
                    {chmenu.map(({ id, active }, index) => (
                        <Tab label={id} selected={active} value={index} style={{outline:'none'}}/>
                    ))}
                </Tabs>
            </AppBar>
        </React.Fragment>
    );
}

Header.propTypes = {
    onDrawerToggle: PropTypes.func.isRequired,
};

export default withRouter(Header);
