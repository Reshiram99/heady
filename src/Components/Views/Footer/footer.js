import React from 'react'
import { Container } from '@material-ui/core'
import "./footer.scss"

function Footer(props){
    return <Container maxWidth={"xl"} disableGutters>
        <div className={"flexDiv"}>
            <div>
                &copy; Vignesh
            </div>
        </div>
    </Container>
}

export default Footer