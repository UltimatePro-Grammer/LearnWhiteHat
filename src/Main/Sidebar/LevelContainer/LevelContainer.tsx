import React from 'react';
import XP from './XP/XP';
import './LevelContainer.css';

class LevelContainer extends React.Component<{width?: string}, {}> {
    render() {
        return (
            <div className="LevelContainer">
                <h1>Level 2</h1>
                <p>4/10</p>
                <XP xp={60} width={this.props.width || undefined} />
            </div>
        )
    }
}
    

export default LevelContainer;