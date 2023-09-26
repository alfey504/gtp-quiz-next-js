import { ReactNode } from "react"

export function GameEnd(props: {
    score: number
}): ReactNode {

    let {score} = props
    return (
        <main>
            <p className="text-4xl flex justify-center font-bold mt-80 text-white">Game Finished your score is {score} </p>
        </main>
    )
}