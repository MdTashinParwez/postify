// import React from 'react'
// import { Link } from 'react-router-dom'
// import Logo from '../Logo'

// function Footer() {
//   return (
//     <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">
//             <div className="relative z-10 mx-auto max-w-7xl px-4">
//                 <div className="-m-6 flex flex-wrap">
//                     <div className="w-full p-6 md:w-1/2 lg:w-5/12">
//                         <div className="flex h-full flex-col justify-between">
//                             <div className="mb-4 inline-flex items-center">
//                                 <Logo width="100px" />
//                             </div>
//                             <div>
//                                 <p className="text-sm text-gray-600">
//                                     &copy; Copyright 2023. All Rights Reserved by DevUI.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="w-full p-6 md:w-1/2 lg:w-2/12">
//                         <div className="h-full">
//                             <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
//                                 Company
//                             </h3>
//                             <ul>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Features
//                                     </Link>
//                                 </li>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Pricing
//                                     </Link>
//                                 </li>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Affiliate Program
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Press Kit
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="w-full p-6 md:w-1/2 lg:w-2/12">
//                         <div className="h-full">
//                             <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
//                                 Support
//                             </h3>
//                             <ul>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Account
//                                     </Link>
//                                 </li>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Help
//                                     </Link>
//                                 </li>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Contact Us
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Customer Support
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="w-full p-6 md:w-1/2 lg:w-3/12">
//                         <div className="h-full">
//                             <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
//                                 Legals
//                             </h3>
//                             <ul>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Terms &amp; Conditions
//                                     </Link>
//                                 </li>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Privacy Policy
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Licensing
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//   )
// }

// export default Footer

import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="flex flex-wrap -m-6">

          {/* LEFT SECTION */}
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex flex-col justify-between h-full">
              
              <div className="mb-4">
                <Logo width="120px" />
              </div>

              <p className="text-sm text-gray-500">
                © 2026 Postify. All rights reserved.
              </p>

            </div>
          </div>

          {/* COMPANY */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-4 text-xs font-semibold uppercase text-gray-400">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link className="text-gray-700 hover:text-indigo-600 transition" to="/">
                  Features
                </Link>
              </li>
              <li>
                <Link className="text-gray-700 hover:text-indigo-600 transition" to="/">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="text-gray-700 hover:text-indigo-600 transition" to="/">
                  Affiliate
                </Link>
              </li>
              <li>
                <Link className="text-gray-700 hover:text-indigo-600 transition" to="/">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-4 text-xs font-semibold uppercase text-gray-400">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link className="text-gray-700 hover:text-indigo-600 transition" to="/">
                  Account
                </Link>
              </li>
              <li>
                <Link className="text-gray-700 hover:text-indigo-600 transition" to="/">
                  Help
                </Link>
              </li>
              <li>
                <Link className="text-gray-700 hover:text-indigo-600 transition" to="/">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="text-gray-700 hover:text-indigo-600 transition" to="/">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <h3 className="mb-4 text-xs font-semibold uppercase text-gray-400">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link className="text-gray-700 hover:text-indigo-600 transition" to="/">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className="text-gray-700 hover:text-indigo-600 transition" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-gray-700 hover:text-indigo-600 transition" to="/">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM LINE */}
        <div className="border-t mt-8 pt-4 text-center text-sm text-gray-500">
          Created by <span className="font-semibold text-indigo-600">Tashin</span>
        </div>

      </div>
    </footer>
  )
}

export default Footer