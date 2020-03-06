import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import "./description.scss"

function Description(props) {
    return <Grid container className={"responsiveDirection"}>
        <Grid item md={3} className={"z-index"}>
            <Typography variant={"h5"} className={"slogan"}>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
            </Typography>
            <div>
                <Typography variant={"caption"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
            </div>
            <div>
                <Typography variant={"caption"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
            </div>
        </Grid>
        <Grid item md={9}>
            <img  style={{"width":"100%"}} src="/assets/Product.png" alt={"product"} />
        </Grid>
        <Grid item md={1} className={"z-index"}>
            <Typography variant={"h5"} className={"slogan longer"}>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
            </Typography>
        </Grid>
        <Grid item md={11}>
            <img  style={{"width":"100%"}} src="/assets/Product.png" alt={"product"} />
        </Grid>
    </Grid>
}

export default Description