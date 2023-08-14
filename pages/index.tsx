import Head from "next/head"
import { Provider, useDispatch, useSelector } from "react-redux"
import { setButtonClicked } from "../state/reducers/app"
import store, { RootState } from "../state/store"
import WindowListener from "../utils/WindowListener"
import { useRouter } from 'next/router';


const Homepage = () => (
    <>
        <Head>
            <title>{process.env.RESOURCE_NAME}</title>
        </Head>
        <Provider store={store}>
            <WindowListener>

                <HomepageContent />
            </WindowListener>
        </Provider>
    </>
)

const HomepageContent = () => { // TO AVOID https://i.imgur.com/798mUI4.png (FOR DEMO PUPOSES ONLY)
    const dispatch = useDispatch()

    const buttonClicked = useSelector((state: RootState) => state.app.buttonClicked)


    const router = useRouter();

    const handleClick = () => {
        // Her antager jeg, at du ønsker at navigere til "/om"-siden.
        router.push('/forside');
        // Hvis du bruger Redux og ønsker at dispatche en action når knappen klikkes, kan du gøre det her:
        // dispatch(setButtonClicked(true));
    }

    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen bg-opacity-50 bg-black">
            <div className="p-8 bg-gray-200 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Log ind</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 border rounded-md"
                            placeholder="Din email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">Kodeord:</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-2 border rounded-md"
                            placeholder="Dit kodeord"
                        />
                    </div>
                    <button
                        type="submit"
                        className="daisy-btn daisy-btn-primary"
                        onClick={handleClick}
                    >
                        Log ind
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Homepage