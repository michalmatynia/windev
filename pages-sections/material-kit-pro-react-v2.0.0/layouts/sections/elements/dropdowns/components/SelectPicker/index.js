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
import MKInput from 'components/ui/material-kit-pro-react-v2.0.0/MKInput'

function SelectPicker() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Autocomplete
            defaultValue="Washington"
            options={['Brazil', 'Bucharest', 'London', 'Washington']}
            sx={{ width: 300 }}
            renderInput={(params) => <MKInput {...params} variant="standard" />}
          />
        </Grid>
      </Container>
    </MKBox>
  )
}

export default SelectPicker
