// 'use client'

// import LocaleSwitcher from '../../components/LocaleSwitcher'
// import PageLayout from '../../components/PageLayout'
// // import { useEffect } from 'react'
// // import { useRouter } from 'next/navigation'
// import { useTranslations } from 'next-intl'

// export default function RootPage() {
//   const t = useTranslations('Index')
//   // return (
//   //   <PageLayout title={t('title')}>
//   //     <p>{t('description')}</p>
//   //     <LocaleSwitcher />
//   //   </PageLayout>
//   // )

//   return <div>cds</div>
//   //   const router = useRouter()
//   //   useEffect(() => {
//   //     function reRoute() {
//   //       router.push('/front')
//   //     }
//   //     try {
//   //       reRoute()
//   //     } catch (error) {
//   //       console.error(error)
//   //     }
//   //   }, [router])
// }

'use client'

import { useTranslations } from 'next-intl'

export default function Index() {
  const t = useTranslations('Index')
  return <h1>{t('title')}</h1>
}
