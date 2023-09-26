import { ReactNode } from "react"

export function Start(props: {topic: string, setTopic:(topic: string)=>void, difficulty: string, setDifficulty: (difficulty: string)=>void, startGame: ()=>void}): ReactNode {

    return (
        <div className="mt-28 flex flex-col items-center">
            <form className='flex flex-col items-center'>
                <div className='flex flex-col items-center'>
                    <text className="text-green text-3xl font-bold">GPTQUIZ</text>
                    <label className='text-xl font-bold text-green mt-10'>ENTER A TOPIC</label>
                    <input className='h-10 w-80 mt-2 p-2 text-xl border border-white rounded-lg bg-transparent text-white focus:border-green-900 selection:bg-transparent' type="text" name="topic" onChange={(event)=> props.setTopic(event.target.value)}/>
                </div>
                <text className='mt-10 font-bold text-xl text-green'>CHOOSE DIFFICULTY</text>
                <div className='mt-10 flex flex-row w-1/2 justify-between'>
                    <SelectButton className='' name='EASY' selected={props.difficulty} setSelected={props.setDifficulty}/>
                    <SelectButton className='' name='MEDIUM' selected={props.difficulty} setSelected={props.setDifficulty}/>
                    <SelectButton className='' name='HARD' selected={props.difficulty} setSelected={props.setDifficulty}/>
                </div>
                <CustomButton className="mt-10" title="START GAME" onClick={props.startGame}/>
            </form>
        </div>
    )
}

export function SelectButton(props: {name: string, selected: string, className:string,setSelected: (selected: string)=>void}): ReactNode{
    if(props.selected === props.name){
        return <button type="button" className={'border border-green bg-green text-white p-2 pr-3 pl-3 w-96 h-12 text-center mr-5 ml-5 rounded-3xl shadow-lg ' + props.className} onClick={() => props.setSelected(props.name)}>{props.name}</button>  
    }else{
        return <button type="button" className={'border border-white text-white p-2 pr-3 pl-3 w-96 h-12 text-center mr-5 ml-5 rounded-3xl hover:bg-white hover:text-black ' + props.className} onClick={() => props.setSelected(props.name)}>{props.name}</button>
    }
}

export function CustomButton(props: {className: string, title:string, onClick: ()=> void}){
    const {className, title, onClick} = props
    return <div className={className}><button type="button" className="border border-white text-white p-2 pr-3 pl-3 w-96 h-12 text-center  rounded-xl hover:bg-white hover:text-black" onClick={onClick}>{title}</button></div>
}