import React from 'react';
import './Card.css';
import Tag from './Tag/Tag';

const Card = (props: {title: string, tags: string[], difficulty: string, html?:string})=>{
    return (
        <div className="Card" role="button">
            <h1 tabIndex={0}>{props.title}</h1>
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