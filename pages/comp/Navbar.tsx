import { Fragment, useState } from "react";
import { useSelector } from 'react-redux';
// Headless UI, for more info and examples you can check out https://github.com/tailwindlabs/headlessui
import { Menu, Transition } from "@headlessui/react";
import { RootState } from './../../state/store';
import  Realnav  from './Realnav'
export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const appState = useSelector((state: RootState) => state.user);




  const months = [
    "januar",
    "februar",
    "marts",
    "april",
    "maj",
    "juni",
    "juli",
    "august",
    "september",
    "oktober",
    "november",
    "december",
  ];

  const currentMonth = months[new Date().getMonth()];


  return (
    <>


      <div id="page-container" className="h-screen w-screen bg-gray-100 dark:text-gray-100 dark:bg-gray-900">
        {/* Page Header */}
        <Realnav />
        {/* Page Container */}

        {/* END Page Header */}

        {/* Page Content */}




        <div className="2xl:container mx-auto p-6 lg:p10">

          <>

            {/* Statistics: Simple with Action */}
            {/* Placeholder - End */}
            <div className="flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-gray-800 dark:text-white mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 12v5m5-9v9m5-5v5m5-9v9M1 7l5-6 5 6 5-6" />
              </svg>
              <h1 className="text-3xl font-bold">Statistikker for {currentMonth}</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
              {/* Card */}




              <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-800">

                {/* Body */}
                <div className="p-5 grow flex justify-between items-center">
                  <dl className="space-y-1">
                    <dt className="text-2xl font-bold">
                      500
                    </dt>
                    <dd className="uppercase font-semibold text-sm text-gray-500 tracking-wider dark:text-gray-400">
                      Sager Oprettet
                    </dd>
                  </dl>
                  <div className="font-semibold inline-flex px-2 py-1 leading-4 items-center space-x-1 text-sm rounded-full text-emerald-800 bg-emerald-200">
                    <svg className="hi-solid hi-arrow-circle-up inline-block w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" /></svg>
                    <span>8%</span>
                  </div>
                </div>
                {/* END Body */}

                {/* Action Link */}
                <a href="#" className="block p-3 font-medium text-sm text-center bg-gray-50 hover:bg-gray-100 hover:bg-opacity-75 active:bg-gray-50 text-white dark:bg-gray-900/50 dark:hover:bg-gray-900/75 dark:active:bg-gray-900/50 font-bold">
                  Søg efter sager
                </a>
                {/* END Action Link */}
              </div>
              {/* END Card */}

              {/* Card */}
              <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-800">
                {/* Body */}
                <div className="p-5 grow flex justify-between items-center">
                  <dl className="space-y-1">
                    <dt className="text-2xl font-bold">
                      75.000 DKK
                    </dt>
                    <dd className="uppercase font-semibold text-sm text-gray-500 tracking-wider dark:text-gray-400">
                      Sendt bøder for
                    </dd>
                  </dl>
                  <div className="font-semibold inline-flex px-2 py-1 leading-4 items-center space-x-1 text-sm rounded-full text-rose-800 bg-rose-200">
                    <svg className="hi-solid hi-arrow-circle-down inline-block w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" /></svg>
                    <span>6.9%</span>
                  </div>
                </div>
                {/* END Body */}

                {/* Action Link */}
                <a href="#" className="block p-3 font-medium text-sm text-center bg-gray-50 hover:bg-gray-100 hover:bg-opacity-75 active:bg-gray-50 text-white dark:bg-gray-900/50 dark:hover:bg-gray-900/75 dark:active:bg-gray-900/50">
                  Opret en ny sag
                </a>
                {/* END Action Link */}
              </div>
              {/* END Card */}

              {/* Card */}
              <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-800">
                {/* Body */}
                <div className="p-5 grow flex justify-between items-center">
                  <dl className="space-y-1">
                    <dt className="text-2xl font-bold">
                      120 måneder
                    </dt>
                    <dd className="uppercase font-semibold text-sm text-gray-500 tracking-wider dark:text-gray-400">
                      Samlet Fængseltid
                    </dd>
                  </dl>
                  <div className="font-semibold inline-flex px-2 py-1 leading-4 items-center space-x-1 text-sm rounded-full text-emerald-800 bg-emerald-200">
                    <svg className="hi-solid hi-arrow-circle-up inline-block w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" /></svg>
                    <span>5.6%</span>
                  </div>
                </div>
                {/* END Body */}

                {/* Action Link */}
                <a href="#" className="block p-3 font-medium text-sm text-center bg-gray-50 hover:bg-gray-100 hover:bg-opacity-75 active:bg-gray-50 text-white dark:bg-gray-900/50 dark:hover:bg-gray-900/75 dark:active:bg-gray-900/50">
                  Opret en ny sag
                </a>
                {/* END Action Link */}
              </div>
              {/* END Card */}
            </div>
            {/* END Statistics: Simple with Action */}

            {/* Placeholder - End */}
          </>
          {/* Card Headings: Title with Subtitle */}


          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mt-4">
            <div className="w-auto h-fit rounded-lg bg-gray-100 lg:col-span-2">
              <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-800">
                {/* Card Header */}
                <div className="py-4 px-5 bg-gray-50 dark:bg-gray-700/50">
                  <h3 className="font-semibold mb-1">
                    Seneste Sager
                  </h3>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    De seneste 3 sager der er blevet oprettet i kr.
                  </h4>
                </div>
                <div className="border border-gray-200 rounded overflow-x-auto min-w-full bg-white dark:bg-gray-800 dark:border-gray-700">
                  {/* Table */}
                  <table className="min-w-full text-sm align-middle whitespace-nowrap">
                    {/* Table Header */}
                    <thead>
                      <tr>
                        <th className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-center dark:text-gray-50 dark:bg-gray-700/25">
                          Photo
                        </th>
                        <th className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25">
                          Name
                        </th>
                        <th className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25">
                          Email
                        </th>
                        <th className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25">
                          Plan
                        </th>
                        <th className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-center dark:text-gray-50 dark:bg-gray-700/25">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    {/* END Table Header */}

                    {/* Table Body */}
                    <tbody>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3 text-center">
                          <img src="https://cdn.tailkit.com/media/placeholders/avatar-mEZ3PoFGs_k-160x160.jpg" alt="User Avatar" className="inline-block w-10 h-10 rounded-full" />
                        </td>
                        <td className="p-3">
                          <p className="font-semibold">
                            Valdemar Larsen
                          </p>
                          <p className="text-gray-500 dark:text-gray-400">
                            Web Designer
                          </p>
                        </td>
                        <td className="p-3 text-gray-500 dark:text-gray-400">
                          n.hart@example.com
                        </td>
                        <td className="p-3">
                          <div className="font-semibold inline-flex px-2 py-1 leading-4 text-xs rounded-full text-emerald-900 bg-emerald-100 dark:bg-emerald-200">Agency</div>
                        </td>
                        <td className="p-3 text-center">
                          <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                            Edit
                          </button>
                        </td>
                      </tr>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3 text-center">
                          <img src="https://cdn.tailkit.com/media/placeholders/avatar-mEZ3PoFGs_k-160x160.jpg" alt="User Avatar" className="inline-block w-10 h-10 rounded-full" />
                        </td>
                        <td className="p-3">
                          <p className="font-semibold">
                            Valdemar Larsen
                          </p>
                          <p className="text-gray-500 dark:text-gray-400">
                            Web Designer
                          </p>
                        </td>
                        <td className="p-3 text-gray-500 dark:text-gray-400">
                          n.hart@example.com
                        </td>
                        <td className="p-3">
                          <div className="font-semibold inline-flex px-2 py-1 leading-4 text-xs rounded-full text-emerald-900 bg-emerald-100 dark:bg-emerald-200">Agency</div>
                        </td>
                        <td className="p-3 text-center">
                          <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                            Edit
                          </button>
                        </td>
                      </tr>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3 text-center">
                          <img src="https://cdn.tailkit.com/media/placeholders/avatar-mEZ3PoFGs_k-160x160.jpg" alt="User Avatar" className="inline-block w-10 h-10 rounded-full" />
                        </td>
                        <td className="p-3">
                          <p className="font-semibold">
                            Valdemar Larsen
                          </p>
                          <p className="text-gray-500 dark:text-gray-400">
                            Web Designer
                          </p>
                        </td>
                        <td className="p-3 text-gray-500 dark:text-gray-400">
                          n.hart@example.com
                        </td>
                        <td className="p-3">
                          <div className="font-semibold inline-flex px-2 py-1 leading-4 text-xs rounded-full text-emerald-900 bg-emerald-100 dark:bg-emerald-200">Agency</div>
                        </td>
                        <td className="p-3 text-center">
                          <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                            Edit
                          </button>
                        </td>
                      </tr>
                    </tbody>
                    {/* END Table Body */}
                  </table>
                </div>
                {/* END Table */}
              </div>




            </div>
            <div className="h-auto rounded-lg bg-gray-100">
              <nav className="border border-gray-200 rounded-lg bg-white divide-y divide-gray-200 overflow-hidden dark:text-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700">
                <div className="py-4 px-5 bg-gray-50 dark:bg-gray-700/50">
                  <h3 className="font-semibold mb-1">
                    Seneste Efterlysninger
                  </h3>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Seneste 5 oprettet efterlysninger
                  </h4>
                </div>
                <a href="#" className="p-4 flex justify-between items-center text-gray-700 hover:text-gray-700 hover:bg-gray-50 active:bg-white dark:text-gray-200 dark:hover:bg-gray-800/50 dark:active:bg-gray-900">
                  <div className="flex items-center space-x-4">
                    <img src="https://cdn.tailkit.com/media/placeholders/avatar-iFgRcqHznqg-160x160.jpg" alt="User Avatar" className="inline-block w-10 h-10 rounded-full" />
                    <div>
                      <p className="text-sm font-semibold">
                        Thomas Reynolds
                      </p>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Web Developer
                      </p>
                    </div>
                  </div>
                  <svg className="hi-mini hi-chevron-right inline-block w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="p-4 flex justify-between items-center text-gray-700 hover:text-gray-700 hover:bg-gray-50 active:bg-white dark:text-gray-200 dark:hover:bg-gray-800/50 dark:active:bg-gray-900">
                  <div className="flex items-center space-x-4">
                    <img src="https://cdn.tailkit.com/media/placeholders/avatar-8PMvB4VyVXA-160x160.jpg" alt="User Avatar" className="inline-block w-10 h-10 rounded-full" />
                    <div>
                      <p className="text-sm font-semibold">
                        Chad Hale
                      </p>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Support Specialist
                      </p>
                    </div>
                  </div>
                  <svg className="hi-mini hi-chevron-right inline-block w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="p-4 flex justify-between items-center text-gray-700 hover:text-gray-700 hover:bg-gray-50 active:bg-white dark:text-gray-200 dark:hover:bg-gray-800/50 dark:active:bg-gray-900">
                  <div className="flex items-center space-x-4">
                    <img src="https://cdn.tailkit.com/media/placeholders/avatar-bY4GXQKfZrA-160x160.jpg" alt="User Avatar" className="inline-block w-10 h-10 rounded-full" />
                    <div>
                      <p className="text-sm font-semibold">
                        Angela Tong
                      </p>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Human Resources
                      </p>
                    </div>
                  </div>
                  <svg className="hi-mini hi-chevron-right inline-block w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="p-4 flex justify-between items-center text-gray-700 hover:text-gray-700 hover:bg-gray-50 active:bg-white dark:text-gray-200 dark:hover:bg-gray-800/50 dark:active:bg-gray-900">
                  <div className="flex items-center space-x-4">
                    <img src="https://cdn.tailkit.com/media/placeholders/avatar-euZ2n8dGUcQ-160x160.jpg" alt="User Avatar" className="inline-block w-10 h-10 rounded-full" />
                    <div>
                      <p className="text-sm font-semibold">
                        James Ocampo
                      </p>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Product Designer
                      </p>
                    </div>
                  </div>
                  <svg className="hi-mini hi-chevron-right inline-block w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="p-4 flex justify-between items-center text-gray-700 hover:text-gray-700 hover:bg-gray-50 active:bg-white dark:text-gray-200 dark:hover:bg-gray-800/50 dark:active:bg-gray-900">
                  <div className="flex items-center space-x-4">
                    <img src="https://cdn.tailkit.com/media/placeholders/avatar-mEZ3PoFGs_k-160x160.jpg" alt="User Avatar" className="inline-block w-10 h-10 rounded-full" />
                    <div>
                      <p className="text-sm font-semibold">
                        Debra Johnson
                      </p>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Marketing
                      </p>
                    </div>
                  </div>
                  <svg className="hi-mini hi-chevron-right inline-block w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg>
                </a>
              </nav>

            </div>
            <div className="h-32 rounded-lg bg-gray-100"></div>
          </div>
          {/* END Card Headings: Title with Subtitle */}
        </div>

        {/* END Page Section */}

        {/* END Page Content */}

        {/* Page Footer */}

        {/* END Page Footer */}
      </div>
      {/* END Page Container */}
    </>
  )
}


export async function getServerSideProps() {
  return { props: {} };
}
