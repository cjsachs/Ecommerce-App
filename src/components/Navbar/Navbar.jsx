import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { CallMissedSharp, ShoppingCart } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';

import logo from '../../assets/workout.jpg';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    
    return (
        <div>
            <AppBar position="fixed" className={CallMissedSharp.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="workout logo" height="25px" className={classes.image} />
                        ASKEWFIT
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar