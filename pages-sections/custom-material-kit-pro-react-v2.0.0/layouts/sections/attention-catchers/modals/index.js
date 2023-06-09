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

// Modals page components
import SimpleModal from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/attention-catchers/modals/components/SimpleModal'
import NotificationModal from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/attention-catchers/modals/components/NotificationModal'

// Modals page components code
import simpleModalCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/attention-catchers/modals/components/SimpleModal/code'
import notificationModalCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/attention-catchers/modals/components/NotificationModal/code'

function Modals() {
  return (
    <BaseLayout
      title="Modals"
      breadcrumb={[
        {
          label: 'Page Sections',
          route: '/sections/attention-catchers/modals',
        },
        { label: 'Modals' },
      ]}
    >
      <View title="Simple modal" code={simpleModalCode}>
        <SimpleModal />
      </View>
      <View title="Notification modal" code={notificationModalCode}>
        <NotificationModal />
      </View>
    </BaseLayout>
  )
}

export default Modals
