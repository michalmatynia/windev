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
import colors from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/base/colors'
import borders from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/base/borders'

// Material Dashboard 2 PRO React helper functions
import pxToRem from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/functions/pxToRem'

const { white } = colors
const { borderRadius } = borders

const sidenav = {
  styleOverrides: {
    root: {
      width: pxToRem(250),
      whiteSpace: 'nowrap',
      border: 'none',
    },

    paper: {
      width: pxToRem(250),
      backgroundColor: white.main,
      height: `calc(100vh - ${pxToRem(32)})`,
      margin: pxToRem(16),
      borderRadius: borderRadius.xl,
      border: 'none',
    },

    paperAnchorDockedLeft: {
      borderRight: 'none',
    },
  },
}

export default sidenav