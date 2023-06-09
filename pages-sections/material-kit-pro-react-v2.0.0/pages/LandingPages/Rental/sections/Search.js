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
import Autocomplete from '@mui/material/Autocomplete'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/material-kit-pro-react-v2.0.0/MKBox'
import MKTypography from 'components/ui/material-kit-pro-react-v2.0.0/MKTypography'
import MKInput from 'components/ui/material-kit-pro-react-v2.0.0/MKInput'
// import MKDatePicker from "components/ui/material-kit-pro-react-v2.0.0/MKDatePicker";
import MKButton from 'components/ui/material-kit-pro-react-v2.0.0/MKButton'

function Search() {
  return (
    <MKBox component="section">
      <Container>
        <Grid
          container
          spacing={{ xs: 0, lg: 3 }}
          sx={{ pt: 2, pb: 3, px: 2, mx: 'auto' }}
        >
          <Grid item xs={12} lg={3} sx={{ mt: 2 }}>
            <MKTypography
              display="block"
              variant="button"
              fontWeight="regular"
              color="text"
              mb={1}
            >
              Leave From
            </MKTypography>
            <Autocomplete
              defaultValue="Bucharest"
              options={['Brazil', 'Bucharest', 'London', 'USA']}
              renderInput={(params) => (
                <MKInput {...params} variant="standard" />
              )}
            />
          </Grid>
          <Grid item xs={12} lg={3} sx={{ mt: 2 }}>
            <MKTypography
              display="block"
              variant="button"
              fontWeight="regular"
              color="text"
              mb={1}
            >
              To
            </MKTypography>
            <Autocomplete
              defaultValue="Italy"
              options={['Denmark', 'Italy', 'Poland', 'Spain']}
              renderInput={(params) => (
                <MKInput {...params} variant="standard" />
              )}
            />
          </Grid>
          <Grid item xs={12} lg={3} sx={{ mt: 2 }}>
            <MKTypography
              display="block"
              variant="button"
              fontWeight="regular"
              color="text"
              mb={1}
            >
              Depart
            </MKTypography>
            <MKInput
              type="date"
              variant="standard"
              placeholder="Please select date"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} lg={3} sx={{ mt: 4 }}>
            <MKButton variant="gradient" color="info" fullWidth>
              search
            </MKButton>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  )
}

export default Search
