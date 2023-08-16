import Realnav from './Realnav'


export default function Sogkr( { href }) {
    return (
        <>
            <Realnav />
            <div className="flex items-center justify-center h-screen">
                <div className="relative">
                    <div className="space-y-1">
                        <label htmlFor="primary_large" className="font-medium">Søg efter en person i kr <span className="font-normal text-gray-500 dark:text-gray-400">(large input)</span></label>
                        <div className="flex items-center">
                            <input type="text" id="primary_large" name="primary_large" placeholder="Name" className="grow focus:z-1 w-full block border placeholder-gray-500 px-5 py-3 leading-6 rounded-l-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-blue-500 dark:placeholder-gray-400" />
                            <button type="button" className="flex-none -ml-px inline-flex justify-center items-center space-x-2 border font-semibold rounded-r-lg px-6 py-3 leading-6 border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90">
                                Søg Person
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}