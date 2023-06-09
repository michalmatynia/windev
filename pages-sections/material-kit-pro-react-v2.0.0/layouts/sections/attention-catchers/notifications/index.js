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

// Sections components
import BaseLayout from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/components/BaseLayout'
import View from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/components/View'

// Notifications page components
import ToastBasic from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/attention-catchers/notifications/components/ToastBasic'
import ToastMessage from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/attention-catchers/notifications/components/ToastMessage'

// Notifications page components code
import toastBasicCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/attention-catchers/notifications/components/ToastBasic/code'
import toastMessageCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/attention-catchers/notifications/components/ToastMessage/code'

function Notifications() {
  return (
    <BaseLayout
      title="Notifications"
      breadcrumb={[
        {
          label: 'Page Sections',
          route: '/sections/attention-catchers/notifications',
        },
        { label: 'Notifications' },
      ]}
    >
      <View title="Toast basic" code={toastBasicCode}>
        <ToastBasic />
      </View>
      <View title="Toast message" code={toastMessageCode}>
        <ToastMessage />
      </View>
    </BaseLayout>
  )
}

export default Notifications
