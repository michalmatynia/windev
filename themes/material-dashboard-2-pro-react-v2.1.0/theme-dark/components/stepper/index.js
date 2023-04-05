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
import colors from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/base/colors'
import borders from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/base/borders'
import boxShadows from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/base/boxShadows'

// Material Dashboard 2 PRO React helper functions
import pxToRem from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/functions/pxToRem'
import linearGradient from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/functions/linearGradient'

const { transparent, gradients } = colors
const { borderRadius } = borders
const { colored } = boxShadows

const stepper = {
  styleOverrides: {
    root: {
      background: linearGradient(gradients.info.main, gradients.info.state),
      padding: `${pxToRem(24)} 0 ${pxToRem(16)}`,
      borderRadius: borderRadius.lg,
      boxShadow: colored.info,

      '&.MuiPaper-root': {
        backgroundColor: transparent.main,
      },
    },
  },
}

export default stepper
