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
import Icon from '@mui/material/Icon'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/material-kit-pro-react-v2.0.0/MKBox'
import MKTypography from 'components/ui/material-kit-pro-react-v2.0.0/MKTypography'

// Material Kit 2 PRO React examples
import HorizontalTeamCard from 'components/blocks/material-kit-pro-react-v2.0.0/Cards/TeamCards/HorizontalTeamCard'

// Images
import bgImage from 'public/img/material-kit-pro-react-v2.0.0/examples/city.jpg'
import team1 from 'public/img/material-kit-pro-react-v2.0.0/team-5.jpg'
import team2 from 'public/img/material-kit-pro-react-v2.0.0/bruce-mars.jpg'
import team3 from 'public/img/material-kit-pro-react-v2.0.0/ivana-squares.jpg'
import team4 from 'public/img/material-kit-pro-react-v2.0.0/ivana-square.jpg'

function TeamTwo() {
  return (
    <MKBox
      component="section"
      position="relative"
      py={12}
      sx={{
        backgroundImage: ({
          palette: { gradients },
          functions: { linearGradient, rgba },
        }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage.src})`,
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKBox
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="3rem"
              height="3rem"
              variant="gradient"
              bgColor="info"
              color="white"
              shadow="md"
              borderRadius="lg"
              mb={2}
            >
              <Icon>supervisor_account</Icon>
            </MKBox>
            <MKTypography variant="h3" color="white">
              The Executive Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              There&apos;s nothing I really wanted to do in life that I
              wasn&apos;t able to get good at. That&apos;s my skill.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1.src}
                name="Emma Roberts"
                position={{ color: 'info', label: 'UI Designer' }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2.src}
                name="William Pearce"
                position={{ color: 'info', label: 'Boss' }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3.src}
                name="Ivana Flow"
                position={{ color: 'info', label: 'Athlete' }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4.src}
                name="Marquez Garcia"
                position={{ color: 'info', label: 'JS Developer' }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  )
}

export default TeamTwo
