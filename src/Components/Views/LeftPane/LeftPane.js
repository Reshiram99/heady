import React from 'react'
import { Grid, Hidden } from '@material-ui/core';
import "./LeftPane.scss"

function LeftPane({ activeTab, setActiveTab, ...props }) {
    const tabs = ["Details", "Description", "Reviews", "Custom Tab"]

    return <div className={"clearFix"}>
        <Hidden mdDown>
            <Grid container spacing={3} className={" fullHeight"}>
                <Grid item xs={12} className={"autoMargin"}>
                    <ul className="list tabbed fullWidth text-right">
                        {tabs.map((item, index) => (
                            <li className={"topBottomSpaced " + (activeTab === index ? "active" : "")} key={item} onClick={() => setActiveTab(index)}>
                                <div>{item}</div>
                            </li>
                        ))}
                    </ul>

                </Grid>
            </Grid>

        </Hidden>
        <Hidden mdDown><div className={"activeNotifier"}>{tabs[activeTab]}</div></Hidden>
        <Hidden mdUp>
            <div className={"maxWidth"}>
            <Grid container spacing={1} >
                {tabs.map((item, index) => (
                    <Grid item xs={3} className={"itemResponsive " + (activeTab === index ? "active" : "")} key={item} onClick={() => setActiveTab(index)}>
                        {item}
                    </Grid>
                ))}
            </Grid>
            </div>
        </Hidden>
    </div>
}

export default LeftPane;