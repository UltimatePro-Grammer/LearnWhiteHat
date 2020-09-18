import React from 'react';
import XP from './XP/XP';
import './LevelContainer.css';
import useLevel from "../../../zustand/level"
const LevelContainer = (props: {width?: string})=>{
    const level = useLevel(state => state.currentLevel);
    const xp = useLevel(state => state.currentXP);
    const maxXP = useLevel(state => state.maxXP);
    return (
        <div className="LevelContainer">
            <h1>Level {level}</h1>
            <p>{xp}/{maxXP}</p>
            <XP xp={xp/maxXP*100} width={props.width || undefined} />
        </div>
    )
}
export default LevelContainer;