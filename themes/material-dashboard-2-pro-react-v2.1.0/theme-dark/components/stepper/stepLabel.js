/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 PRO React base styles
import typography from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/base/typography'
import colors from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/base/colors'

// Material Dashboard 2 PRO React helper functions
import pxToRem from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/functions/pxToRem'
import rgba from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/functions/rgba'

const { size, fontWeightRegular } = typography
const { white } = colors

const stepLabel = {
  styleOverrides: {
    label: {
      marginTop: `${pxToRem(8)} !important`,
      fontWeight: fontWeightRegular,
      fontSize: size.xs,
      color: '#9fc9ff',
      textTransform: 'uppercase',

      '&.Mui-active': {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${rgba(white.main, 0.8)} !important`,
      },

      '&.Mui-completed': {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${rgba(white.main, 0.8)} !important`,
      },
    },
  },
}

export default stepLabel
