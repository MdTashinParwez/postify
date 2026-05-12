// import React from 'react'

// function Logo({width = '100px'}) {
//   return (
//     <div>Logo</div>
//   )
// }

// export default Logo
import React from 'react'

function Logo({ width = '120px' }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl font-bold text-indigo-600 tracking-wide">
        Postify
      </span>
    </div>
  )
}

export default Logo