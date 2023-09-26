import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi} from 'openai'

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const topic = searchParams.get('topic')
    const difficulty = searchParams.get('difficulty')

    if(topic == null || difficulty == null){
        return NextResponse.json({
            success: 0,
            data: "missing parameters"
        })
    }

    try {
        const config = new Configuration({
            apiKey: process.env.OPENAI_API_KEY
        });
        const openai = new OpenAIApi(config)
    
        const prompt = getPrompt(topic, difficulty)
        
        const chatCompletion = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{role: 'user', content: prompt}]
        })
        const jsonValue = JSON.parse(chatCompletion.data.choices[0].message?.content!)
        console.log(jsonValue)
    
        return NextResponse.json({
            success: 1,
            data: jsonValue
        })
    }catch (error){
        console.log(error)
        return NextResponse.json({
            success: 0,
            data: "Unexpected error"
        })
    }
    
}

const getPrompt = (topic: string, difficulty: string): string => {
    return("give me 10 mcq quiz questions with 4 choices on "+ topic + " with a "+ difficulty + " in a JSON format with the format being [{'question': 'the question1, 'choices': [choice1, choice2 .. choice4], answer: index of the right choice in array}...] and make sure the questions don't repeat")
}