import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import PermDataSettingIcon from '@mui/icons-material/PermDataSetting';
import SettingsIcon from '@mui/icons-material/Settings';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from '_axios@0.24.0@axios';
import { onLogin,getToken, logout } from '../../model/mcookie';
import { createHashHistory } from "history";
import AutorenewIcon from '@mui/icons-material/Autorenew';

const categories = [
    {
        id: '配置',
        children: [
            {
                id: '系统',
                icon: <PermDataSettingIcon />,
            },
            { id: '网络', icon: <PublicIcon /> },
            { id: '媒体', icon: <PermMediaOutlinedIcon /> },

        ],
    },
    {
        id: '其他',
        children: [
            { id: '设置', icon: <SettingsIcon /> },
        ],
    },
];

const item = {
    py: '2px',
    px: 3,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover, &:focus': {
        bgcolor: 'rgba(255, 255, 255, 0.08)',
    },
};

const itemCategory = {
    boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
    py: 1.5,
    px: 3,
};
const history = createHashHistory();

export default function Navigator(props) {

    const { ...other } = props;
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        console.log(index);
        setSelectedIndex(index);
        props.getselectedIndexValue(index);

    };

    const onReboot=()=>{

        const _this = this;
        let token = getToken();

        axios.defaults.withCredentials = true;
        axios({
            method: 'post',
            url: 'http://192.168.1.215:8080/System/Reboot',
            headers: {
                'Token': token
            }
          }).then(function (response) {
            
            console.log(response.data); 
            if (response.data.Result === 1){
                alert(response.data.ErrMsg)
                history.push(`/login`);
            }else{
                alert("系统重启成功，请重新登录。");
                history.push(`/login`);
                logout(props);
            }
        })
        .catch(function (error) {
            console.log(error); 
            
        })

    }


    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
                    CAMERA
                </ListItem>
                <ListItem sx={{ ...item, ...itemCategory }}>
                    <ListItemIcon>
                        <VisibilityIcon />
                    </ListItemIcon>
                    <ListItemText>预览</ListItemText>
                </ListItem>
                {categories.map(({ id, children }, index) => (
                    <Box key={id} sx={{ bgcolor: '#101F33' }}>
                        <ListItem sx={{ py: 2, px: 3 }}>
                            <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>

                        </ListItem>
                        {children.map(({ id: childId, icon }, cindex) => (
                            <ListItem disablePadding >
                                <ListItemButton sx={item} selected={selectedIndex === index * 3 + cindex}
                                    onClick={(event) => {
                                        console.log(index * 3 + cindex)
                                        handleListItemClick(event, index * 3 + cindex)
                                    }}
                                >
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText>{childId}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}

                        <Divider sx={{ mt: 2 }} />
                    </Box>
                ))}
                <ListItem sx={{ ...item, ...itemCategory }} onClick={onReboot}>
                    <ListItemIcon>
                        <AutorenewIcon />
                    </ListItemIcon>
                    <ListItemText>重启系统</ListItemText>
                </ListItem>
            </List>
        </Drawer>
    );
}
