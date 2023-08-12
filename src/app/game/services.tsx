

export type Question = {
    question: string,
    choices: string[],
    answer: number
}

export function getQuestions(topic: string, difficulty: string): Question[] {

    const question1: Question = {
        question: "Who is the father of the Nation",
        choices: ['Sasi', "Gandhi", "Soman", "Raju"],
        answer: 2
    }

    const question2: Question = {
        question: "What is the national flower",
        choices: ['Lotus', "tulips", "rose", "sunflower"],
        answer: 1
    }

    const question3: Question = {
        question: "what is the name of the prtagonist in chainsaw man",
        choices: ['Denji', "Makima", "Yui", "Yuko"],
        answer: 1
    }

    return [question1, question2, question3]
}

export function verifyTopic(topic: string): boolean {
    return topic!='sasi'
}