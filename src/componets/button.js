import { useState } from "react";

export const Button =(props)=>{

    //timmer to update the file
    const [button_text, update_button_text] = useState(props.text1);
    
    setTimeout(()=>{
        button_text == props.text1 ? update_button_text(props.text0) : update_button_text(props.text1);
    }, props.timer == undefined ? 6000 : props.timer);

    return <button className={props.class_name}> {button_text}</button>
}