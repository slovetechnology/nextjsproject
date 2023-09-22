import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Loading = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8'>
    {new Array(5).fill().map((item, i) => (
      <div className="bg-slate-600 h-32 rounded-lg" key={i}></div>
    ))}
    </div>
  )
}

export default Loading
