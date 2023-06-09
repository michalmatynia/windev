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

// Newsletters page components
import NewsletterOne from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/input-areas/newsletters/components/NewsletterOne'
import NewsletterTwo from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/input-areas/newsletters/components/NewsletterTwo'

// Newsletters page components code
import newsletterOneCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/input-areas/newsletters/components/NewsletterOne/code'
import newsletterTwoCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/input-areas/newsletters/components/NewsletterTwo/code'

function Newsletters() {
  return (
    <BaseLayout
      title="Newsletters"
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/input-areas/newsletters' },
        { label: 'Newsletters' },
      ]}
    >
      <View title="Newsletter 1" code={newsletterOneCode}>
        <NewsletterOne />
      </View>
      <View title="Newsletter 2" code={newsletterTwoCode}>
        <NewsletterTwo />
      </View>
    </BaseLayout>
  )
}

export default Newsletters
