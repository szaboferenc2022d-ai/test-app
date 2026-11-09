export function szoveg({kattint}){
    <p>ez egy kiirás</p>
}

export function gombok(){
    return(
        <>
        <h1>Hello Word</h1>
        <button onClick={kattint}>1</button>
        <p>{szoveg(kattint)}</p>
        </>
    )
} 