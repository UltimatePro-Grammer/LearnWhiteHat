import React from 'react';
import { useLocation } from 'wouter';
import './Tag.css';

const Tag = (props: {tagName: string, color?: string})=>{
    const setLocation = useLocation()[1];
    const go = (event: {stopPropagation: Function})=>{
        setLocation("/t/"+encodeURIComponent(props.tagName));
        event.stopPropagation();
    }
    const goKeyboard = (event: React.KeyboardEvent<HTMLButtonElement>)=>{
        if(event.key === "Space" || event.key === "Enter") {
            go({stopPropagation: event.stopPropagation});
        }
    }
    return (
        <button className="Tag unselectable" style={{backgroundColor: props.color}} onClick={go} onKeyDown={goKeyboard}>
            {props.tagName}
        </button>
    )
}
    

export default Tag;