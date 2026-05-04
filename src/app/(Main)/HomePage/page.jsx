import BooksLoader from '@/app/UI/BookLoader'
import Banner from '@/components/Homepage/Banner'
import FeatureBooks from '@/components/Homepage/FeatureBooks'
import Marque from '@/components/Homepage/Marque'
import React, { Suspense } from 'react'

const HomePage = () => {
  return (
    <div >
      <Banner />
      <Marque />
      <Suspense fallback={<BooksLoader />}>
        <FeatureBooks />
      </Suspense>
    </div>
  )
}

export default HomePage