import { ReactNode } from "react"

export function Start(props: {topic: string, setTopic:(topic: string)=>void, difficulty: string, setDifficulty: (difficulty: string)=>void, startGame: ()=>void}): ReactNode {

    return (
        <div className="mt-28 flex flex-col items-center">
            <form className='flex flex-col items-center'>
                <div className='flex flex-col items-center'>
                    <label className='text-xl font-bold'>ENTER A TOPIC</label>
                    <input className='h-10 w-80 mt-2 p-2 text-xl border border-green-800 rounded-lg' type="text" name="topic" onChange={(event)=> props.setTopic(event.target.value)}/>
                </div>
                <text className='mt-10 font-bold text-xl'>CHOOSE DIFFICULTY</text>
                <div className='mt-10 flex flex-row w-1/2 justify-between'>
                    <SelectButton name='EASY' selected={props.difficulty} setSelected={props.setDifficulty}/>
                    <SelectButton name='MEDIUM' selected={props.difficulty} setSelected={props.setDifficulty}/>
                    <SelectButton name='HARD' selected={props.difficulty} setSelected={props.setDifficulty}/>
                </div>
                <text>{props.difficulty}</text>
                <CustomButton title="START GAME" onClick={props.startGame}/>
            </form>
        </div>
    )
}

export function SelectButton(props: {name: string, selected: string, setSelected: (selected: string)=>void}): ReactNode{
    if(props.selected === props.name){
        return <button type="button" className='border border-black bg-black text-white p-2 pr-3 pl-3 w-96 h-12 text-center m-5 rounded-3xl hover:bg-black hover:text-white' onClick={() => props.setSelected(props.name)}>{props.name}</button>  
    }else{
        return <button type="button" className='border border-black text-black p-2 pr-3 pl-3 w-96 h-12 text-center m-5 rounded-3xl hover:bg-black hover:text-white' onClick={() => props.setSelected(props.name)}>{props.name}</button>
    }
}

export function CustomButton(props: {title:string, onClick: ()=> void}){
    return <button type="button" className='border mt-10 border-black text-black p-2 pr-3 pl-3 w-96 h-12 text-center m-5 rounded-xl hover:bg-black hover:text-white' onClick={props.onClick}>{props.title}</button>
}