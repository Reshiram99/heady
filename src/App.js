import React, { useState, useEffect } from 'react';
import './App.scss';
import { CssBaseline, Container, Grid, Hidden } from '@material-ui/core/';
import Top from './Components/Views/Top/Top';
import AppBreadCrumbs from './Components/Views/BreadCrumbs/BreadCrumbs';
import LeftPane from './Components/Views/LeftPane/LeftPane';
import Details from './Components/Views/Details/Details';
import Description from './Components/Views/Description/description';
import Reviews from './Components/Views/Reviews/reviews';
import { Element, scroller } from 'react-scroll'
import Footer from './Components/Views/Footer/footer';

function App() {
  const [activeTab, setActiveTab] = useState(0)
  function scrollToWithContainer(container) {


    scroller.scrollTo(container, {
      duration: 1000,
      delay: 0,
      smooth: 'easeInOutQuart',
      containerId: 'scroll-container'
    })
  }
  useEffect(() => {
    if (activeTab === 0) {
      scrollToWithContainer("Details")
    }
    if (activeTab === 1) {
      scrollToWithContainer("Description")
    }
    if (activeTab === 2) {
      scrollToWithContainer("Reviews")
    }
    if (activeTab === 3) {
      scrollToWithContainer("Footer")
    }
  }, [activeTab])
  return (
    <>
      <CssBaseline>
        <Container maxWidth={"xl"} >
          <Top></Top>
          <AppBreadCrumbs />
          <Hidden mdDown >
            <Grid container spacing={3} justify={"space-between"}>
              <Grid item md={3}  style={{ "height": "calc( 100vh - 170px )" }} className={"autoMargin"}>
                <LeftPane activeTab={activeTab} setActiveTab={setActiveTab} />
              </Grid>
              <Grid item md={8}  >
                <Element id={"scroll-container"} name={"scroll-container"} style={{ "height": "calc( 100vh - 170px )", overflowX:"hidden",overflowY: "scroll" }}>
                  <Grid container spacing={3}>
                    <Grid item md={12}>
                      <div><Element name="Details"><Details /></Element></div>
                    </Grid>
                    <Grid item md={12}>
                      <div><Element name="Description"><Description /></Element></div>
                    </Grid>
                    <Grid item md={12}>
                      <div><Element name="Reviews"><Reviews /></Element></div>
                    </Grid>
                    <Grid item md={12}>
                      <div><Element name="Footer"><Footer /></Element></div>
                    </Grid>
                  </Grid>
                </Element>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid container spacing={3} justify={"space-between"}>
              <Grid item sm={12} xs={12}>
                <LeftPane activeTab={activeTab} setActiveTab={setActiveTab} />
              </Grid>
              <Grid item sm={12} xs={12} >
                <Element id={"scroll-container"} name={"scroll-container"} style={{ "height": "calc( 100vh - 120px )", overflowX:"hidden",overflowY: "scroll" }}>
                  <Grid container spacing={5}>
                    <Grid item xs={12} >
                      <div><Element name="Details"><Details /></Element></div>
                    </Grid>
                    <Grid item xs={12}>
                      <div><Element name="Description"><Description /></Element></div>
                    </Grid>
                    <Grid item xs={12}>
                      <div><Element name="Reviews"><Reviews /></Element></div>
                    </Grid>
                    <Grid item xs={12}>
                      <div><Element name="Footer"><Footer /></Element></div>
                    </Grid>
                  </Grid>
                </Element>
              </Grid>
            </Grid>
          </Hidden>
        </Container>

      </CssBaseline>

    </>
  );
}

export default App;
