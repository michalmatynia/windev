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

// prop-types is a library for typechecking of props
import PropTypes from 'prop-types'

// react-router-dom components
// import { Link } from 'react-router-dom'
import Link from 'next/link'

// @mui material components
import MuiBreadcrumbs from '@mui/material/Breadcrumbs'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/material-kit-pro-react-v2.0.0/MKBox'
import MKTypography from 'components/ui/material-kit-pro-react-v2.0.0/MKTypography'

function Breadcrumbs({ routes, ...rest }) {
  return (
    <MKBox bgColor="light" borderRadius="md" py={1} px={2} width="100%">
      <MuiBreadcrumbs {...rest}>
        {routes.map(({ label, route }) =>
          route ? (
            <MKTypography
              key={label}
              component={Link}
              href={route}
              variant="button"
              color="text"
              fontWeight="regular"
              opacity={0.8}
              sx={{
                '&:hover, &:focus': {
                  color: ({ palette: { info } }) => info.main,
                },
              }}
            >
              {label}
            </MKTypography>
          ) : (
            <MKTypography key={label} variant="button" fontWeight="regular">
              {label}
            </MKTypography>
          )
        )}
      </MuiBreadcrumbs>
    </MKBox>
  )
}

// Typechecking props for the Breadcrumbs
Breadcrumbs.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Breadcrumbs
