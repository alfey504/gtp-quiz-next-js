import { ReactNode } from "react";

export function BadTopic(props: {topic: string}): ReactNode{

    return (
        <div className="flex flex-col justify-center items-center mt-80">
            <div className="text-center text-3xl font-bold">Oops! looks like ChatGPT is not familiar with the topic {props.topic} </div>
            <a href="/game" className="mt-10 border border-black pr-5 pl-5 pt-2 pb-2 rounded-xl hover:bg-black hover:text-white">Go back</a>
        </div>
    )
}