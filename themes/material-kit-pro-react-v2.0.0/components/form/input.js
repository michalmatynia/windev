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

// Material Kit 2 PRO React Base Styles
import colors from 'themes/material-kit-pro-react-v2.0.0/base/colors'
import typography from 'themes/material-kit-pro-react-v2.0.0/base/typography'
import borders from 'themes/material-kit-pro-react-v2.0.0/base/borders'

const { info, inputBorderColor, dark } = colors
const { size } = typography
const { borderWidth } = borders

const input = {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      color: dark.main,

      '&:hover:not(.Mui-disabled):before': {
        borderBottom: `${borderWidth[1]} solid ${inputBorderColor}`,
      },

      '&:before': {
        borderColor: inputBorderColor,
      },

      '&:after': {
        borderColor: info.main,
      },
    },
  },
}

export default input
