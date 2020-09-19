import React from 'react';
import './Tag.css';

const Tag = (props: {tagName: string, color?: string})=>{
    return (
        <button className="Tag unselectable" style={{backgroundColor: props.color}}>
            {props.tagName}
        </button>
    )
}
    

export default Tag;