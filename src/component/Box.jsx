import { useState } from "react";

export function szoveg({kattint}){
    <p>ez egy kiirás</p>
}


export function gombok(){
    return(
        <>
        <button onClick={kattint}>1</button>
        <p>{szoveg(kattint)}</p>
        </>
    )
} 