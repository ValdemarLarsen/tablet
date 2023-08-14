import Head from "next/head"
import { useState } from 'react';
import { Provider, useDispatch, useSelector } from "react-redux"
import { setButtonClicked } from "../state/reducers/app"
import store, { RootState } from "../state/store"
import WindowListener from "../utils/WindowListener"
import { useRouter } from 'next/router';
import { sendNuiCallback } from '../utils/NuiCallbacks';
import { useTheme } from "next-themes";

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
    const { theme, setTheme } = useTheme()
    const buttonClicked = useSelector((state: RootState) => state.app.buttonClicked)


    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Forhindrer formen i at genindlæse siden

        sendNuiCallback("/indhenterBrugere", { email, password }, (result) => {


            window.addEventListener('message', (event) => {
                console.log(event.data.type);
            });

            if (result.bolean) {
                console.log("vi er gucci?")
                router.push('/forside')
            } else {
                console.log("prøv igen..")
            }
        });
    }

    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen bg-opacity-0 bg-black">
            <div className="p-12 bg-gray-200 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Log ind</h1>
                <button
                    className={`w-fit absolute right-5 top-2 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                    {theme === "light" ? "Dark" : "Light"}
                </button>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border rounded-md"
                            placeholder="Din email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">Kodeord:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border rounded-md"
                            placeholder="Dit kodeord"
                        />
                    </div>
                    <button
                        type="submit"
                        className="daisy-btn daisy-btn-primary"
                    >
                        Log ind
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Homepage