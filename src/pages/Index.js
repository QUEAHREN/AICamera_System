import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Navigator from '../components/compo_index/Navigator';
import Header from '../components/compo_index/Header';
import LANConfig from '../components/compo_config/LANConfig';
import DeviceInfo from '../components/compo_config/DeviceInfo';
import OLState from '../components/compo_config/OLState';
import FirmwareUpload from '../components/compo_config/FirmwareUpload';
import Reboot from '../components/compo_config/Reboot';
import PortInfo from '../components/compo_config/PortInfo';
import GB28181Config from '../components/compo_config/GB28181Config';
import { checkToken } from '../model/mcookie';
import { useRef, useEffect } from 'react';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.xidian.edu.cn/">
                VIPSL
            </Link>{' '}
            {new Date().getFullYear()}.
        </Typography>
    );
}

let theme = createTheme({
    palette: {
        primary: {
            light: '#63ccff',
            main: '#009be5',
            dark: '#006db3',
        },
    },
    typography: {
        h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
        },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiTab: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
});

theme = {
    ...theme,
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#081627',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
                contained: {
                    boxShadow: 'none',
                    '&:active': {
                        boxShadow: 'none',
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    marginLeft: theme.spacing(1),
                },
                indicator: {
                    height: 3,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                    backgroundColor: theme.palette.common.white,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    margin: '0 16px',
                    minWidth: 0,
                    padding: 0,
                    [theme.breakpoints.up('md')]: {
                        padding: 0,
                        minWidth: 0,
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(1),
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    borderRadius: 4,
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgb(255,255,255,0.15)',
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        color: '#4fc3f7',
                    },
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    fontSize: 14,
                    fontWeight: theme.typography.fontWeightMedium,
                },
            },
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: 'inherit',
                    minWidth: 'auto',
                    marginRight: theme.spacing(2),
                    '& svg': {
                        fontSize: 20,
                    },
                },
            },
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    width: 32,
                    height: 32,
                },
            },
        },
    },
};

const drawerWidth = 256;

export default function Index(props) {


    const initmenu = [
        {
            id: '系统',
        }
    ]

    const initchmenu = [
        {
            id: '当前状态信息',
            active: true,
        },
        { id: '设备相关信息' },
        { id: '上传固件' },
        { id: '重启及其他操作' }

    ]

    const [menu, setMenu] = React.useState(initmenu);
    const [chmenu, setChmenu] = React.useState(initchmenu);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

    const firstUpdate = useRef(true);

    function useDidUpdateEffect(fn, inputs) {
        const didMountRef = useRef(false);
        useEffect(() => {
            if (didMountRef.current) fn();
            else didMountRef.current = true;
        }, inputs);
    }


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    // Navigator中的菜单值
    const [sIValue, setsIValue] = React.useState(0);
    // Header中的菜单值
    const [hvalue, setHvalue] = React.useState(0);

    useDidUpdateEffect(() => {
        //checkToken(props);
    }, [hvalue, sIValue]);


    function showContent() {
        if (sIValue === 0) {
            if (hvalue === 0) return (<OLState />);
            if (hvalue === 1) return (<DeviceInfo />);
            if (hvalue === 2) return (<FirmwareUpload />);
            if (hvalue === 3) return (<Reboot />);
        }
        if (sIValue === 1) {
            if (hvalue === 0) return (<LANConfig />);
            if (hvalue === 1) return (<PortInfo />);
            if (hvalue === 2) return (<GB28181Config />);

        }
    }

    const getHValue = (val) => {
        setHvalue(val);
    }

    const getChildrensIValue = (val) => {
        setsIValue(val);

        if (val === 0) {
            var newmenu = [
                {
                    id: '系统',
                }
            ]
            var newchmenu = [
                {
                    id: '当前状态信息',
                    active: true,
                },
                { id: '设备相关信息' },
                { id: '上传固件' },
                { id: '重启及其他操作' }
            ]
        }
        if (val === 1) {
            var newmenu = [
                {
                    id: '网络',
                }
            ]
            var newchmenu = [
                {
                    id: 'LAN 设置',
                    active: true,
                },
                { id: '网络端口' },
                { id: 'GB28181 配置信息' },
            ]
        }
        if (val === 2) {
            var newmenu = [
                {
                    id: '媒体',
                }
            ]
            var newchmenu = [
                {
                    id: '拍摄图片',
                    active: true,
                },
                { id: 'option x' },
                { id: 'option y' },
            ]
        }
        if (val === 3) {
            var newmenu = [
                {
                    id: '设置',
                }
            ]
            var newchmenu = [
                {
                    id: 'x',
                    active: true,
                },
                { id: 'option x' },
                { id: 'option y' },
            ]
        }
        setMenu(newmenu);
        setChmenu(newchmenu);
        // 每次切换navigator目录时要把Header值复原
        setHvalue(0);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', minHeight: '100vh' }}>
                <CssBaseline />
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                >
                    {isSmUp ? null : (
                        <Navigator
                            PaperProps={{ style: { width: drawerWidth } }}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            getselectedIndexValue={getChildrensIValue}
                        />
                    )}

                    <Navigator
                        PaperProps={{ style: { width: drawerWidth } }}
                        sx={{ display: { sm: 'block', xs: 'none' } }}
                        getselectedIndexValue={getChildrensIValue}
                    />
                </Box>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Header onDrawerToggle={handleDrawerToggle} menu={menu} chmenu={chmenu} hvalue={hvalue}
                        getHeaderValue={getHValue} />
                    <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
                        {showContent()}
                    </Box>
                    <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
                        <Copyright />
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
