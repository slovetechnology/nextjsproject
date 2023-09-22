import React from 'react'

const Input = ({type, ref, ...props}) => {
  return (
    <input
        type={type}
        className={`
          flex h-10 w-full rounded-md text-white border-0 border-input bg-black-400 pl-20 pr-8 py-6 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50
        `}
        ref={ref}
        {...props}
      />
  )
}

export default Input
