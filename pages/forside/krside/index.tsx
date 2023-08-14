export default function ProductDetailsWithInfoSidebar() {
    return (
        <>
            {/* Product Details Section: With Info Sidebar */}
            <div className="bg-white dark:text-gray-100 dark:bg-gray-900">
                <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
                    {/* Heading */}   <h2 className="flex flex-col sm:flex-row sm:items-end sm:space-x-2 text-2xl font-bold py-2 border-b-2 border-gray-200 mb-4 lg:mb-8 dark:border-gray-700">
                        <span className="inline-flex items-center space-x-2">
                            <svg className="hi-mini hi-paper-clip inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" /></svg>
                            <span>Kriminalregister</span>
                        </span>
                        <span className="font-medium text-lg text-gray-600 dark:text-gray-400">| Valdemar Larsen</span>
                    </h2>

                    {/* END Heading */}

                    {/* Product */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
                        {/* Product Main Info */}
                        <div className="md:col-span-3">
                            {/* Card Headings: Alle Sigtelser */}
                            <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-800">
                                {/* Card Header */}
                                <div className="py-4 px-5 bg-gray-50 dark:bg-gray-700/50">
                                    <h3 className="font-semibold mb-1">
                                        Tidligere sigtelser
                                    </h3>
                                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        Et overblik over alle tidligere sigtelser for:
                                    </h4>
                                </div>
                                {/* END Card Header */}

                                {/* Card Body */}
                                <div className="p-5 grow">
                                    {/* Placeholder */}

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
                                                    <td className="p-3 text-center space-x-2">
                                                        {/* Rød knap: Slet */}
                                                        <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-red-500 bg-red-500 text-white hover:border-red-600 hover:bg-red-600 focus:ring focus:ring-red-500 focus:ring-opacity-25 active:border-red-500">
                                                            Slet
                                                        </button>

                                                        {/* Blå knap: Se sag */}
                                                        <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-blue-500 bg-blue-500 text-white hover:border-blue-600 hover:bg-blue-600 focus:ring focus:ring-blue-500 focus:ring-opacity-25 active:border-blue-500">
                                                            Se sag
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
                                                    <td className="p-3 text-center space-x-2">
                                                        {/* Rød knap: Slet */}
                                                        <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-red-500 bg-red-500 text-white hover:border-red-600 hover:bg-red-600 focus:ring focus:ring-red-500 focus:ring-opacity-25 active:border-red-500">
                                                            Slet
                                                        </button>

                                                        {/* Blå knap: Se sag */}
                                                        <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-blue-500 bg-blue-500 text-white hover:border-blue-600 hover:bg-blue-600 focus:ring focus:ring-blue-500 focus:ring-opacity-25 active:border-blue-500">
                                                            Se sag
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
                                                    <td className="p-3 text-center space-x-2">
                                                        {/* Rød knap: Slet */}
                                                        <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-red-500 bg-red-500 text-white hover:border-red-600 hover:bg-red-600 focus:ring focus:ring-red-500 focus:ring-opacity-25 active:border-red-500">
                                                            Slet
                                                        </button>

                                                        {/* Blå knap: Se sag */}
                                                        <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-blue-500 bg-blue-500 text-white hover:border-blue-600 hover:bg-blue-600 focus:ring focus:ring-blue-500 focus:ring-opacity-25 active:border-blue-500">
                                                            Se sag
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
                                                    <td className="p-3 text-center space-x-2">
                                                        {/* Rød knap: Slet */}
                                                        <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-red-500 bg-red-500 text-white hover:border-red-600 hover:bg-red-600 focus:ring focus:ring-red-500 focus:ring-opacity-25 active:border-red-500">
                                                            Slet
                                                        </button>

                                                        {/* Blå knap: Se sag */}
                                                        <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-blue-500 bg-blue-500 text-white hover:border-blue-600 hover:bg-blue-600 focus:ring focus:ring-blue-500 focus:ring-opacity-25 active:border-blue-500">
                                                            Se sag
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
                                                    <td className="p-3 text-center space-x-2">
                                                        {/* Rød knap: Slet */}
                                                        <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-red-500 bg-red-500 text-white hover:border-red-600 hover:bg-red-600 focus:ring focus:ring-red-500 focus:ring-opacity-25 active:border-red-500">
                                                            Slet
                                                        </button>

                                                        {/* Blå knap: Se sag */}
                                                        <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-blue-500 bg-blue-500 text-white hover:border-blue-600 hover:bg-blue-600 focus:ring focus:ring-blue-500 focus:ring-opacity-25 active:border-blue-500">
                                                            Se sag
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            {/* END Table Body */}
                                        </table>
                                        {/* END Table */}
                                    </div>
                                    {/* END Responsive Table Container */}


                                </div>
                                {/* Card Body */}
                            </div>
                            {/* END Card Headings: Title with Subtitle */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 py-5 space-y-2 sm:space-y-0 sm:space-x-2">
                                <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                                    <svg className="hi-mini hi-computer-desktop inline-block w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z" clipRule="evenodd" /></svg>
                                    <span>Live Preview</span>
                                </button>
                                <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                                    <svg className="hi-mini hi-share inline-block w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M13 4.5a2.5 2.5 0 11.702 1.737L6.97 9.604a2.518 2.518 0 010 .792l6.733 3.367a2.5 2.5 0 11-.671 1.341l-6.733-3.367a2.5 2.5 0 110-3.475l6.733-3.366A2.52 2.52 0 0113 4.5z" /></svg>
                                    <span>Share</span>
                                </button>
                            </div>
                            <div className="prose prose-indigo dark:prose-invert">
                                <p>
                                    Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac cursus nibh sapien in purus. Mauris tincidunt tincidunt turpis in porta. Integer fermentum tincidunt auctor.
                                </p>
                                <p>
                                    Consectetur adipiscing elit. Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac cursus nibh sapien in purus. Mauris tincidunt tincidunt turpis in porta integer.
                                </p>
                                <p>
                                    Urna ligula hendrerit nibh, ac cursus nibh sapien in purus. Mauris tincidunt tincidunt turpis in porta. Integer fermentum tincidunt.
                                </p>
                                <ul>
                                    <li>
                                        Fully Responsive
                                    </li>
                                    <li>
                                        Support for all major browsers
                                    </li>
                                    <li>
                                        10 Layouts
                                    </li>
                                    <li>
                                        Laravel and Vue versions
                                    </li>
                                </ul>
                                <p>
                                    Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac cursus nibh sapien in purus. Mauris tincidunt tincidunt turpis in porta integer.
                                </p>
                            </div>
                        </div>
                        {/* END Product Main Info */}

                        {/* Product Info Sidebar */}
                        <div className="md:col-span-2 space-y-4">
                            <div className="p-5 bg-gray-100 rounded-lg dark:bg-gray-700/50">
                                <div className="text-2xl font-semibold pb-2">
                                    OPRET NY SAG
                                </div>
                                <hr className="dark:border-gray-700/75" />

                                <div className="flex flex-col space-y-2">
                                    <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                                        <svg className="hi-mini hi-shopping-cart inline-block w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg>
                                        <span>Opret sag</span>
                                    </button>
                                    <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90">
                                        Opret Køretøj
                                    </button>
                                    <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90">
                                        Opret Efterlysning
                                    </button>
                                </div>
                            </div>
                            <div className="p-5 bg-gray-100 rounded-lg dark:bg-gray-700/50">
                                <span className="text-xl font-bold">Udstående Regninger | </span> 75.000 DKK
                            </div>
                            <div className="p-5 bg-gray-100 rounded-lg dark:bg-gray-700/50">
                                <span className="text-xl font-bold">Antal Sager | </span> 25
                            </div>
                            <div className="p-2 bg-gray-100 rounded-lg dark:bg-gray-700/50">
                                {/* List Groups: Links with Text */}
                                <nav className="border border-gray-200 rounded-lg bg-white divide-y divide-gray-200 overflow-hidden dark:text-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700">
                                    <a href="#" className="p-4 flex justify-between items-center text-gray-700 hover:text-gray-700 hover:bg-gray-50 active:bg-white dark:text-gray-200 dark:hover:bg-gray-800/50 dark:active:bg-gray-900">
                                        <span className="font-semibold text-sm mr-1">Efterlyst </span> <span className="font-medium text-red-500 text-sm dark:text-red-400">Har en aktiv efterlysning</span>
                                    </a>
                                    <a href="#" className="p-4 flex justify-between items-center text-gray-700 hover:text-gray-700 hover:bg-gray-50 active:bg-white dark:text-gray-200 dark:hover:bg-gray-800/50 dark:active:bg-gray-900">
                                        <span className="font-semibold text-sm mr-1">Gyldigt Kørekort</span> <span className="font-medium text-emerald-500 text-sm dark:text-emerald-400">Har et aktivt kørekort</span>
                                    </a>
                                    <a href="#" className="p-4 flex justify-between items-center text-gray-700 hover:text-gray-700 hover:bg-gray-50 active:bg-white dark:text-gray-200 dark:hover:bg-gray-800/50 dark:active:bg-gray-900">
                                        <span className="font-semibold text-sm mr-1">Mobile Application</span> <span className="font-medium text-emerald-500 text-sm dark:text-emerald-400">Operational</span>
                                    </a>
                                    <a href="#" className="p-4 flex justify-between items-center text-gray-700 hover:text-gray-700 hover:bg-gray-50 active:bg-white dark:text-gray-200 dark:hover:bg-gray-800/50 dark:active:bg-gray-900">
                                        <span className="font-semibold text-sm mr-1">API</span> <span className="font-medium text-emerald-500 text-sm dark:text-emerald-400">Operational</span>
                                    </a>
                                    <a href="#" className="p-4 flex justify-between items-center text-gray-700 hover:text-gray-700 hover:bg-gray-50 active:bg-white dark:text-gray-200 dark:hover:bg-gray-800/50 dark:active:bg-gray-900">
                                        <span className="font-semibold text-sm mr-1">Documentation</span> <span className="font-medium text-emerald-500 text-sm dark:text-emerald-400">Operational</span>
                                    </a>
                                </nav>
                                {/* END List Groups: Links with Text */}

                            </div>
                            <div className="p-5 bg-gray-100 rounded-lg text-sm space-y-3 dark:bg-gray-700/50">
                                <div className="flex space-x-2">
                                    <div className="w-1/2 font-medium">Fuldenavn</div>
                                    <div className="w-1/2">Valdemar Larsen</div>
                                </div>
                                <div className="flex space-x-2">
                                    <div className="w-1/2 font-medium">Fødselsato</div>
                                    <div className="w-1/2">January 10, 2000</div>
                                </div>
                                <div className="flex space-x-2">
                                    <div className="w-1/2 font-medium">Oprettet i kr</div>
                                    <div className="w-1/2">January 10, 2023 | Thorkild Blix</div>
                                </div>
                                <div className="flex space-x-2">
                                    <div className="w-1/2 font-medium">Compatible With</div>
                                    <div className="w-1/2">Tailwind CSS</div>
                                </div>
                                <div className="flex space-x-2">
                                    <div className="w-1/2 font-medium">Documentation</div>
                                    <div className="w-1/2">Well Documented</div>
                                </div>
                                <div className="flex space-x-2">
                                    <div className="w-1/2 font-medium">Tags</div>
                                    <div className="w-1/2">
                                        <div>
                                            {/* Red */}
                                            <div className="font-semibold inline-flex px-2 py-1 leading-4 text-sm rounded-full text-red-700 bg-red-200">Opmærksom</div>
                                        </div>
                                        <div>
                                            {/* Red */}
                                            <div className="font-semibold inline-flex px-2 py-1 leading-4 text-sm rounded-full text-green-700 mt-2 bg-green-200">Badge</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END Product Info Sidebar */}
                    </div>
                </div>
            </div>
            {/* END Product Details Section: With Info Sidebar */}
        </>
    )
}