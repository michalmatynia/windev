/**
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
import Card from '@mui/material/Card'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/material-kit-pro-react-v2.0.0/MKBox'
import MKTypography from 'components/ui/material-kit-pro-react-v2.0.0/MKTypography'
import MKInput from 'components/ui/material-kit-pro-react-v2.0.0/MKInput'
import MKButton from 'components/ui/material-kit-pro-react-v2.0.0/MKButton'

// Authentication layout components
import CoverLayout from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Authentication/components/CoverLayout'

// Images
import bgImage from 'public/img/material-kit-pro-react-v2.0.0/bg-reset-cover.jpeg'

function Cover() {
  return (
    <CoverLayout coverHeight="50vh" image={bgImage}>
      <Card>
        <MKBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          py={2}
          mb={1}
          textAlign="center"
        >
          <MKTypography variant="h3" fontWeight="medium" color="white" mt={1}>
            Reset Password
          </MKTypography>
          <MKTypography display="block" variant="button" color="white" my={1}>
            You will receive an e-mail in maximum 60 seconds
          </MKTypography>
        </MKBox>
        <MKBox pt={4} pb={3} px={3}>
          <MKBox component="form" role="form">
            <MKBox mb={4}>
              <MKInput
                type="email"
                label="Email"
                variant="standard"
                fullWidth
                InputLabelProps={{ shrink: true }}
                placeholder="john@email.com"
              />
            </MKBox>
            <MKBox mt={6} mb={1}>
              <MKButton variant="gradient" color="info" fullWidth>
                reset
              </MKButton>
            </MKBox>
          </MKBox>
        </MKBox>
      </Card>
    </CoverLayout>
  )
}

export default Cover
