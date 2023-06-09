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

// Material Kit 2 PRO React components
import MKBox from 'components/ui/material-kit-pro-react-v2.0.0/MKBox'

// Sections components
import BaseLayout from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/components/BaseLayout'
import View from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/components/View'

// Pricing page components
import TeamOne from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/teams/components/TeamOne'
import TeamTwo from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/teams/components/TeamTwo'

// Pricing page components code
import teamOneCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/teams/components/TeamOne/code'
import teamTwoCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/teams/components/TeamTwo/code'

function Teams() {
  return (
    <BaseLayout
      title="Teams"
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/page-sections/teams' },
        { label: 'Teams' },
      ]}
    >
      <View title="Team 1" height="40rem" code={teamOneCode}>
        <TeamOne />
      </View>
      <View title="Team 2" code={teamTwoCode}>
        <MKBox bgColor="white">
          <TeamTwo />
        </MKBox>
      </View>
    </BaseLayout>
  )
}

export default Teams
