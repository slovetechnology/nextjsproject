
import Image from 'next/image'
import React from 'react'

const SingleProduct = ({ data }) => {
    return (
        <div>
            <div className="relative w-full h-[10rem]">
                <Image
                    src={data.media[0].url}
                    priority
                    alt={data.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className='w-full h-auto  object-cover'
                />
            </div>
            <div className="text-white text-sm">{data.name}</div>
        </div>
    )
}

export default SingleProduct
