import React from 'react'

const Header = ({data, query}) => {
  return (
    <div>
      <div className="text-white text-xl capitalize mb-4 text-center">total: {data.length}</div>
     {query && <div className="text-white text-lg">No search result found for <span className="text-teal-300">"{query}"</span> </div>}
    </div>
  )
}

export default Header
