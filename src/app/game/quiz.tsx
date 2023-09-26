import { ReactNode, useState } from "react";
import { Question } from "./services";
import { CustomButton, SelectButton } from "./start";

export function Quiz(props: {questions: Question[], setGameState: (_:string)=>void, score: number, setScore: (_: number)=>void}): ReactNode {

    const [selected, setSelected] = useState(props.questions[0].choices[0])
    const [questionNo, setQuestionNo] = useState(0)

    const next = () => {
        let choice = props.questions[questionNo].choices[props.questions[questionNo].answer]
        if(selected == choice){ props.setScore(props.score + 1);}
        if(props.questions[questionNo + 1] == undefined){ props.setGameState('finished') }
        setQuestionNo(questionNo + 1)
    }

    return (
        <div className="w-full flex flex-col items-center mt-48 justify-center">
            <p className="text-4xl text-white">Score : {props.score}</p>
            <p className="text-4xl font-bold mt-10 text-green">{questionNo}. {props.questions[questionNo].question}</p>
            <div className="w-full flex flex-col flex-wrap h-64 content-center justify-center">
                <SelectButton className="m-5" name={props.questions[questionNo].choices[0]} selected={selected} setSelected={setSelected}/>
                <SelectButton className="m-5" name={props.questions[questionNo].choices[1]} selected={selected} setSelected={setSelected}/>
                <SelectButton className="m-5" name={props.questions[questionNo].choices[2]} selected={selected} setSelected={setSelected}/>
                <SelectButton className="m-5" name={props.questions[questionNo].choices[3]} selected={selected} setSelected={setSelected}/>
            </div>
            <CustomButton className="" title="NEXT" onClick={next}/>
        </div>
    )   
}

