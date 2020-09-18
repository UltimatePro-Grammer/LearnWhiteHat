import React from 'react';
import './XP.css';

class XP extends React.Component<{xp: number, width?: string}, {}> {
    render() {
        return (
            <div className="XP" data-percent="50%" style={{width: this.props.width}}>
                <div className="svg-container">
                    {/* SVG and some CSS from https://www.cssscript.com/animated-circular-progress-bar-using-svg-path-animation/ */}
                    <svg viewBox="-15 -15 230 240">
                        <g fill="none" strokeWidth="3" transform="translate(100,100)">
                        <path d="M 0,-100 A 100,100 0 0,1 86.6,-50" stroke="url(#cl1)"/>
                        <path d="M 86.6,-50 A 100,100 0 0,1 86.6,50" stroke="url(#cl2)"/>
                        <path d="M 86.6,50 A 100,100 0 0,1 0,100" stroke="url(#cl3)"/>
                        <path d="M 0,100 A 100,100 0 0,1 -86.6,50" stroke="url(#cl4)"/>
                        <path d="M -86.6,50 A 100,100 0 0,1 -86.6,-50" stroke="url(#cl5)"/>
                        <path d="M -86.6,-50 A 100,100 0 0,1 0,-100" stroke="url(#cl6)"/>
                        </g>
                    </svg>
                    <svg viewBox="-15 -15 230 240">
                        <path d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z" strokeDashoffset={629 * (1 - this.props.xp / 100)}></path>
                    </svg>
                </div>
            </div>
        )
    }
}
    

export default XP;