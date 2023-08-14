import React, { useEffect } from 'react';

const Layout: React.FC = ({ children }) => {
    useEffect(() => {
        window.addEventListener("message", handleNuiMessage);

        function handleNuiMessage(event) {
            const message = event.data;

            if (message.type === "display") {
                if (message.status) {
                    // Vis NUI
                    document.body.style.display = "block";
                } else {
                    // Skjul NUI
                    document.body.style.display = "none";
                }
            }
        }

        // Oprydning
        return () => {
            window.removeEventListener("message", handleNuiMessage);
        };
    }, []);

    return <>{children}</>;
}

export default Layout;