import React, { useState, useEffect } from 'react'
import { Paper, Typography, Grid, Divider } from '@material-ui/core'
import "./Details.scss"
import { Star, StarBorder, Done } from '@material-ui/icons'


function Details(props) {
    const colors = ["black", "#e5e5e5", "grey"]
    const [selectedColor, setSelectedColor] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if(count<0){
            setCount(0)
        }
    }, [count]);

    return <Paper className={"pagePaper"}>
        <Grid container spacing={3}>
            <Grid item xs={12}  md={6}>
                <img width={"100%"} className={"imageOnBox"} src="/assets/Product.png" alt={"product"} />
            </Grid>
            <Grid item xs={12} md={6}>
                <div className={"descriptionBox"}>
                    <Typography variant={"h6"}>Nudie Extendable Sofa for 3 Person</Typography>
                    <div className={"star"}>
                        {[1,2,3,4].map((item)=><Star key={item} style={{color:"rgb(251, 213, 74)"}}/>)}<StarBorder style={{color:"rgb(251, 213, 74)"}}/>
                    </div>
                    <div className={"topBottomSpaced"}>
                        <Typography variant={"h4"}><span className={"discount"}>$300</span>$200</Typography>
                    </div>
                    <Divider variant={"middle"} />
                    <div className={"topBottomSpaced"}>
                        <ul>
                            <li><strong>ASSEMBLY</strong>:<span>Carpenter Assembly</span></li>
                            <li><strong>WARRANTY</strong>:<span>12 Months</span></li>
                        </ul>
                    </div>
                    <Divider variant={"middle"} />
                    <img width={"100%"} className={"topBottomSpaced"} src={"/assets/pdtpageDesc.png"} alt={"desc"} />
                    <div>
                        <strong>Color:</strong>
                        <div className={"colors"}>
                            {colors.map((clr, index) => (
                                <div key={index}  onClick={() => setSelectedColor(index)} style={{ backgroundColor: clr }}>
                                    {index === selectedColor ? <Done /> : <></>}
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className={"topBottomSpaced clearFix"}>
                        <div className={"addRemoveItem"}>
                            <span onClick={()=>{setCount(count-1)}}>-</span>
                            <span className={"count"}>{count}</span>
                            <span onClick={()=>{setCount(count+1)}}>+</span>
                            <div>ADD TO CART</div>
                        </div>

                    </div>
                </div>

            </Grid>
        </Grid>
    </Paper>
}

export default Details