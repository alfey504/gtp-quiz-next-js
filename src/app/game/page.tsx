"use client"

import {ReactNode, useState} from 'react'
import { Start } from './start'
import { Question, getQuestions, verifyTopic } from './services'
import { BadTopic } from './bad-topic'
import { Quiz } from './quiz'

export default function Game() {
    const [difficulty, setDifficulty] = useState('EASY')
    const [topic, setTopic] = useState('')
    const [gameState, setGameState] = useState('start')
    const [score, setScore] = useState(0)

    let questions: Question[] = getQuestions(topic, difficulty)

    function setDiff(diff: string){
        console.log(diff)
        setDifficulty(diff)
    }

    function startGame() {
        if(verifyTopic(topic)){
            setGameState('quiz')
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
                <div>game finished</div>
            }
        </main>
    )
}

