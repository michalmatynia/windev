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

import { useEffect } from 'react'

// react-router-dom components
// import { useLocation } from 'react-router-dom'
import { useRouter } from 'next/router'

// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types'

// Material Dashboard 2 PRO React components
import MDBox from 'components/ui/material-dashboard-2-pro-react-v2.1.0/MDBox'

// Material Dashboard 2 PRO React context
import {
  useMaterialUIController,
  setLayout,
} from 'contexts/material-dashboard-2-pro-react-v2.1.0/context'

function DashboardLayout({ children }) {
  const [controller, dispatch] = useMaterialUIController()
  const { miniSidenav } = controller
  const { pathname } = useRouter()

  useEffect(() => {
    setLayout(dispatch, 'dashboard')
  }, [dispatch, pathname])

  return (
    <MDBox
      sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
        p: 3,
        position: 'relative',

        [breakpoints.up('xl')]: {
          marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
          transition: transitions.create(['margin-left', 'margin-right'], {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
          }),
        },
      })}
    >
      {children}
    </MDBox>
  )
}

// Typechecking props for the DashboardLayout
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DashboardLayout
