"use client"

import { ReactNode } from "react"
import { CustomButton } from "./start"

export default function ErrorNode(props: {
    tryAgain: ()=>void
}): ReactNode {

    let {tryAgain} = props
    return (
        <main className="flex flex-col items-center justify-center mt-80">
            <p className="text-4xl flex justify-center font-bold font-green">Oops there was an error</p>
            <CustomButton className="mt-5" onClick={tryAgain} title='TRY AGAIN'/>
        </main>
    )
}