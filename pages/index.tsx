import React from 'react';



export default function Home() {
    const [hasData, setHasData] = React.useState(false);

    React.useEffect(() => {
        // Her kan du lytte efter data fra din backend eller en hvilken som helst anden kilde.
        // Som en simpel demonstration bruger jeg setTimeout for at efterligne det:
        setTimeout(() => {
            setHasData(true);
        }, 5000); // Efter 5 sekunder vil indholdet blive synligt
    }, []);

    return (
        <div className={`h-screen w-full ${hasData ? 'bg-white' : 'bg-transparent'}`}>
            {hasData ? "Her er dataen!" : null}
        </div>
    );
}
