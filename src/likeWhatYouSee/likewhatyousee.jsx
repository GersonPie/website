import { useState } from 'react'
import { assets } from '../assets/assets'
import './likewhatyousee.css'
import { useEffect } from 'react'

export const Lwus = ()=>{
    
    const [info, setInfo] = useState('How about we land our spaceship in your project aircraft?')
    const [count, setCount] = useState(1)
    let isReversing =false;

    useEffect(()=>{
        if(count === info.length){
            isReversing=true
            let interval = setInterval(()=>{
                setCount(count-1)
                if(count === 0){
                    clearInterval(count)
                }
            },500)
        }
        else{
            if(!isReversing)setTimeout(()=>setCount(count+1),100)
        }
    }, [count])
    return(
        <div className="lwus">
            <div className="lwus-left-side">
                <img src={assets.image1} />
            </div>
            <div className="lwus-right-side">
                <h2>Like what you see?</h2>
                <p>{info.slice(0,count)}</p>
            </div>

        </div>
    )
}