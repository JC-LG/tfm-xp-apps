import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import './navegacion.css'
import {useNavigate} from "react-router-dom";


const Navegacion = () => {

    const [mostrar, actualizarMostar] = useState(false)

    const navegar = useNavigate();

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon onClick={() => {
                        actualizarMostar(true)
                    }} />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    UNIR - TFM
                </Typography>
            </Toolbar>
            {mostrar && (
                <Drawer
                    classes={{paper: 'menu'}}
                    open={mostrar}
                    onClose={() => {
                        actualizarMostar(false)
                    }}
                >
                    {['Gastos', 'Balance'].map((texto, index) => (
                        <ListItem key={texto} disablePadding>
                            <ListItemButton onClick={() => {
                                navegar(`/${texto.toLowerCase()}`);
                            }}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <AttachMoneyIcon /> : <BarChartIcon />}
                                </ListItemIcon>
                                <ListItemText primary={texto} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </Drawer>
            )}
        </AppBar>
    );
};

export default Navegacion