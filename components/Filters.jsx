"use client"

import { useState } from "react"
import { FormUrlQuery } from "./utils"
import {useSearchParams, useRouter} from 'next/navigation'

const links = [
    "ALL",
    "PRIVATE",
    "GROUP"
]

const Filters = () => {
    const [active, setActive] = useState('ALL')
    const searchParams = useSearchParams()
    const router = useRouter()

    const handleFilter = (link) => {
        let newUrl = ''
        if(active === link) {
            setActive('')
            newUrl = FormUrlQuery({
                params: searchParams.toString(),
                key: 'query',
                value: null,
                keysToRemove: []
            })
        }else {
            setActive(link)
            newUrl = FormUrlQuery({
                params: searchParams.toString(),
                key: 'query',
                value: link === 'ALL' ? '' : link,
                keysToRemove: []
            })
        }
        router.push(newUrl, {scroll: false})
    }
  return (
    <ul className="text-white-800 body-text no-scrollbar flex items-center justify-center w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-3xl">
        {links.map((link, i) => (
            <button key={i} onClick={() => handleFilter(link)} className={`whitespce-nowrap transition-all rounded-lg text-sm md:text-base px-5 md:px-8 py-2.5 capitalize ${active === link ? 'gradient_blue-purple' : ''}`}>
                {link}
            </button>
        ))}
    </ul>
  )
}

export default Filters
