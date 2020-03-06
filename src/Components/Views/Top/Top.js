import React, { useState } from "react"
import './Top.scss'
import { Paper, Grid, Hidden } from "@material-ui/core"
import { Search, FavoriteBorder, ShoppingCartOutlined } from '@material-ui/icons';

function Top() {
    const MenuItems = ["Bedroom", "Living Room", "Office", "Kitchen", "Bathroom"]
    const MenuIcons = [<Search />, <FavoriteBorder />, <ShoppingCartOutlined />]
    const [activeMenu,setActiveMenu]=useState(0)
    return <Paper>
        <Hidden xsDown implementation={"css"}>
            <Grid container justify={"space-between"}>
                <Grid item md={3}>
                    <img src={"/assets/Logo.png"} alt={"LOGO"} />
                </Grid>
                <Grid item md={7} className={"text-right"}>
                    <ul className={"list"}>
                        {MenuItems.map((item,index) => (
                            <li key={item} onClick={()=>setActiveMenu(index)} className={index===activeMenu?"active":""}><div >{item}</div></li>
                        ))}
                        {MenuIcons.map((item, index) => (
                            <li key={index} className={"icon"}><div>{item}</div></li>
                        ))}

                    </ul>
                </Grid>
            </Grid>
        </Hidden>
        <Hidden smUp implementation={"css"}>
            <Grid container justify={"space-between"}>
                <Grid item sm={6}>
                    <img width="70%" src={"/assets/Logo.png"} alt={"LOGO"} />
                </Grid>
                <Grid item sm={6} className={"text-right"}>
                    <ul className={"list responsive"}>
                        {MenuIcons.map((item, index) => (
                            <li key={index} className={"icon responsive"}><div>{item}</div></li>
                        ))}
                    </ul>
                </Grid>
            </Grid>
        </Hidden>
    </Paper>
}

export default Top