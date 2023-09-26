"use client"

import { ReactNode, useState } from "react";

export default function LoadingNode(): ReactNode {

    const [loadingDots, setLoadingDots] = useState('')

    const seconds = 1
    setInterval(()=> {
        if(loadingDots.length == 3){
            setLoadingDots("")
        }else{
            setLoadingDots(loadingDots + ".")
        }
    }, seconds * 1000)

    return (
        <main className="flex flex-col justify-center items-center">
            <div className="text-4xl flex justify-center mt-80 text-white">Generating questions from ChatGPT please wait</div>
            <div className="text-4xl flex justify-center mt-80 text-white">{loadingDots}</div>
        </main>
    )
}