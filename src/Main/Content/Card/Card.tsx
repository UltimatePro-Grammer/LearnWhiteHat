import React from 'react';
import { useLocation } from 'wouter';
import './Card.css';
import Tag from './Tag/Tag';

const Card = (props: {title: string, tags: string[], difficulty: string, html?:string})=>{
    const setLocation = useLocation()[1];

    const urlFormat = (toFormat: string)=>{ // %20 makes urls look ugly, so this is the solution
        return encodeURIComponent(toFormat.replace(/ /g, "-"));
    }
    const go = ()=>{
        setLocation("/c/"+urlFormat(props.title));
    }
    const goKeyboard = (event: React.KeyboardEvent<HTMLDivElement>)=>{
        if(event.key === "Space" || event.key === "Enter") {
            go();
        }
    }

    return (
        <div className="Card" role="button" tabIndex={0} onClick={go} onKeyDown={goKeyboard}>
            <h1>{props.title}</h1>
            <p>Content goes here Content goes here Content goes here Content goes here Content goes here Content goes here</p>
            <iframe className="preview" tabIndex={-1} srcDoc={props.html} title="Challenge Preview">Your browser does not support LearnWhiteHat</iframe>
            <div className="tag-container">
                {props.tags.map((val)=>{
                    return <Tag tagName={val} key={val} />  
                })}
                <Tag tagName={props.difficulty} color={`var(--${props.difficulty.toLowerCase()})`} />
            </div>
        </div>
    )
}
    

export default Card;