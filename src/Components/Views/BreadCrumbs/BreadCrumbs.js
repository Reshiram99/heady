import React from "react"
import { Breadcrumbs, Link, Typography, Box, Hidden } from "@material-ui/core"
import { Home } from "@material-ui/icons"

function AppBreadCrumbs() {
    return <Hidden smDown>
        <Box  margin={"20px 0px"}>
        <Breadcrumbs separator="›"  aria-label="breadcrumb">
            <Link color="inherit" href="/">
                <Home />
            </Link>
            <Link color="inherit" >
                Catalog
             </Link>
             <Link color="inherit" >
                Sofas
             </Link>
            <Typography color="textPrimary">Beige Nudie Sofa</Typography>
        </Breadcrumbs>
    </Box>
    </Hidden>
}

export default AppBreadCrumbs;