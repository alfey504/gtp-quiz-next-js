"use client"

import {ReactNode, useState} from 'react'
import { Start } from './start'
import { Question, getQuestions, verifyTopic } from './services'
import { BadTopic } from './bad-topic'
import { Quiz } from './quiz'
import { GameEnd } from './game-end'
import ErrorNode  from './error'
import LoadingNode from './loading'

export default function Game() {
    const [difficulty, setDifficulty] = useState('EASY')
    const [topic, setTopic] = useState('')
    const [gameState, setGameState] = useState('start')
    const [score, setScore] = useState(0)
    const [questions, setQuestions] = useState([{"question": "temp", choices: [""], answer: 0}])
    

    const setDiff = (diff: string) => {
        console.log(diff)
        setDifficulty(diff)
    }

    const getQuestionsFromService = () => {
        setGameState('loading')
        let questionsPromise = getQuestions(topic, difficulty)
        questionsPromise.then((questionsVal) => {
            setQuestions(questionsVal)
            setGameState('quiz')
        }).catch((error)=> {
            console.log(error)
            setGameState('error')
        })
    }

    const startGame = () => {
        if(verifyTopic(topic)){
           getQuestionsFromService()
        }else{
            setGameState('bad-topic')
        }
    }

    return(
        <main>
            { gameState == 'start' &&
                <Start topic={topic} setTopic={setTopic} difficulty={difficulty} setDifficulty={setDiff} startGame={startGame}/>
            }
            {gameState == 'quiz' &&
                <Quiz questions={questions} setGameState={setGameState} score={score} setScore={setScore}/>
            }
            {gameState == 'bad-topic' &&
                <BadTopic topic={topic} />
            }
            {gameState == 'finished' &&
                <GameEnd score={score}/>
            }{gameState == 'error' &&
                <ErrorNode tryAgain={()=>getQuestionsFromService()}/>
            }{gameState == 'loading' &&
                <LoadingNode/>
            }
        </main>
    )
}

