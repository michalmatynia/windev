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
import { useMemo } from 'react'

// @mui material components
import Grid from '@mui/material/Grid'

// Material Dashboard 2 PRO React components
import MDBox from 'components/ui/material-dashboard-2-pro-react-v2.1.0/MDBox'

// Material Dashboard 2 PRO React examples
import DashboardLayout from 'components/blocks/material-dashboard-2-pro-react-v2.1.0/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'components/blocks/material-dashboard-2-pro-react-v2.1.0/Navbars/DashboardNavbar'
import Footer from 'components/blocks/material-dashboard-2-pro-react-v2.1.0/Footer'
import EventCalendar from 'components/blocks/material-dashboard-2-pro-react-v2.1.0/Calendar'

// Calendar application components
import Header from 'pages-sections/material-dashboard-2-pro-react-v2.1.0/layouts/applications/calendar/components/Header'
import NextEvents from 'pages-sections/material-dashboard-2-pro-react-v2.1.0/layouts/applications/calendar/components/NextEvents'
import ProductivityChart from 'pages-sections/material-dashboard-2-pro-react-v2.1.0/layouts/applications/calendar/components/ProductivityChart'

// Data
import calendarEventsData from 'pages-sections/material-dashboard-2-pro-react-v2.1.0/layouts/applications/calendar/data/calendarEventsData'

function Calendar() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={3}>
        <MDBox display="flex" justifyContent="flex-end" mt={1} mb={4} mx={2}>
          <Header />
        </MDBox>
        <Grid container spacing={3}>
          <Grid item xs={12} xl={9} sx={{ height: 'max-content' }}>
            {useMemo(
              () => (
                <EventCalendar
                  initialView="dayGridMonth"
                  initialDate="2021-08-10"
                  events={calendarEventsData}
                  selectable
                  editable
                />
              ),
              []
            )}
          </Grid>
          <Grid item xs={12} xl={3}>
            <MDBox mb={3}>
              <NextEvents />
            </MDBox>
            <MDBox mb={3}>
              <ProductivityChart />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  )
}

export default Calendar
