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

const { background } = colors
const { borderRadius } = borders
const { md } = boxShadows

const tabs = {
  styleOverrides: {
    root: {
      position: 'relative',
      backgroundColor: background.card,
      borderRadius: borderRadius.xl,
      minHeight: 'unset',
      padding: pxToRem(4),
    },

    flexContainer: {
      height: '100%',
      position: 'relative',
      zIndex: 10,
    },

    fixed: {
      overflow: 'unset !important',
      overflowX: 'unset !important',
    },

    vertical: {
      '& .MuiTabs-indicator': {
        width: '100%',
      },
    },

    indicator: {
      height: '100%',
      borderRadius: borderRadius.lg,
      backgroundColor: background.default,
      boxShadow: md,
      transition: 'all 500ms ease',
    },
  },
}

export default tabs