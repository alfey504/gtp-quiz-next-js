

export type Question = {
    question: string,
    choices: string[],
    answer: number
}

export async function getQuestions(topic: string, difficulty: string): Promise<Question[]> {
    const res =  await getQuestionsFromApi(topic, difficulty)
    let questions: Question[] = []
    res.data.forEach((element: any) => {
        let question = {
            question: element.question,
            choices: element.choices,
            answer: element.answer
        }
        questions.push(question)
    });
    return questions
}

async function getQuestionsFromApi(topic: string, difficulty: string): Promise<any> {
    try{
        const res = await fetch('/api/hello?topic='+ topic + '&difficulty=' + difficulty)
        const data = await res.json();
        return data
    }catch(error: any){
        console.log(error)
        return "rand"
    }
}

export function verifyTopic(topic: string): boolean {
    return topic!='sasi'
}