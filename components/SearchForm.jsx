"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Input from './Input'
import { FormUrlQuery } from './utils'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

const SearchForm = () => {
  const [search, setSearch] = useState('')
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const DebounceFc = setTimeout(() => {
      let newUrl = ''
      if (search) {
        newUrl = FormUrlQuery({
          params: searchParams.toString(),
          key: 'query',
          value: search.toUpperCase()
        })
      }else {
        newUrl = FormUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ['query']
        })
      }
      router.push(newUrl, {scroll: false})
    }, 300);

    return () => clearTimeout(DebounceFc)
  }, [search])
  return (
    <form className='flex-center mx-auto -mt-10 w-11/12 md:full md:-mt-10 sm:px-5'>
      <label className='flex-center relative w-full max-w-4xl'>
        <Image src="/magnifying-glass.svg" className='absolute left-8' alt="search" width={32} height={32} />
        <Input
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </label>
    </form>
  )
}

export default SearchForm
