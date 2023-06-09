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

// Material Kit 2 PRO React examples
import DefaultCounterCard from 'components/blocks/material-kit-pro-react-v2.0.0/Cards/CounterCards/DefaultCounterCard'

// Images
import coinbase from 'public/img/material-kit-pro-react-v2.0.0/logos/gray-logos/logo-coinbase.svg'
import nasa from 'public/img/material-kit-pro-react-v2.0.0/logos/gray-logos/logo-nasa.svg'
import netflix from 'public/img/material-kit-pro-react-v2.0.0/logos/gray-logos/logo-netflix.svg'
import pinterest from 'public/img/material-kit-pro-react-v2.0.0/logos/gray-logos/logo-pinterest.svg'
import spotify from 'public/img/material-kit-pro-react-v2.0.0/logos/gray-logos/logo-spotify.svg'
import vodafone from 'public/img/material-kit-pro-react-v2.0.0/logos/gray-logos/logo-vodafone.svg'

function Featuring() {
  return (
    <MKBox component="section" pt={3} pb={8}>
      <Container>
        <Grid container spacing={3} sx={{ mb: 12 }}>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={coinbase.src}
              alt="coinbase"
              width="100%"
              opacity={0.7}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={nasa.src}
              alt="nasa"
              width="100%"
              opacity={0.7}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={netflix.src}
              alt="netflix"
              width="100%"
              opacity={0.7}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={pinterest.src}
              alt="pinterest"
              width="100%"
              opacity={0.7}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={spotify.src}
              alt="spotify"
              width="100%"
              opacity={0.7}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={vodafone.src}
              alt="vodafone"
              width="100%"
              opacity={0.7}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" sx={{ textAlign: 'center' }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={5234}
              separator=","
              title="Projects"
              description="Of “high-performing” level are led by a certified project manager"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={3400}
              separator=","
              suffix="+"
              title="Hours"
              description="That meets quality standards required by our users"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={24}
              suffix="/7"
              title="Support"
              description="Actively engage team members that finishes on time"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  )
}

export default Featuring
