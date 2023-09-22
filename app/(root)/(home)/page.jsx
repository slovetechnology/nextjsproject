import Filters from '@/components/Filters'
import Header from '@/components/Header'
import SearchForm from '@/components/SearchForm'
import SingleProduct from '@/components/SingleProduct'
import React, { Suspense } from 'react'
import Loading from './loading'

export const revalidate = 900

async function fetchProducts({ params }) {
  const res = await fetch(`https://sandbox.geotravel.travelcham.com/packages${params || params ? `?packageType=${params}` : ''}`)
  return res.json()
}

const page = async ({ searchParams }) => {
  const { data } = await fetchProducts({ params: searchParams.query })
  return (
    <main className='flex-center paddings max-auto w-full max-w-screen-2xl flex-col'>
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-center text-center bg-no-repeat">
          <h1 className='sm:heading1 heading2 mb-6 text-center text-white'>NextJS 13 Mastery Resources</h1>
        </div>
        <SearchForm />
      </section>
      <Suspense fallback={<Loading />}>
        <div className="">
          <Filters />
          <Header data={data.packages}
            query={searchParams.query}
          />
          {data.packages.length > 0 && <div className="w-full border rounded-lg grid gap-6 grid-cols-1 md:grid-cols-4 lg:grid-cols-5 p-3">
            {data.packages.map((item, i) => (
              <SingleProduct key={i} data={item} />
            ))}
          </div>}
        </div>
      </Suspense>
    </main>
  )
}

export default page
