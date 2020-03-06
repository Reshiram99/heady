import React from 'react';
import { Grid, Typography, Avatar } from '@material-ui/core';
import { Star, StarBorder } from '@material-ui/icons';

function Reviews(props) {
    return <Grid container spacing={6}>
        <Grid item xs={12}>
            <Typography variant={"h5"}>
                23 Reviews for Nudie Extendable Sofa for 3 Person
            </Typography>
            <div className={"star"}>
                {[1, 2, 3, 4].map((item) => <Star key={item} style={{ color: "rgb(251, 213, 74)" }} />)}<StarBorder style={{ color: "rgb(251, 213, 74)" }} />
            </div>
        </Grid>
        <Grid item md={3}>
             <Avatar>JD</Avatar> 
             <Typography variant={"h6"}>JONATHAN DOE</Typography>
             <Typography variant={"caption"}>FEB 03 2020</Typography>
        </Grid>
        <Grid item md={9}>
            <Typography variant={"h6"}>GOOD </Typography>
            <div className={"star"}>
                {[1, 2, 3, 4].map((item) => <Star key={item} style={{ color: "rgb(251, 213, 74)" }} />)}<StarBorder style={{ color: "rgb(251, 213, 74)" }} />
            </div>
            <Typography variant={"caption"}>
                <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</i>
            </Typography>
        </Grid>
        <Grid item md={3}>
             <Avatar>JD</Avatar> 
             <Typography variant={"h6"}>JONATHAN DOE</Typography>
             <Typography variant={"caption"}>FEB 03 2020</Typography>
        </Grid>
        <Grid item md={9}>
            <Typography variant={"h6"}>GOOD </Typography>
            <div className={"star"}>
                {[1, 2, 3, 4].map((item) => <Star key={item} style={{ color: "rgb(251, 213, 74)" }} />)}<StarBorder style={{ color: "rgb(251, 213, 74)" }} />
            </div>
            <Typography variant={"caption"}>
                <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</i>
            </Typography>
        </Grid>
        <Grid item md={3}>
             <Avatar>JD</Avatar> 
             <Typography variant={"h6"}>JONATHAN DOE</Typography>
             <Typography variant={"caption"}>FEB 03 2020</Typography>
        </Grid>
        <Grid item md={9}>
            <Typography variant={"h6"}>GOOD </Typography>
            <div className={"star"}>
                {[1, 2, 3, 4].map((item) => <Star key={item} style={{ color: "rgb(251, 213, 74)" }} />)}<StarBorder style={{ color: "rgb(251, 213, 74)" }} />
            </div>
            <Typography variant={"caption"}>
                <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</i>
            </Typography>
        </Grid>
    </Grid>
}


export default Reviews;

