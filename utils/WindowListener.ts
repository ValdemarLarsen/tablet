import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendNuiCallback } from './NuiCallbacks';

const WindowListener = ({children}) => {
    const dispatch = useDispatch();
    
    const escFunction = useCallback((event) => {
        if (event.key === "Escape") {
            test()
            //sendNuiCallback("/close", {}, (result) => {})
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);

    useEffect(() => {
        window.addEventListener('message', (event) => {
            const { type, data }: { type: string, data: any } = event.data
            if (type && (type != "ACTION" && type != "PARTIAL_STATE")) {
                dispatch({type, payload: data});
            }
        });
        
    })
    return children;
}

const test = async () => {
    console.log(process.env.RESOURCE_NAME)
    // await fetch(`/api/hello`, {
    //             method: 'POST',
    //             headers: {
    //               'Content-Type': 'application/json; charset=UTF-8'
    //             },
    //         })
    //         .then((res) => {
    //             res.json().then((data) => {
    //                 console.log(data)
    //             })
    //         })
}

export default WindowListener;