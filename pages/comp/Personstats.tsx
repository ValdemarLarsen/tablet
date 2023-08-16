

export default function FrontChatCard() {
  return (
    <>
      {/* Statistics: Bordered with Info and Action */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
        {/* Card */}
        <a href="#" className="flex flex-col rounded-lg border bg-white hover:border-gray-300 active:border-blue-300 dark:text-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:active:border-blue-700">
          <div className="p-5 grow flex justify-between items-center">
            <dl>
              <dt className="text-2xl font-bold">
                8
              </dt>
              <dd className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Sager Oprettet
              </dd>
            </dl>
            <div className="flex justify-center items-center rounded-xl w-12 h-12 text-blue-500 bg-blue-50 border border-blue-100 dark:text-blue-100 dark:bg-blue-900 dark:bg-opacity-25 dark:border-blue-900">
              <svg className="hi-outline hi-presentation-chart-line w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" /></svg>
            </div>
          </div>
          <div className="py-3 px-5 text-xs font-medium text-gray-500 border-t border-gray-100 dark:text-gray-400 dark:border-gray-700/50">
            <p>
              Siden ansat i politiet
            </p>
          </div>
        </a>
        {/* END Card */}

        {/* Card */}
        <a href="#" className="flex flex-col rounded-lg border bg-white hover:border-gray-300 active:border-blue-300 dark:text-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:active:border-blue-700">
          <div className="p-5 grow flex justify-between items-center">
            <dl>
              <dt className="text-2xl font-bold">
                250.000 DKK
              </dt>
              <dd className="text-sm font-medium text-gray-500 dark:text-gray-400">
                I Bøder
              </dd>
            </dl>
            <div className="flex justify-center items-center rounded-xl w-12 h-12 text-blue-500 bg-blue-50 border border-blue-100 dark:text-blue-100 dark:bg-blue-900 dark:bg-opacity-25 dark:border-blue-900">
            <svg className="bi bi-piggy-bank-fill inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595Zm7.173 3.876a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199Zm-8.999-.65a.5.5 0 1 1-.276-.96A7.613 7.613 0 0 1 7.964 3.5c.763 0 1.497.11 2.18.315a.5.5 0 1 1-.287.958A6.602 6.602 0 0 0 7.964 4.5c-.64 0-1.255.09-1.826.254ZM5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/></svg>
            </div>
          </div>
          <div className="py-3 px-5 text-xs font-medium text-gray-500 border-t border-gray-100 dark:text-gray-400 dark:border-gray-700/50">
            <p>
              Siden ansat i politiet
            </p>
          </div>
        </a>
        {/* END Card */}

        {/* Card */}
        <a href="#" className="flex flex-col rounded-lg border bg-white hover:border-gray-300 active:border-blue-300 dark:text-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:active:border-blue-700">
          <div className="p-5 grow flex justify-between items-center">
            <dl>
              <dt className="text-2xl font-bold">
                12
              </dt>
              <dd className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Oprettet efterlysninger
              </dd>
            </dl>
            <div className="flex justify-center items-center rounded-xl w-12 h-12 text-blue-500 bg-blue-50 border border-blue-100 dark:text-blue-100 dark:bg-blue-900 dark:bg-opacity-25 dark:border-blue-900">
              <svg className="hi-outline hi-users inline-block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
            </div>
          </div>
          <div className="py-3 px-5 text-xs font-medium text-gray-500 border-t border-gray-100 dark:text-gray-400 dark:border-gray-700/50">
            <p>
              Siden ansat i politiet
            </p>
          </div>
        </a>
        {/* END Card */}
      </div>
      {/* END Statistics: Bordered with Info and Action */}
    </>
  )
}

