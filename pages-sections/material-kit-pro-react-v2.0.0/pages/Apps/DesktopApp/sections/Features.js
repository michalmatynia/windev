/*
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/material-kit-pro-react-v2.0.0/MKBox'
import MKButton from 'components/ui/material-kit-pro-react-v2.0.0/MKButton'
import MKTypography from 'components/ui/material-kit-pro-react-v2.0.0/MKTypography'

// Material Kit 2 PRO React examples
import DefaultInfoCard from 'components/blocks/material-kit-pro-react-v2.0.0/Cards/InfoCards/DefaultInfoCard'

// Images
import atlassian from 'public/img/material-kit-pro-react-v2.0.0/logos/small-logos/logo-atlassian.svg'
import asana from 'public/img/material-kit-pro-react-v2.0.0/logos/small-logos/logo-asana.svg'
import shopify from 'public/img/material-kit-pro-react-v2.0.0/logos/small-logos/logo-shopify.svg'
import invision from 'public/img/material-kit-pro-react-v2.0.0/logos/small-logos/logo-invision.svg'
import slack from 'public/img/material-kit-pro-react-v2.0.0/logos/small-logos/logo-slack.svg'
import webdev from 'public/img/material-kit-pro-react-v2.0.0/logos/small-logos/logo-webdev.svg'

function Features() {
  return (
    <MKBox component="section" py={{ xs: 6, lg: 12 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={6}>
            <MKTypography variant="h2" mb={1}>
              Get your own app
            </MKTypography>
            <MKTypography variant="body2" mb={2}>
              The Arctic Ocean freezes every winter and much of the sea-ice then
              thaws every summer, and that process will continue whatever.
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} textAlign="right">
            <MKButton variant="gradient" color="warning">
              Contact Us
            </MKButton>
          </Grid>
        </Grid>
        <Grid container spacing={3} mt={6}>
          <Grid item xs={12} sm={6} lg={4} mb={3}>
            <DefaultInfoCard
              icon={
                <MKBox
                  component="img"
                  src={atlassian.src}
                  alt="atlassian"
                  width="12%"
                />
              }
              title="Payment vendor"
              description="Check out our proven methods, guides, and exercises that help make work better, and people happier."
              small
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} mb={3}>
            <DefaultInfoCard
              icon={
                <MKBox
                  component="img"
                  src={asana.src}
                  alt="asana"
                  width="12%"
                />
              }
              title="Organize your team"
              description="Check out our proven methods, guides, and exercises that help make work better, and people happier."
              small
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} mb={3}>
            <DefaultInfoCard
              icon={
                <MKBox
                  component="img"
                  src={shopify.src}
                  alt="shopify"
                  width="12%"
                />
              }
              title="E-commerce"
              description="Check out our proven methods, guides, and exercises that help make work better, and people happier."
              small
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} mb={3}>
            <DefaultInfoCard
              icon={
                <MKBox
                  component="img"
                  src={invision.src}
                  alt="invision"
                  width="12%"
                />
              }
              title="Digital Product Design"
              description="Check out our proven methods, guides, and exercises that help make work better, and people happier."
              small
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} mb={3}>
            <DefaultInfoCard
              icon={
                <MKBox
                  component="img"
                  src={slack.src}
                  alt="slack"
                  width="12%"
                />
              }
              title="Better Communication"
              description="Check out our proven methods, guides, and exercises that help make work better, and people happier."
              small
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} mb={3}>
            <DefaultInfoCard
              icon={
                <MKBox
                  component="img"
                  src={webdev.src}
                  alt="webdev"
                  width="12%"
                />
              }
              title="Logo design"
              description="Check out our proven methods, guides, and exercises that help make work better, and people happier."
              small
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  )
}

export default Features
