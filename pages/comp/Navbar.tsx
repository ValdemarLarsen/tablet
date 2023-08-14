import { Fragment, useState } from "react";

// Headless UI, for more info and examples you can check out https://github.com/tailwindlabs/headlessui
import { Menu, Transition } from "@headlessui/react";

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);


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
      {/* Page Container */}
      <div id="page-container" className="flex flex-col mx-auto w-full min-h-screen min-w-[320px] bg-gray-100 dark:text-gray-100 dark:bg-gray-900">
        {/* Page Header */}
        <header id="page-header" className="flex flex-none items-center bg-white shadow-sm z-1 dark:bg-gray-800">
          <div className="container mx-auto">
            <div className="flex justify-between py-4">
              {/* Left Section */}
              <div className="flex items-center">
                {/* Logo */}
                <a href="#" className="group inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300">
                  <img src="https://cdn.discordapp.com/attachments/1008406017903706163/1131009951754629170/politi.png" className="w-15 h-5" alt="Tablet Billedet" />

                </a>
                {/* END Logo */}
              </div>
              {/* END Left Section */}

              {/* Right Section */}
              <div className="flex items-center space-x-2 lg:space-x-5">
                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-2">
                  <a href="#" className="group text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded-lg text-blue-600 border border-blue-100 bg-blue-50 dark:text-white dark:bg-gray-700 dark:border-transparent">
                    <svg className="hi-mini hi-home inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd" /></svg>
                    <span>Forside</span>
                  </a>
                  <a href="#" className="group text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-800 border border-transparent hover:text-blue-600 hover:bg-blue-50 active:border-blue-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700 dark:active:border-gray-600">
                    <svg className="hi-mini hi-users inline-block w-5 h-5 opacity-25 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" /></svg>
                    <span>Krimnalregister</span>
                  </a>
                  <a href="#" className="group text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-800 border border-transparent hover:text-blue-600 hover:bg-blue-50 active:border-blue-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700 dark:active:border-gray-600">
                    <svg className="hi-solid hi-academic-cap inline-block w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" /></svg>
                    <span>Kalender & Træning</span>
                  </a>
                  <a href="#" className="group text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-800 border border-transparent hover:text-blue-600 hover:bg-blue-50 active:border-blue-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700 dark:active:border-gray-600">
                    <svg className="hi-mini hi-chart-bar inline-block w-5 h-5 opacity-25 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" /></svg>
                    <span>Flådestyring</span>
                  </a>
                </nav>
                {/* END Desktop Navigation */}

                {/* User Dropdown */}
                <Menu as="div" className="relative inline-block">
                  {/* Dropdown Toggle Button */}
                  <Menu.Button className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                    <span>John</span>
                    <svg className="hi-mini hi-chevron-down inline-block w-5 h-5 opacity-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
                  </Menu.Button>
                  {/* END Dropdown Toggle Button */}

                  {/* Dropdown */}
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="opacity-0 scale-90"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-90"
                  >
                    <Menu.Items className="absolute right-0 origin-top-right z-10 mt-2 w-48 shadow-xl rounded-lg dark:shadow-gray-900 focus:outline-none">
                      <div className="bg-white ring-1 ring-black ring-opacity-5 rounded-lg divide-y divide-gray-100 dark:bg-gray-800 dark:divide-gray-700 dark:ring-gray-700">
                        <div className="p-2.5 space-y-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={`group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg border border-transparent ${active ? "text-blue-800 bg-blue-50 dark:text-white dark:bg-gray-700/75 dark:border-transparent" : "text-gray-700 hover:text-blue-800 hover:bg-blue-50 active:border-blue-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700/75 dark:active:border-gray-600"
                                  }`}
                              >
                                <svg className="flex-none hi-mini hi-inbox inline-block w-5 h-5 opacity-25 group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M1 11.27c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 015.273 3h9.454a2.75 2.75 0 012.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 01-2 2H3a2 2 0 01-2-2v-3.73zm3.068-5.852A1.25 1.25 0 015.273 4.5h9.454a1.25 1.25 0 011.205.918l1.523 5.52c.006.02.01.041.015.062H14a1 1 0 00-.86.49l-.606 1.02a1 1 0 01-.86.49H8.236a1 1 0 01-.894-.553l-.448-.894A1 1 0 006 11H2.53l.015-.062 1.523-5.52z" clipRule="evenodd" /></svg>
                                <span className="grow">Mine Beskeder</span>
                                <div className="font-semibold inline-flex px-1.5 py-0.5 leading-4 text-xs rounded-full border border-blue-200 text-blue-700 bg-blue-100 dark:text-blue-50 dark:bg-blue-700 dark:border-blue-700">0</div>
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="p-2.5 space-y-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={`group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg border border-transparent ${active ? "text-blue-800 bg-blue-50 dark:text-white dark:bg-gray-700/75 dark:border-transparent" : "text-gray-700 hover:text-blue-800 hover:bg-blue-50 active:border-blue-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700/75 dark:active:border-gray-600"
                                  }`}
                              >
                                <svg className="flex-none hi-mini hi-user-circle inline-block w-5 h-5 opacity-25 group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clipRule="evenodd" /></svg>
                                <span className="grow">Min Profil</span>
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="p-2.5 space-y-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={`group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg border border-transparent ${active ? "text-blue-800 bg-blue-50 dark:text-white dark:bg-gray-700/75 dark:border-transparent" : "text-gray-700 hover:text-blue-800 hover:bg-blue-50 active:border-blue-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700/75 dark:active:border-gray-600"
                                  }`}
                              >
                                <svg className="flex-none hi-mini hi-lock-closed inline-block w-5 h-5 opacity-25 group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" /></svg>
                                <span className="grow">Log Af</span>
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </div>
                    </Menu.Items>
                  </Transition>
                  {/* END Dropdown */}
                </Menu>
                {/* END User Dropdown */}


              </div>
              {/* END Right Section */}
            </div>
          </div>
        </header>
        {/* END Page Header */}

        {/* Page Content */}
        <main id="page-content" className="flex flex-auto flex-col max-w-full">
          {/* Page Section */}
          <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
            <>

              {/* Statistics: Simple with Action */}

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
                        50
                      </dt>
                      <dd className="uppercase font-semibold text-sm text-gray-500 tracking-wider dark:text-gray-400">
                        Sager Oprettet
                      </dd>
                    </dl>
                    <div className="font-semibold inline-flex px-2 py-1 leading-4 items-center space-x-1 text-sm rounded-full text-emerald-800 bg-emerald-200">
                      <svg className="hi-solid hi-arrow-circle-up inline-block w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" /></svg>
                      <span>7.9%</span>
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
            </>

            {/* Card Headings: Title with Subtitle */}
            
            <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-800 mt-4">
              {/* Card Header */}
              <div className="py-4 px-5 bg-gray-50 dark:bg-gray-700/50">
                <h3 className="font-semibold mb-1">
                  Seneste Sager
                </h3>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Her er alle de seneste sager der er blevet oprettet!
                </h4>
              </div>
              {/* END Card Header */}

              {/* Card Body */}
              <div className="p-5 grow">

                {/* Tables: Striped */}

                {/* Responsive Table Container */}
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
                            Nansi Hart
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
                          <img src="https://cdn.tailkit.com/media/placeholders/avatar-BGz8vO3pK8k-160x160.jpg" alt="User Avatar" className="inline-block w-10 h-10 rounded-full" />
                        </td>
                        <td className="p-3">
                          <p className="font-semibold">
                            Lia Baker
                          </p>
                          <p className="text-gray-500 dark:text-gray-400">
                            Web Developer
                          </p>
                        </td>
                        <td className="p-3 text-gray-500 dark:text-gray-400">
                          l.baker@example.com
                        </td>
                        <td className="p-3">
                          <div className="font-semibold inline-flex px-2 py-1 leading-4 text-xs rounded-full text-blue-900 bg-blue-100 dark:bg-blue-200">Freelancer</div>
                        </td>
                        <td className="p-3 text-center">
                          <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                            Edit
                          </button>
                        </td>
                      </tr>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3 text-center">
                          <img src="https://cdn.tailkit.com/media/placeholders/avatar-iFgRcqHznqg-160x160.jpg" alt="User Avatar" className="inline-block w-10 h-10 rounded-full" />
                        </td>
                        <td className="p-3">
                          <p className="font-semibold">
                            Xavier Rosales
                          </p>
                          <p className="text-gray-500 dark:text-gray-400">
                            Author
                          </p>
                        </td>
                        <td className="p-3 text-gray-500 dark:text-gray-400">
                          x.rosales@example.com
                        </td>
                        <td className="p-3">
                          <div className="font-semibold inline-flex px-2 py-1 leading-4 text-xs rounded-full text-orange-900 bg-orange-100 dark:bg-orange-200">Trial</div>
                        </td>
                        <td className="p-3 text-center">
                          <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                            Edit
                          </button>
                        </td>
                      </tr>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3 text-center">
                          <img src="https://cdn.tailkit.com/media/placeholders/avatar-c_GmwfHBDzk-160x160.jpg" alt="User Avatar" className="inline-block w-10 h-10 rounded-full" />
                        </td>
                        <td className="p-3">
                          <p className="font-semibold">
                            Danyal Clark
                          </p>
                          <p className="text-gray-500 dark:text-gray-400">
                            Laravel Developer
                          </p>
                        </td>
                        <td className="p-3 text-gray-500 dark:text-gray-400">
                          d.clark@example.com
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
                          <img src="https://cdn.tailkit.com/media/placeholders/avatar-QXevDflbl8A-160x160.jpg" alt="User Avatar" className="inline-block w-10 h-10 rounded-full" />
                        </td>
                        <td className="p-3">
                          <p className="font-semibold">
                            Keira Simons
                          </p>
                          <p className="text-gray-500 dark:text-gray-400">
                            Marketing Director
                          </p>
                        </td>
                        <td className="p-3 text-gray-500 dark:text-gray-400">
                          k.simons@example.com
                        </td>
                        <td className="p-3">
                          <div className="font-semibold inline-flex px-2 py-1 leading-4 text-xs rounded-full text-blue-900 bg-blue-100 dark:bg-blue-200">Freelancer</div>
                        </td>
                        <td className="p-3 text-center">
                          <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-red-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                            Edit
                          </button>
                        </td>
                      </tr>
                    </tbody>
                    {/* END Table Body */}
                  </table>
                  {/* END Table */}
                </div>
                {/* END Responsive Table Container */}

                {/* END Tables: Striped */}

              </div>
              {/* Card Body */}
            </div>
            {/* END Card Headings: Title with Subtitle */}
          </div>
          {/* END Page Section */}
        </main>
        {/* END Page Content */}

        {/* Page Footer */}

        {/* END Page Footer */}
      </div>
      {/* END Page Container */}
    </>
  )
}